---
title: "Numpy Catch"
date: 2019-08-06T17:35:45-07:00
draft: false
menu:
  docs:
    title: "Numpy Catch"
    parent: "Python"
    name: "Numpy Catch"
---

## Numpy Catch 

- multidimentional array 
- large sets 

python is flexible 

- numpy organizes data in memory in a simple way
- numpy is precise with regards to data types 
- numpy's data types allows for interface with C

- create numpy arrays
- ```shape, size, ndim``` 
- make array ``` np.zeros((3,3), 'd')```
- make range ```np.arange(0,10,2)```
- generate random array ```np.random.standar_normal((2,4))```

- generate two random arrays and stack 

```python
a = np.random.standard_normal((2,3))
b = np.random.standard_normal((2,3))

np.vstack([a,b])
```