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

## Reference

### Cleaning Data 

##### Clean Column Headers

```python 

df.rename(columns=lambda x: x.strip().lower().replace(" ", "_"), inplace=True)
# example "Some Header" --> "some_header"
```

##### Drop Columns of NAN

```python 
df.dropna(axis=1, how="all")
```