---
title: "Matplotlib Catch"
date: 2019-08-10T12:29:17-07:00
draft: false
menu:
  docs:
    title: "Matplotlib Catch"
    parent: "Matplotlib"
    name: "Matplotlib Catch"
---

## Import

```python
import matplotlib.pyplot as plt
import numpy as np
```

_Assumes best practice import of matplotlib_

### Line Graph

```python
plt.plot(<x-valuse>, <y-values>)
```

### labels

plt.xlabel()
plt.ylabel()
plt.legend()
plt.title()

### bar

```python
plt.bar(x,y, label="Bar1")
```

__First Plot__


```python
plt.plot([1,2,3],[5,7,4])
```

![basic bar](/data-analytics/matplotlib/images/basic-matplotlib-1.png)



#### Multiple Functions

```python
x = [1,2,3]
y = [5,9,11]
x2 = x
y2 = [y*2 for y in y]
```


##### Basic Plot Attributes


```python
plt.plot(x,y, label="first line")
plt.plot(x2,y2, label="second line")
plt.xlabel('Plot Number')
plt.ylabel('Vars')
plt.legend()
plt.title('Amazing Graph')
```
![basic line plot](/data-analytics/matplotlib/images/basic-matplotlib-2.png)

### Basic Bar Charts and Histograms 


```python
x = np.random.randint(10, size=4)
y = np.random.randint(20, size=4)
print(x,y)
```

    [2 6 4 3] [10 12  2  7]

```python
x2 = np.random.randint(10, size=4)
y2 = np.random.randint(20, size=4)
print(x2,y2)
```

    [2 6 3 2] [15  7 16  9]

```python
plt.bar(x,y, label="bars int")
plt.legend()
plt.title('Interesting Bars')
```

    Text(0.5,1,'Interesting Bars')

![basic bar](/data-analytics/matplotlib/images/basic-matplotlib-3.png)


```python
plt.bar(x,y, label="bars int", color="red")
plt.bar(x2,y2, label="bars two", color='blue')
plt.legend()
plt.title('Interesting Bars')
```



![basic bar](/data-analytics/matplotlib/images/basic-matplotlib-4.png)


#### Histogram


```python
pop = np.random.randint(50, size=60)

print(pop)
```

    [ 2 36 49 37 33 17 45 13 30  2  2 47  2 27 29 31  1 18 26 28 16 19 22  0
     40 27 37 10 25 33 24 37  4  4 34 28 25 34 39 17 23  4 36 11 14 38 49  7
     20 26 19 36 25  9 29 40 22 41 10 46]


Histograms take a set of data and defined bins and sorts the data set into the defined bins


```python
bins = [5,10,15,20,25,30,35,40,45,50]
plt.hist(pop, bins, histtype="bar", rwidth=0.8)
```


![basic bar](/data-analytics/matplotlib/images/basic-matplotlib-5.png)



### Scatter plots 


```python
xsc = list(range(0,50))
ysc = np.random.randint(50, size=50)
ssc = np.random.randint(50, size=50)
```


```python
# ```s``` is size 
plt.scatter(xsc,ysc, label="scatter", color="c", s=ssc)
plt.legend()
```

![basic bar](/data-analytics/matplotlib/images/basic-matplotlib-6.png)




### Pie Chart


```python
slices = np.random.randint(24, size=4)
activities = ['sleep','eat','work','study']
```


```python
plt.pie(slices, 
        labels=activities, 
        startangle=90, 
        shadow=True, 
        explode=(0,0.2, 0,0),
       autopct="%1.1f%%");
```

![basic bar](/data-analytics/matplotlib/images/basic-matplotlib-8.png)