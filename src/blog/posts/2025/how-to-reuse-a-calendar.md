---
date: 2025-03-26
title: "Comment savoir si on peut réutiliser un calendrier pour une année donnée en SQL ?"
sidebar: auto
author: Martin Erpicum
category: Data exploration
tags:
  - data
  - sql
---

**Executive summary**: Comment savoir si on peut réutiliser un calendrier pour une année donnée en SQL ?

---

# Comment savoir si on peut réutiliser un calendrier pour une année donnée en SQL ?

Pour comparer les calendriers de plusieurs années, on peut suivre la simple logique suivante :

- Si le 1er janvier et le 1er mars tombent le même jour de la semaine ;
- Alors on peut réutiliser le calendrier de l'année précédente.

On peut donc générer une clé composée de 2 chiffres en base 7 (de `0` à `6`) en fonction du jour de la semaine du 1er janvier et du 1er mars pour chaque année.

En joignant les calendriers de chaque année, on peut alors identifier les années où on peut réutiliser le calendrier de l'année précédente.

Et si on essayait de la faire en **SQL** ?

## Experimentation en DuckDB

```sql
SET VARIABLE start_year = '2000';
SET VARIABLE end_year = '2030-12-31'::date;
SET VARIABLE first_jan = concat(getvariable('start_year'), '-01-01')::date;
SET VARIABLE first_march = concat(getvariable('start_year'), '-03-01')::date;

WITH t_january AS (
    SELECT
        YEAR(generate_series) AS current_year,
        DAYOFWEEK(generate_series) AS wday
    FROM generate_series(
        getvariable('first_jan'),
        getvariable('end_year'),
        INTERVAL 1 year
    )
),
t_march AS (
    SELECT
        YEAR(generate_series) AS current_year,
        DAYOFWEEK(generate_series) AS wday
    FROM generate_series(
        getvariable('first_march'),
        getvariable('end_year'),
        INTERVAL 1 year
    )
),
key_by_year AS (
    SELECT
        t_january.current_year,
        concat(t_january.wday, t_march.wday) AS wday_key
    FROM t_january
    JOIN t_march
        ON t_january.current_year = t_march.current_year
),
calendars_joined AS (
    SELECT
        k1.current_year,
        k1.wday_key,
        k2.current_year AS compatible_year,
    FROM key_by_year AS k1
    JOIN key_by_year AS k2
        ON k1.wday_key = k2.wday_key
        AND k1.current_year != k2.current_year
)
SELECT
    current_year,
    array_agg(compatible_year ORDER BY compatible_year) AS same_wday_years
FROM calendars_joined
GROUP BY current_year
ORDER BY current_year;
```

# Et voilà ! :tada:

| current_year | same_wday_years    |
| -----------: | ------------------ |
|         2000 | [2028]             |
|         2001 | [2007, 2018, 2029] |
|         2002 | [2013, 2019, 2030] |
|         2003 | [2014, 2025]       |
|         2005 | [2011, 2022]       |
|         2006 | [2017, 2023]       |
|         2007 | [2001, 2018, 2029] |
|         2009 | [2015, 2026]       |
|         2010 | [2021, 2027]       |
|         2011 | [2005, 2022]       |
|         2013 | [2002, 2019, 2030] |
|         2014 | [2003, 2025]       |
|         2015 | [2009, 2026]       |
|         2017 | [2006, 2023]       |
|         2018 | [2001, 2007, 2029] |
|         2019 | [2002, 2013, 2030] |
|         2021 | [2010, 2027]       |
|         2022 | [2005, 2011]       |
|         2023 | [2006, 2017]       |
|         2025 | [2003, 2014]       |
|         2026 | [2009, 2015]       |
|         2027 | [2010, 2021]       |
|         2028 | [2000]             |
|         2029 | [2001, 2007, 2018] |
|         2030 | [2002, 2013, 2019] |
