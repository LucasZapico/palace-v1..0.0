---
title: "Mysql Catch"
date: 2019-08-03T12:05:08-07:00
draft: false
menu:
  docs:
    title: "Mysql Catch"
    parent: "Databases"
    name: "MySQL Catch"
---

# NOTES ON MYSQL DATABASES

---

### Installation ###

Upon download of dng mySQL shell and mySQL utilities expose mysql/bin to shell of choice



mySQL shell path and mySQL utilities path on system

```bash
 usr/local/mysql/bin && usr/local/mysql-shell/bin
```

navigate to shell profiles .bashrc, .bash_profile or .zshrc add

```bash
 export PATH=${PATH}:/usr/local/mysql-shell/bin
 export PATH=${PATH}:/usr/local/mysql/bin
```

Open terminal of choice 

```bash
mysql -u user-name -p
```

enter:

prompt for password 

Success, we have entered the mysql shell 


```bash
> shell mysql show databases;
//shows list of db's in current server
```




------

## Reference

*Notes within this doc have been drawn from the following sources:*

[MySQL shell CheatSheet](https://gist.github.com/hofmannsven/9164408)
