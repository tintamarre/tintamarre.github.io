---
date: 2024-12-03
title: "Address lookup - Part 2b: Messing around"
sidebar: auto
author: Martin Erpicum
category: Exploration
tags:
  - data
  - exploration
---

_Executive summary_: In Belgium, a collaborative effort between regional and federal authorities has led to the creation of a unified service that aggregates all Belgian addresses into a comprehensive dataset. This dataset is called [BeStAddress](https://bosa.belgium.be/fr/services/best-address-services).

---

# Address lookup - Part 2b: Messing around

This post is a continuation of the [previous post](/blog/posts/2024/address_lookup-part2-sourcing) where we have analyzed the data model of the BeStAddress dataset.

## Introduction

In Belgium, each municipality is responsible for naming its streets. [Although it is recommended to avoid similar street names](https://www.ibz.rrn.fgov.be/fileadmin/user_upload/fr/rn/circulaires/BeSt_20201104_F.pdf), this can sometimes result in two streets within the same municipality having very similar names. In this post, we will explore the **BeStAddress dataset** to identify pairs of streets with similar names that are geographically close to each other.

To analyse this, we will use the [unified table that aggregates all the data from the different regions of Belgium](/blog/posts/2024/address_lookup-part2-sourcing) to find pairs of streets with similar names that are close to each other.

We will proceed in three steps:

1. Find the average latitude and longitude of each street in each municipality.
2. Calculate the distance between each pair of streets in the same municipality.
3. Calculate the Levenshtein distance between the street names of each pair of streets.

## Step 1: Find the average latitude and longitude of street in each municipality

This step will allow us to identify the geographical center of each street in the dataset and then use this information to calculate the distance between pairs of streets.

```sql
WITH averages_by_streets AS (
      SELECT municipality_id,
             street_id,
             round(AVG(latitude), 4) AS latitude,
             round(AVG(longitude), 4) AS longitude,
      FROM bestAddress
      GROUP BY municipality_id, street_id
  )
SELECT * FROM averages_by_streets
```

## Step 2. Distance Calculation

We will calculate the distance between each pair of streets in the same municipality. We will use the **Haversine formula** to calculate the distance between two points on the Earth's surface given their latitude and longitude.

After calculating the distance between each pair of streets, we will filter the results to only include pairs of streets that are less than 5 kilometers apart.

```sql
WITH averages_by_streets AS (
      SELECT municipality_id,
             street_id,
             round(AVG(latitude), 4) AS latitude,
             round(AVG(longitude), 4) AS longitude,
      FROM bestAddress
      WHERE postcode = '4140' -- Filter by municipality_id == Sprimont
      GROUP BY municipality_id, street_id
  ),
combination_streets AS (
    SELECT a.municipality_id AS municipality_id_1,
           a.street_id AS street_id_1,
           a.latitude AS lat1,
           a.longitude AS lon1,
           b.municipality_id AS municipality_id_2,
           b.street_id AS street_id_2,
           b.latitude AS lat2,
           b.longitude AS lon2
    FROM averages_by_streets a
    CROSS JOIN averages_by_streets b
    WHERE 1 = 1
      AND (a.municipality_id, a.street_id) <> (b.municipality_id, b.street_id) -- Exclude self-joins
      AND (a.municipality_id < b.municipality_id
           OR (a.municipality_id = b.municipality_id AND a.street_id < b.street_id)
        )  -- Ensure unique pairs
),
distance_calculation AS (
    SELECT municipality_id_1,
           street_id_1,
           municipality_id_2,
           street_id_2,
           -- Haversine Formula
           -- 6371 is the radius of the Earth in kilometers
           -- RADIANS converts degrees to radians
           6371 * 2 * ASIN(SQRT(POWER(SIN(RADIANS(lat2 - lat1) / 2), 2) +
                                COS(RADIANS(lat1)) * COS(RADIANS(lat2)) *
                                POWER(SIN(RADIANS(lon2 - lon1) / 2), 2))) AS distance_km
    FROM combination_streets
)
SELECT municipality_id_1,
       street_id_1,
       municipality_id_2,
       street_id_2,
       round(distance_km, 2) AS distance_km
FROM distance_calculation
WHERE distance_km < 5;
```

## Step 3. Levenshtein Distance Calculation

Finally, we will calculate the Levenshtein distance between the street names of each pair of streets. The Levenshtein distance is a measure of the similarity between two strings. It is defined as the minimum number of single-character edits (insertions, deletions, or substitutions) required to change one string into the other.

```sql
WITH averages_by_streets AS (
      SELECT municipality_id,
             street_id,
             round(AVG(latitude), 4) AS latitude,
             round(AVG(longitude), 4) AS longitude,
      FROM bestAddress
      WHERE postcode = '4140' -- Filter by municipality_id == Sprimont
      GROUP BY municipality_id, street_id
  ),
unique_streetname AS (
    SELECT municipality_id,
           street_id,
           default_streetname
    FROM bestAddress
    WHERE 1=1
    AND street_id IN (SELECT street_id FROM averages_by_streets)
    AND municipality_id IN (SELECT municipality_id FROM averages_by_streets)
    GROUP BY ALL
),
combination_streets AS (
    SELECT a.municipality_id AS municipality_id_1,
           a.street_id AS street_id_1,
           a.latitude AS lat1,
           a.longitude AS lon1,
           b.municipality_id AS municipality_id_2,
           b.street_id AS street_id_2,
           b.latitude AS lat2,
           b.longitude AS lon2
    FROM averages_by_streets a
    CROSS JOIN averages_by_streets b
    WHERE 1 = 1
      AND (a.municipality_id, a.street_id) <> (b.municipality_id, b.street_id) -- Exclude self-joins
      AND (a.municipality_id < b.municipality_id
           OR (a.municipality_id = b.municipality_id AND a.street_id < b.street_id)
        )  -- Ensure unique pairs
),
distance_calculation AS (
    SELECT municipality_id_1,
           street_id_1,
           municipality_id_2,
           street_id_2,
           -- Haversine Formula
           -- 6371 is the radius of the Earth in kilometers
           -- RADIANS converts degrees to radians
           6371 * 2 * ASIN(SQRT(POWER(SIN(RADIANS(lat2 - lat1) / 2), 2) +
                                COS(RADIANS(lat1)) * COS(RADIANS(lat2)) *
                                POWER(SIN(RADIANS(lon2 - lon1) / 2), 2))) AS distance_km
    FROM combination_streets
), combination_with_distances_filtered AS (
SELECT municipality_id_1,
       street_id_1,
       municipality_id_2,
       street_id_2,
       round(distance_km, 2) AS distance_km
FROM distance_calculation
WHERE distance_km < 5
),
levenstein_distance AS (
SELECT
    municipality_id_1,
    street_id_1,
    municipality_id_2,
    street_id_2,
    distance_km,
    a.default_streetname AS streetname_1,
    b.default_streetname AS streetname_2,
    levenshtein(a.default_streetname, b.default_streetname) AS levenshtein_distance
FROM combination_with_distances_filtered
LEFT JOIN unique_streetname AS a
ON a.municipality_id = municipality_id_1
AND a.street_id = street_id_1
LEFT JOIN unique_streetname AS b
ON b.municipality_id = municipality_id_2
AND b.street_id = street_id_2
)
SELECT * FROM levenstein_distance
WHERE 1=1
   AND levenshtein_distance < 10
   AND levenshtein_distance > 0
ORDER BY levenshtein_distance, distance_km;
```

That's it! We have successfully identified pairs of streets with similar names that are geographically close to each other. It is a long query, but it is very powerful and can be used to identify potential issues with street names in the BeStAddress dataset.

## Results

| municipality_id_1 | street_id_1 | municipality_id_2 | street_id_2 | distance_km | streetname_1       | streetname_2       | levenshtein_distance |
| ----------------: | ----------: | ----------------: | ----------: | ----------: | ------------------ | ------------------ | -------------------: |
|             62100 |     7732983 |             62100 |     7732991 |        4.16 | Rue de Damré       | Rue de Gomzé       |                    3 |
|             62100 |     7732996 |             62100 |     7733018 |        2.53 | Rue de la Carrière | Rue de la Sablière |                    3 |
|             62100 |     7733062 |             62100 |     7733067 |        0.63 | Rue des Fawes      | Rue des Marets     |                    3 |
|             62100 |     7733110 |             62100 |     7733117 |        3.48 | Rue du Roua        | Rue du Voué        |                    3 |
|             62100 |     7732981 |             62100 |     7733047 |        4.02 | Rue de Coreux      | Rue de Theux       |                    3 |
|             62100 |     7732981 |             62100 |     7733042 |        1.13 | Rue de Coreux      | Rue de Rouvreux    |                    3 |
|             62100 |     7732961 |             62100 |     7733129 |        0.27 | Rue Basse Lillé    | Rue Haute Lillé    |                    3 |
|             62100 |     7733092 |             62100 |     7733108 |        4.55 | Rue du Coq         | Rue du Pont        |                    3 |
|             62100 |     7733105 |             62100 |     7762862 |        0.33 | Rue du Pahy        | Rue du Parc        |                    2 |
|             62100 |     7733124 |             62100 |     7733132 |        4.37 | Rue Ferreuse       | Rue Houreuse       |                    3 |
|             62100 |     7733123 |             62100 |     7733124 |         3.9 | Rue Ferrer         | Rue Ferreuse       |                    3 |
|             62100 |     7733081 |             62100 |     7762862 |         2.6 | Rue du Baron       | Rue du Parc        |                    3 |
|             62100 |     7733083 |             62100 |     7762862 |        1.66 | Rue du Baty        | Rue du Parc        |                    3 |
|             62100 |     7733083 |             62100 |     7733105 |        1.99 | Rue du Baty        | Rue du Pahy        |                    2 |
|             62100 |     7733081 |             62100 |     7733083 |        3.85 | Rue du Baron       | Rue du Baty        |                    3 |

## Further exploration

<ImageCenter src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTZ6NW5nbXU2Z3hudGszMDljM2lodjR3bHJyZ3Zva3VvZTF5Z3ZqYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KEXq9JVp3OyZmxZw0W/giphy.gif" alt="Let's check the data" width="800" />

This dataset is rich in information and can be used to answer a wide range of questions. Here are a few examples of other queries that can be run on the BeStAddress dataset:

### Finding all unique combinations of two different street_id within the same municipality_id

To retrieve all unique combinations of two different street IDs within the same municipality_id from a SQL database, you can use a self-join. A self-join allows you to pair rows from the same table where certain conditions are met (in this case, two differents street IDs but the same municipality ID).

```sql
WITH DistinctStreets AS (
    SELECT
        municipality_id,
        street_id,
        round(avg(latitude), 3) AS latitude, -- Round to 3 decimal places (= ~110 meters)
        round(avg(longitude), 3) AS longitude
    FROM
        bestAddress
    GROUP BY
        municipality_id, street_id
)
SELECT
    a.municipality_id,
    a.street_id AS first_street_id,
    b.street_id AS second_street_id,
    a.latitude AS first_street_latitude,
    a.longitude AS first_street_longitude,
    b.latitude AS second_street_latitude,
    b.longitude AS second_street_longitude
FROM
    DistinctStreets AS a
JOIN
    DistinctStreets AS b
    ON a.municipality_id = b.municipality_id -- Same municipality
        AND a.street_id < b.street_id -- Ensure different street ids and avoid duplicate combinations (like (1, 2) and (2, 1))
ORDER BY
    a.municipality_id,
    a.street_id,
    b.street_id
LIMIT 100;
```

### Percentage of non-NULL streetname_fr, streetname_de, and streetname_nl per municipality

```sql
WITH DistinctStreets AS (
    SELECT
        DISTINCT municipality_id, street_id, streetname_fr, streetname_de, streetname_nl
    FROM
        BestAddress
)
SELECT
    municipality_id,
    COUNT(street_id) AS total_streets,  -- Total number of distinct streets per municipality

    -- Percentage of non-NULL streetname_fr
    (COUNT(
    CASE WHEN streetname_fr IS NOT NULL THEN 1 END)
    /
    CAST(COUNT(street_id) AS FLOAT) * 100)
    AS pct_streetname_fr,

    -- Percentage of non-NULL streetname_de
    (COUNT(
    CASE WHEN streetname_de IS NOT NULL THEN 1 END)
    /
    CAST(COUNT(street_id) AS FLOAT) * 100)
    AS pct_streetname_de,

    -- Percentage of non-NULL streetname_nl
    (COUNT(
    CASE WHEN streetname_nl IS NOT NULL THEN 1 END)
    /
    CAST(COUNT(street_id) AS FLOAT) * 100)
    AS pct_streetname_nl

FROM
    DistinctStreets
GROUP BY
    municipality_id;
```

### Percentage of non-NULL streetname_fr, streetname_de, and streetname_nl per municipality, excluding municipalities where any of the streetname percentages are 0 or 100

```sql
WITH DistinctStreets AS (
      SELECT
          DISTINCT municipality_id, street_id, streetname_fr, streetname_de, streetname_nl, region_code
      FROM
          BestAddress
  )
  SELECT
      municipality_id,
      region_code,
      COUNT(street_id) AS total_streets,  -- Total number of distinct streets per municipality

      -- Percentage of non-NULL streetname_fr
      (COUNT(CASE WHEN streetname_fr IS NOT NULL THEN 1 END) / CAST(COUNT(street_id) AS FLOAT) * 100) AS pct_streetname_fr,

      -- Percentage of non-NULL streetname_de
      (COUNT(CASE WHEN streetname_de IS NOT NULL THEN 1 END) / CAST(COUNT(street_id) AS FLOAT) * 100) AS pct_streetname_de,

      -- Percentage of non-NULL streetname_nl
      (COUNT(CASE WHEN streetname_nl IS NOT NULL THEN 1 END) / CAST(COUNT(street_id) AS FLOAT) * 100) AS pct_streetname_nl

  FROM
      DistinctStreets
  GROUP BY
      municipality_id, region_code
  HAVING
      -- Filter municipalities where any of the streetname percentages are not 0 or 100
      (COUNT(CASE WHEN streetname_fr IS NOT NULL THEN 1 END) / CAST(COUNT(street_id) AS FLOAT) * 100) NOT IN (0, 100)
      OR (COUNT(CASE WHEN streetname_de IS NOT NULL THEN 1 END) / CAST(COUNT(street_id) AS FLOAT) * 100) NOT IN (0, 100)
      OR (COUNT(CASE WHEN streetname_nl IS NOT NULL THEN 1 END) / CAST(COUNT(street_id) AS FLOAT) * 100) NOT IN (0, 100)
  ORDER BY
      region_code;
```
