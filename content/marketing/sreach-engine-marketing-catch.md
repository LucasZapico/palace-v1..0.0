---
title: "Search Engine Marketing Catch"
date: 2019-09-05T09:41:46-07:00
draft: false
categories:  ['marketing','sem', foundations']
menu:
  docs:
    title: "Search Engine Marketing Catch"
    parent: "Marketing"
    name: "SEM Principles"
---

## Basic Metrics 

| Measure   |  Definitions |
|---|---|
| Impressions   |    |
| Clicks | |
| CTR (Click through Rate)|  |
| Avg Position| | 
| CPC (cost per click) ||
| Conversions| | 
| CVR | | 
| CPA | | 
| Spend | |
| Revenue | | 
| Return on ad spend| | 


##### Click Through Rate(CTR)
 
$$ \frac{Clicks}{Impressions} $$

##### Cost per Click (CPC)

$$\frac{Total Spend}{Total Clicks} $$

##### Conversions Rate 

$$ \frac{Total Conversions}{Total Clicks}$$

##### Cost Per Acquisition 

$$ \frac{Conversions}{Spend} $$


----
## References

#### Snippets

__Pandas Marketing Metrics Function__
```python
def cal_met(df):
    df["CTR"] = df["Clicks"]/df["Impressions"]
    df["CPC"] = df["Clicks"]/df_ad["Spend"]
    df["CVR"] = df["Conversions"]/df["Clicks"]
    df["CPA"] = df["Conversions"]/df["Spend"]
    df["ROAS"] = df["Revenue"]/df["Spend"]
```

### Resources
[Google Ads Docs - Glossary ](https://support.google.com/google-ads/answer/2684489?hl=en)

### Definitions

__Click Through Rate(CTR)__
: $\frac{Clicks}{Impressions}$