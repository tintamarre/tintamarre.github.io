---
date: 2025-04-03
title: "Data Platform - Part 3: Lower the barrier 🚧"
sidebar: auto
author: Martin Erpicum
category: Article
tags:
  - data
  - orchestrator
---

_Executive summary_: In a polycephalous organization, Data Governance is a complex challenge. This article explores the implementation of a Data Platform based on [Dagster](https://dagster.io/) for the [Fédération Wallonie-Bruxelles (FWB)](https://www.federation-wallonie-bruxelles.be). It highlights the importance of automation, modularity, and component reusability to lower the technical barrier and improve data literacy among data analysts and data stewards.

---

_The views expressed on this website are my own and do not necessarily reflect the views of my employer._

**Table of contents**
[[toc]]

After the first two articles in this series, which focused on the [architecture of our data platform](/blog/posts/2025/data_platform_in_fwb_00_intro.html) and the [automation of our data pipelines](/blog/posts/2025/data_platform_in_fwb_01_automate.html), this article will discuss how we lower the technical barrier for our users and improve their data literacy.

There are two main aspects to this:

- **Reduce the complexity** of our data platform by providing common resources and components that can be reused by all data analysts and data stewards.
- **Level up the data literacy** of our users by training them, writing documentation, accompanying them in their first steps, and providing them with the necessary tools to understand and use the data platform.

## 🧑‍💻 Code reusability

Without any surprise, **Dagster** provide two main concepts to help code reusability: **resources** and **components**.

- **Resources** are used to connect to external systems (databases, APIs, etc.)
- **Components** (still kind of new) are used to define reusable pieces of code with `YAML` that can be used in multiple jobs or pipelines.

The two concepts are closely related, as resources are often used in components to connect to external systems.

Since our Data Platform leverage multipls code locations, and that we want to facilitate the onboarding of new data engineers, we need to build a common python library that contains all the resources, components and customs libs that we need to connect to our data sources. We called this library `dagster-cfwb`.

### Implement common library `dagster-cfwb` corresponding to our specific need

<ImageCenter src="https://raw.githubusercontent.com/tintamarre/tintamarre.github.io/refs/heads/master/src/assets/diagrams/dagster_cfwb.drawio.png" alt="" width="400" />

Our dagster-cfwb package contains all the Dagster resources that we need to connect to our data sources. This library is used by most of jobs and pipelines in our data platform. It includes resources for connecting to various databases (postgresql, mssql, mysql, db2, ...), APIs (denodo, custom api, oauth2, ...), and other data sources (lakehouse, ftp, nfs ...). It also includes custom components that can be used to perform common tasks, such as importing data from Denodo, storing to the data lakehouse and reporting metadata.

<ImageCenter src="https://raw.githubusercontent.com/tintamarre/tintamarre.github.io/refs/heads/master/src/assets/diagrams/dagster_cfwb.drawio.svg" alt="" width="600" />

To illustrate this, let's take a look at the `AzureAdlsResource` and `PostgreSQLResource` resources that we implemented in the `dagster-cfwb` library. These resources are used to connect to an Azure Data Lake Storage (ADLS) and a PostgreSQL database, respectively.

```python
from dagster_cfwb.resources.lakehouse.azure_adls_resource import AzureAdlsResource // [!code focus]
from dagster_cfwb.resources.db.postgresql_resource import PostgreSQLResource // [!code focus]

@asset() // [!code focus]
def gld_example( // [!code focus]
    context,
    azure_adls: AzureAdlsResource, // [!code focus]
    postgresql: PostgreSQLResource // [!code focus]
    ):

    df = azure_adls.query_blob_storage("FROM 'azure://code_location/stg/example.parquet'") // [!code focus]

    postgresql.copy_from_df(df, "example") // [!code focus]

    return MaterializeResult(
        metadata={
            "dagster/row_count": df.shape[0],
            "num_columns": df.shape[1],
            "dashboard_url": MetadataValue.url(
                "https://vizu.intranet.fwb.be/example_dashboard"
            ),
            "documentation_url": MetadataValue.url(
                "https://docs.intranet.fwb.be/example_documentation"
            ),
        },
    )

```

As you can see, the `AzureAdlsResource` and `PostgreSQLResource` resources are used to connect to the Azure Data Lake Storage and PostgreSQL database, respectively. The `gld_example` asset uses these resources to query data from the Azure Data Lake Storage and copy it to the PostgreSQL database. All the logic is encapsulated in the `dagster-cfwb` library, which makes it very easy to reuse this code.

## 📖 Level up the data literacy

- Train the data engineers and stewards
- Write documentation as much as possible
- document everything
- training
