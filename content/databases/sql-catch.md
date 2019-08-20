---
title: "SQL Catch"
date: 2019-08-03T12:03:42-07:00
draft: false
categories: ['data-analytics','databases']
menu:
  docs:
    title: "SQL Catch"
    parent: "Databases"
    name: "SQL catch"
---


#### SQL Categories

-   **DML** Data Manipulation Language
-   **DDL** Data Definition language

#### DBMS Database Management System

-   oracle
-   MySql
-   SQLlite

### Quick Reference

_Note SQL is not case sensitive but it is general practice to distinguish fields_

-   not case sensitive
-   not white space sensitive
-   not semi colon sensitive (officially it should)

Though the addition of each of these formats are best practice and general convention.

### Important

-   **String values in SQL are surrounded in single quotes**
-   **equality is a single =**

#### Select statement

```SQL
SELECT * FROM table;
// returns all columns from some table

SELECT * FROM table WHERE condition
// returns all columns from some table where a condition is met

SELECT * FROM database.table WHERE condition
// in some cases the database needs to be specified, though many SQL databases server have default databases that a query will be aplied to
```

Examples Select:

```SQL
SELECT FirstName FROM Employee;
// returns Firstname column from employee

SELECT FirstName, LastName FROM Employee;
// returns 2 columns FirstName and LastName

SELECT *  FROM Employee;
// returns all columns from employee table

SELECT *  FROM Employee WHERE LastName = 'Smith';
// returns all columns where lastname is equal to Smith
```

#### **Insert Statement**

```SQL
INSERT INTO table (a,b,c)
  VALUES (1,2,3)
  ORDER BY b;
```

#### **Update Statement**

```SQL
UPDATE table SET a = 7, b =5;
```

#### **Delete Statement**

```SQL
DELETE FROM table WHERE a = 7;
```

#### **Record match query**

```SQL
SELECT COUNT( * ) FROM table;
```

#### **Where\_**

The **Where** clause is the predicate. Where is boolean. It is either true of false

```SQL

```

## Resources

Notes within this doc have been drawn from the following sources:
[**MySQL shell CheatSheet**](https://gist.github.com/hofmannsven/9164408)

### References

#### Popular SQL databases

-   [MySQL](https://www.mysql.com/)
-   [PostgreSQL](https://www.postgresql.org/)

-   [CouchDB](https://couchdb.apache.org/)
-   [Redis](https://redis.io/)


### Tools

-   SQL Server Management Studio
-   SQL Developer
-   Toad




### Installation

Upon download of dng mySQL shell and mySQL utilities expose mysql/bin to shell of choice

> Example:
>
> mySQL shell path and mySQL utilities path on system
>
>     usr/local/mysql/bin && usr/local/mysql-shell/bin
>
> navigate to shell profiles .bashrc, .bash_profile or .zshrc add
>
>     export PATH=${PATH}:/usr/local/mysql-shell/bin
>     export PATH=${PATH}:/usr/local/mysql/bin
>
> Open terminal of choice
>
>     mysql -u user-name -p
>
> enter:
>
> prompt for password
>
> Success, we have entered the mysql shell

    > shell mysql show databases;
    //shows list of db's in current server



* * *


