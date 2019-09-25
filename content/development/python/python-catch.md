---
title: "Python Catch"
date: 2019-08-05T17:27:16-07:00
draft: false
categories:  ['computer-science','python', 'foundations','reference','development']
menu:
  docs:
    title: "Python Catch"
    parent: "Python"
    name: "Python Catch"
---

# Python Catch

### List

_List can be heterogeneous data though they are commonly used with data of the same type_

##### Create List

```python
nephews = ["Huey", "Dewey","Louie"]
```

##### Access Element

```python
nephews[0]
# 'Huey'
```

#### Loop over

```python
for i in  range(len(nephews)):
  nephews[i] = nephews[i] + " Duck"

# ['Huey Duck', 'Dewey Duck', 'Louie Duck']
```

##### List Length

```python
len(nephews)
```

##### Add Element

**Method One**

```python
nephews.append("April Duck")
```

**Method Two**

```python
nephews.extends(['May Duck','June Duck'])
```

```python
ducks = nephews + ["Donald Duck", "Daisy Duck"]
```

##### Add at Index

```python
ducks.insert(0,"Scrooge McDuck")
```

#### Remove Element

_remove by value or index_

```python
ducks.remove("Donald Duck")
```

#### Sort

```python
ducks.sort()
```

#### Slices

_The number of elements returned by a slice is the difference of the two indices_

```python
squares = [0,1,4,9,16,25,36,49]
```

```python
squares[0:2]
# [0,1]
```

```python
squares[2:4]
# [4,9]
```

**Start to Index**

```python
squares[:4]
# [0,1,4,9]
```

**Index to End**

```python
squares[5:]
#[36,49]
```

**Count from End**

```python
squares[-1]
# [49]
```

##### Reassignment with Slices

```python
square[2:4] = ["four", "nine"]
# [0,1,"four","nine",16,25,36,49]
```

#### Loop with  `enumerate()`

```python
for index, value in enumerate(squares):
  print("Element", index, "->", value)
```

### Dictionary's

#### Create Dictionary

```python
capitals = {'United States': 'Washington, DC','France': 'Paris','Italy': 'Rome'}
```

#### Access Values

```python
capitals['Italy']
# 'Rome'
```

#### Add Key Value Pair

```python
capitals["Spain"] = "Madrid"
```

#### Check Key Existence

```python
'Germany' in capitals
# False

'Italy' in capitals
# True
```

#### Combining Dictionaries

Note: If we combine two or more dictionaries if duplicate values exist it will not be identified. To avoid this behavior we use an update method. This ensures that our new values are added to the dic and any old values not duplicated.

```python
morecapitals = {"Germany":"Berlin", "United Kingdom":"London"}
capitals.update(morecapitals)
# {'United States': 'Washington, DC','France': 'Paris','Italy': 'Rome',"Germany":"Berlin", "United Kingdom":"London"}
```

#### Delete Values

Delete values by key

```python
del capitals["United States"]
# {'France': 'Paris','Italy': 'Rome',"Germany":"Berlin", "United Kingdom":"London"}
```

#### Loops with Dictionaries

```python
for key in capitals:
  print(key, capitals[key])
```

**Loop over keys**

```python
for key in capitals.keys():
  print(key)
```

**Loop over values**

```python
for values in capitals.values():
  print(value)
```

#### Comprehensions

Suppose we want a array of integer squares

```python
squares = []

for i in range(10):
  squares.append(i**2)

#[0,1,4,9,16,25,36,49,64,81]
```

A **comprehension** can do the same operation in a single line

```python
squares = [i**2 for i in range(10)]
#[0,1,4,9,16,25,36,49,64,81]
```

We can also compound operations

```python
squares3 = [i**2 for i in range(30) if i % 3 ==0]
# [0,9,36,81,144,225,324,441,576,729]
```

##### Dictionaries and Comprehensions

## Practice Project - Find the Anagrams

-   load dictionary of words

```python
word = open('words','r')
```

-   drop\\n
-   to lowercase

-   unique
-   sort

```python
sorted('lives')
['e','i','l','s','v']
```

## Reference

### Convert from Unix time

```python
import datetime as dt
import time

# Current time in Unix time
now = time.time()
print(now)
# 1566146666.08675

dt.datetime.fromtimestamp(now)
# datetime.datetime(2019, 8, 18, 9, 43, 37, 731828)
```

## OS
```python
import os
```

#### Make Directory 

```python 
os.mkdir("some-dir")
```

## Reference

#### Add Progress Bar to Terminal

```python
# Print iterations progress
def printProgressBar (iteration, total, prefix = '', suffix = '', decimals = 1, length = 100, fill = '█'):
    """
    Call in a loop to create terminal progress bar
    @params:
        iteration   - Required  : current iteration (Int)
        total       - Required  : total iterations (Int)
        prefix      - Optional  : prefix string (Str)
        suffix      - Optional  : suffix string (Str)
        decimals    - Optional  : positive number of decimals in percent complete (Int)
        length      - Optional  : character length of bar (Int)
        fill        - Optional  : bar fill character (Str)
    """
    percent = ("{0:." + str(decimals) + "f}").format(100 * (iteration / float(total)))
    filledLength = int(length * iteration // total)
    bar = fill * filledLength + '-' * (length - filledLength)
    print('\r%s |%s| %s%% %s' % (prefix, bar, percent, suffix), end = '\r')
    # Print New Line on Complete
    if iteration == total:
        print()
```
