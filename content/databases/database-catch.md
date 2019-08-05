---
title: "Database Catch"
date: 2019-08-03T12:01:08-07:00
draft: false
menu:
  docs:
    title: "Database Catch"
    parent: "Databases"
    name: "Database catch"
---

a Database Notes Catch

## Table of Contents

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=5 orderedList=false} -->
<!-- code_chunk_output -->

- [Table of Contents](#table-of-contents)
- [---](#)
- [MongoDB](#mongodb)
        - [Show Current DB](#show-current-db)
        - [Show All DB](#show-all-db)
        - [Switch Database](#switch-database)
        - [Create a Database](#create-a-database)
        - [Repair Mongod](#repair-mongod)
- [RESOUCES](#resouces)
  - [REFERENCES](#references)
  - [TOOLS](#tools)

<!-- /code_chunk_output -->

---
---
## MongoDB
###### Show Current DB
```bash
> db
```

###### Show All DB
```bash
> show dbs
```

###### Switch Database
```bash
> use <database>
```
###### Create a Database
```bash
> use myNewDB
db.myNewCollection1.insertOne( {x : 1 })
```

###### Repair Mongod
```bash
sudo mongod --repaire

```


## RESOUCES
### REFERENCES
[Schema.org](https://schema.org/docs/schemas.html)
Schema.org is a collaborative, community activity with a mission to create, maintain, and promote schemas for structured data on the Internet, on web pages, in email messages, and beyond.


### TOOLS
