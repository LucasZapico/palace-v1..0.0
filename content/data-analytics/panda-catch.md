---
title: "Pandas Catch"
date: 2019-08-05T11:17:53-07:00
draft: false
menu:
  docs:
    title: "Pandas Catch"
    parent: "Data Analytics"
    name: "Pandas Catch"
---

# Pandas Catch

As the pandas documentation is pretty good and using it along with [devdocs.io](https://devdocs.io/) and a local bundler like [web2desk](https://appmaker.xyz/web2desk-for-business/?ref=producthunt) or if  you don't mind the terminal just use [nativefier](https://github.com/jiahaog/nativefier). This makes a quick ```cmd + tab``` to look up a method cake. 

Therefore the notes here are assorted tricks, best practices and code solutions to scenarios that were not easily decernable from the docs. Rather then my own restructuring of the docs. 



## Reference

### Tricks  

Pandas can be used to transform data types. 

### Best Practices 

```mermaid 
graph LR
  start --> id1[import data]
  id1 --> id2[df.shape]
  id2 --> id3[df.info]
  id3 --> id4[df.dtypes]
  id4 --> id5[df.columns.values]
  id5 --> id6[clean column header]
  id6 --> id7[check df.head()]

```

### Cleaning Data

##### Clean Column Headers

```python
df.rename(columns=lambda x: x.strip().lower().replace(" ", "_"), inplace=True)
# example "Some Header" --> "some_header"
```

##### Drop Column 

```python 
df.drop(axis=1, columns="<column-name>")
```

##### Drop Columns of NAN

```python
df.dropna(axis=1, how="all")
```

## Resources

### Where to Learn

[Sentdex - Data Analysis with Python and Pandas on YouTube](https://www.youtube.com/watch?v=Iqjy9UqKKuo&list=PLQVvvaa0QuDc-3szzjeP6N6b0aDrrKyL-)

[Python programing.net](https://pythonprogramming.net/)

### Data

[Kaggle](https://www.kaggle.com/)
