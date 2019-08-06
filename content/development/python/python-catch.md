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

