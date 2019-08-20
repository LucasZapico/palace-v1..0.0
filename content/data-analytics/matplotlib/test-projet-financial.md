---
title: "Test Project Financial"
date: 2019-08-18T12:18:49-07:00
draft: false
menu:
  docs:
    title: "Test Project Financial"
    parent: "Matplotlib"
    name: "Test Project Financial"
---


### Getting Data from Internet

This project is builds on its self and so some code is repeated for context of that particular phase.

```python
import urllib
import matplotlib.dates as mdates
```


```python
def bytespdate2num(fmt, encoding='utf-8'):
    strconverter = mdates.strpdate2num(fmt)
    def bytesconverter(b):
        s = b.decode(encoding)
        return strconverter(s)
    return bytesconverter
```




```python
def graph_data():

    fig = plt.figure()
    ax1 = plt.subplot2grid((1,1), (0,0))
    
    stock_price_url = 'https://pythonprogramming.net/yahoo_finance_replacement'
    source_code = urllib.request.urlopen(stock_price_url).read().decode()
    
    stock_data = []
    split_source = source_code.split("\n")
    
    for line in split_source[1:]:
        split_line = line.split(',')
        if len(split_line) == 7: 
            if 'values' not in line: 
                stock_data.append(line)
    
    date, closep, highp, lowp, openp, adj_closep, volume = np.loadtxt(stock_data,
                                                          delimiter=',',
                                                          unpack=True,
                                                          # %Y = full year. 2015
                                                          # %y = partial year 15
                                                          # %m = number month
                                                          # %d = number day
                                                          # %H = hours
                                                          # %M = minutes
                                                          # %S = seconds
                                                          # 12-06-2014
                                                          # %m-%d-%Y
                                                          converters={0: bytespdate2num('%Y-%m-%d')})
    
   
    

    ax1.plot_date(date, closep,"-", label="price")
    
    ## visualize with fill
    ax1.fill_between(date, closep, 0, alpha=0.3)
    
    # set the tilt of date lable
    for label in ax1.xaxis.get_ticklabels():
        label.set_rotation(45)
    
    
    # Customizing Matplot lib
    ## color axis labels
    ax1.xaxis.label.set_color('r')
    ax1.yaxis.label.set_color('r')
    ## Change period of tick markers
    ax1.set_yticks([0,200,400,600,800,1000])

    
    plt.xlabel("Date")
    plt.ylabel("price")
    plt.title("Stock Price")
    plt.subplots_adjust(left=0.09, bottom=0.16, right=0.94, wspace=0.2, hspace=0.2)
    plt.legend()
  
    
```


```python
graph_data()
```


![basic bar](/data-analytics/matplotlib/images/basic-matplotlib-10.png)



### Add Profit Loss Fill


```python
def graph_data():

    fig = plt.figure()
    ax1 = plt.subplot2grid((1,1), (0,0))
    
    stock_price_url = 'https://pythonprogramming.net/yahoo_finance_replacement'
    source_code = urllib.request.urlopen(stock_price_url).read().decode()
    
    stock_data = []
    split_source = source_code.split("\n")
    
    for line in split_source[1:]:
        split_line = line.split(',')
        if len(split_line) == 7: 
            if 'values' not in line: 
                stock_data.append(line)
    
    date, closep, highp, lowp, openp, adj_closep, volume = np.loadtxt(stock_data,
                                                          delimiter=',',
                                                          unpack=True,
                                                          converters={0: bytespdate2num('%Y-%m-%d')})
    
   
    

    ax1.plot_date(date, closep,"-", label="price")
    
    ## visualize with fill
    ax1.fill_between(date, closep, closep[0], where=(closep > closep[0]), facecolor="g", alpha=0.3)
    ax1.fill_between(date, closep, closep[0], where=(closep < closep[0]), facecolor="r", alpha=0.3)
    
    
    # set the tilt of date lable
    for label in ax1.xaxis.get_ticklabels():
        label.set_rotation(45)
    
    
    # Customizing Matplot lib
    ## color axis labels
    ax1.xaxis.label.set_color('r')
    ax1.yaxis.label.set_color('r')
    ## Change period of tick markers
    ax1.set_yticks([0,200,400,600,800,1000])

    
    plt.xlabel("Date")
    plt.ylabel("price")
    plt.title("Stock Price")
    plt.subplots_adjust(left=0.09, bottom=0.16, right=0.94, wspace=0.2, hspace=0.2)
    plt.legend()
    plt.show()
  
```


```python
graph_data()
```



![basic bar](/data-analytics/matplotlib/images/basic-matplotlib-11.png)


### Add Candle Stick Profit Loss 


```python
import matplotlib.ticker as mticker
from matplotlib.finance import candlestick_ohlc
```


```python
def graph_data():

    fig = plt.figure()
    ax1 = plt.subplot2grid((1,1), (0,0))
    
    stock_price_url = 'https://pythonprogramming.net/yahoo_finance_replacement'
    source_code = urllib.request.urlopen(stock_price_url).read().decode()
    
    stock_data = []
    split_source = source_code.split("\n")
    
    for line in split_source[1:][:30]:
        split_line = line.split(',')
        if len(split_line) == 7: 
            if 'values' not in line: 
                stock_data.append(line)
    
    date, closep, highp, lowp, openp, adj_closep, volume = np.loadtxt(stock_data,
                                                          delimiter=',',
                                                          unpack=True,
                                                          converters={0: bytespdate2num('%Y-%m-%d')})
    
    x = 0
    y = len(date)
    ohlc = []
    
    while x < y:
        append_me = date[x], openp[x], highp[x], lowp[x], closep[x], volume[x]
        ohlc.append(append_me)
        x+=1

    candlestick_ohlc(ax1, ohlc, width=0.4, colorup="#61E984", colordown="#FA8072")
    
    for label in ax1.xaxis.get_ticklabels():
        label.set_rotation(45)
        
    ax1.xaxis.set_major_formatter(mdates.DateFormatter('%Y-%m-%d'))
    ax1.xaxis.set_major_locator(mticker.MaxNLocator(10))
    
    plt.xlabel("Date")
    plt.ylabel("price")
    plt.title('Stock Price')
    plt.subplots_adjust(left=0.09, bottom=0.16, right=0.94, wspace=0.2, hspace=0.2)
#     plt.legend()
    plt.show()
  
```


```python
graph_data()
```




![basic bar](/data-analytics/matplotlib/images/basic-matplotlib-12.png)


