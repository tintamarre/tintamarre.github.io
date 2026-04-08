-- benchmark_s3_vs_azure.sql
-- Manual benchmark: COPY a parquet dataset to S3 and Azure Blob, measure timing.
-- Run with:  duckdb -init benchmark_s3_vs_azure.sql :memory:
--
-- Prerequisites:
--   * DuckDB >= 1.4.3 (for native Azure writes)
--   * Fill in the placeholders below (⟨...⟩)
--   * Same region for client + both buckets, otherwise the test measures geography

.timer on
.mode box

INSTALL httpfs;  LOAD httpfs;
INSTALL azure;   LOAD azure;

--------------------------------------------------------------------------------
-- 1. Credentials
--------------------------------------------------------------------------------

CREATE SECRET s3_bench (
    TYPE s3,
    KEY_ID 'yyy',       -- == S3PROXY_IDENTITY
    SECRET 'xxx',     -- == S3PROXY_CREDENTIAL
    ENDPOINT 'localhost:8080',     -- s3proxy host:port
    URL_STYLE 'path',              -- required, s3proxy uses path-style
    USE_SSL false,                 -- true if fronted with TLS
    SCOPE 's3://container-test'             -- optional, default is s3://
);

-- Use the connection_string form for simplicity; swap for SAS/service principal if needed.
CREATE OR REPLACE SECRET az_bench (
    TYPE              azure,
    CONNECTION_STRING 'zzz'
);

-- Optional perf knobs worth A/B-testing on the Azure side.
SET azure_transport_option_type = 'curl';   -- often faster than the default SDK transport
SET enable_http_metadata_cache  = true;

--------------------------------------------------------------------------------
-- 2. Generate a deterministic, reasonably large test dataset (~5M rows, ~250MB)
--    Adjust the multiplier if you want a bigger/smaller payload.
--------------------------------------------------------------------------------

CREATE OR REPLACE TABLE bench_data AS
SELECT
    i                                             AS id,
    hash(i)                                       AS h,
    'row-' || i::VARCHAR                          AS label,
    (random() * 1000)::DOUBLE                     AS value,
    TIMESTAMP '2020-01-01' + INTERVAL (i) SECOND  AS ts,
    repeat('x', 32)                               AS padding
FROM range(0, 2_000_000) t(i);

SELECT COUNT(*) AS rows, (SUM(length(label)) + SUM(length(padding))) / 1024.0 / 1024.0 AS approx_mb
FROM bench_data;

--------------------------------------------------------------------------------
-- 3. Warm-up: write once locally to remove cold-start noise from the first remote write
--------------------------------------------------------------------------------

.print '--- warmup (local) ---'
COPY bench_data TO '/tmp/bench_warmup.parquet' (FORMAT parquet, COMPRESSION zstd);

--------------------------------------------------------------------------------
-- 4. WRITE benchmark — single large parquet file to each backend
--------------------------------------------------------------------------------

.print '--- WRITE: S3 single file ---'
COPY bench_data
TO 's3://container-test/bench/single.parquet'
(FORMAT parquet, COMPRESSION zstd, OVERWRITE_OR_IGNORE);

.print '--- WRITE: Azure single file ---'
COPY bench_data
TO 'az://container-test/bench/single.parquet'
(FORMAT parquet, COMPRESSION zstd, OVERWRITE_OR_IGNORE);

--------------------------------------------------------------------------------
-- 5. WRITE benchmark — partitioned write (stresses many small PUTs)
--------------------------------------------------------------------------------

.print '--- WRITE: S3 partitioned (10 files) ---'
COPY (SELECT *, id % 10 AS part FROM bench_data)
TO 's3://container-test/bench/partitioned'
(FORMAT parquet, PARTITION_BY (part), OVERWRITE_OR_IGNORE);

.print '--- WRITE: Azure partitioned (10 files) ---'
COPY (SELECT *, id % 10 AS part FROM bench_data)
TO 'az://container-test/bench/partitioned'
(FORMAT parquet, PARTITION_BY (part), OVERWRITE_OR_IGNORE);

--------------------------------------------------------------------------------
-- 6. READ benchmark — full scan + aggregation (cold), repeat for warm cache
--------------------------------------------------------------------------------

.print '--- READ: S3 cold ---'
PRAGMA disable_object_cache;
SELECT COUNT(*), AVG(value), MAX(ts) FROM 's3://container-test/bench/single.parquet';

.print '--- READ: S3 warm ---'
SELECT COUNT(*), AVG(value), MAX(ts) FROM 's3://container-test/bench/single.parquet';

.print '--- READ: Azure cold ---'
PRAGMA disable_object_cache;
SELECT COUNT(*), AVG(value), MAX(ts) FROM 'az://container-test/bench/single.parquet';

.print '--- READ: Azure warm ---'
SELECT COUNT(*), AVG(value), MAX(ts) FROM 'az://container-test/bench/single.parquet';

--------------------------------------------------------------------------------
-- 7. READ benchmark — selective projection + filter (tests range-request perf)
--------------------------------------------------------------------------------

.print '--- READ: S3 selective ---'
SELECT id, value FROM 's3://container-test/bench/single.parquet'
WHERE value > 990 AND id < 100000;

.print '--- READ: Azure selective ---'
SELECT id, value FROM 'az://container-test/bench/single.parquet'
WHERE value > 990 AND id < 100000;

--------------------------------------------------------------------------------
-- 8. READ benchmark — glob over partitioned dataset
--------------------------------------------------------------------------------

.print '--- READ: S3 glob partitioned ---'
SELECT part, COUNT(*) FROM 's3://container-test/bench/partitioned/**/*.parquet'
GROUP BY part ORDER BY part;

.print '--- READ: Azure glob partitioned ---'
SELECT part, COUNT(*) FROM 'az://container-test/bench/partitioned/**/*.parquet'
GROUP BY part ORDER BY part;

.print 'done. Compare the timings printed above.'
