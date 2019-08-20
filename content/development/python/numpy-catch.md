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

- multidimensional array 
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

## Reference 


### Random Arrays 
__Use Case__ This is a great go to when testing or exploring. It cuts out the need to build test data. 

__Example__ Testing [Matplotlib]() or [Seaborn]() plots. Use Random arrays to generate the test data

### Create Array of Random Floats 

```python 
x = np.random.rand(1,4)
x
# array([[0.60594311, 0.49295343, 0.33747387, 0.67264984]])
```

### [Create Array of Random Integers](https://docs.scipy.org/doc/numpy-1.15.1/reference/generated/numpy.random.randint.html)

```python 
x = np.random.randint(10, size=4)
x
# array([6, 4, 2, 1])
```
