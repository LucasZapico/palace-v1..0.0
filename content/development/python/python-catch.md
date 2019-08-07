---
title: "Python Catch"
date: 2019-08-05T17:27:16-07:00
draft: false
categories:  ['computer-science','python', 'foundations','reference','development']
menu:
  docs:
    title: "Python Catch"
    parent: "Development"
    name: "Python Catch"
---

# Python Catch 

### List 

*List can be heterogeneous data though they are commonly used with data of the same type*

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
__Method One__
```python 
nephews.append("April Duck")
```

__Method Two__
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
*remove by value or index*

```python 
ducks.remove("Donald Duck")
```

#### Sort 

```python
ducks.sort()
```

#### Slices 

*The number of elements returned by a slice is the difference of the two indices*

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

__Start to Index__

```python 
squares[:4]
# [0,1,4,9]
```

__Index to End__

```python 
squares[5:]
#[36,49]
```

__Count from End__

```python 
squares[-1]
# [49]
```

##### Reassignment with Slices 

```python 
square[2:4] = ["four", "nine"]
# [0,1,"four","nine",16,25,36,49]
```

#### Loop with  ```enumerate()```

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

####  Check Key Existence 

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

__Loop over keys__

```python
for key in capitals.keys(): 
  print(key)
```

__Loop over values__


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
A __comprehension__ can do the same opperation in a single line
```python 
squares = [i**2 for i in range(10)]
#[0,1,4,9,16,25,36,49,64,81]
```

We can also compound opperations 

```python 
squares3 = [i**2 for i in range(30) if i % 3 ==0]
# [0,9,36,81,144,225,324,441,576,729]
```

##### Dictionaries and Comprehensions

## Practise Project - Find the Anagrams

- load dictionary of words 
  
```python 
word = open('words','r')
```

- drop\n 
- to lowercase

- unqiue 
- sort 

```python 
sorted('lives')
['e','i','l','s','v']
```