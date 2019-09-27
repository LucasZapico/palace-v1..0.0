---
title: "Predictive Analytics"
date: 2019-09-04T20:06:21-07:00
draft: false
categories:  ['computer-science','python', 'data-analytics']
menu:
  docs:
    title: "Predictive Analytics"
    parent: "Data Analytics"
    name: "Predictive Analytics"
---

## Project Roadmap 

<div class="mermaid">
graph LR;
  id1[Business Understanding]-->id2[Data Understanding]
  id2-->id3[Data Preparation]
  id3-->id4[Modeling]
  id4-->id5[Evaluation]
  id5-->id6[Deployment]
<div>

#### Business Understanding 

Destination or goal. 

#### Data Understanding

Familiarize with data and ensuring that their is enough data for analysis.

#### Data Preparation

Cleaning, normalizing, transposing data.

#### Modeling

Test and train. Training the model. 

#### Evaluation

Determine the validity and therefore applicability of a model. Determining discrepancies in a given model during this stage can be just as important as validating a model. 

This is often a iterative phase.

#### Deployment

Applying a given model to the environment.

### Roadmap Conclusion 

- models are useful but it is imperative to take into account the expertise and expierencail knowledge from subject matter experts. 

> At the end of the day, a model no matter how accurate is still a model. 

### Data Types  

- numerical 
  - interval
  - ratio
  
- categorical
  - nominal
  - ordinal

| Data         | = or != | < or > | + or - | * or \ |
|--------------|---------|--------|--------|--------|
| __Nominal__  | Yes     | No     | No     | No     |
| __Ordinal__  | Yes     | Yes    | No     | No     |
| __Interval__ | Yes     | Yes    | Yes    | No     |
| __Ratio__    | Yes     | Yes    | Yes    | Yes    |


*Predictive Models cannot process categorical data*

### Data Preparation Set 

> Garbage in garbage out

#### Converting Categorical data

- label encoding (two distinct values)
- one hot encoding (more then two values)

|             | Label Encoding     | One Hat Encoding    |
|-------------|--------------------|---------------------|
| __sklearn__ | ```LabelEncoder``` | ```OneHotEncoder``` |
| __pandas__  | ```factorize()```  | ```get_dummies```   |


*__Note:__ I think a One Hat Encoding result can be attain in a more concise method with ```groupby()``` and ```unstack()```*  


## References 

[Cross Industry Standard Process for Data Mining](https://en.wikipedia.org/wiki/Cross-industry_standard_process_for_data_mining)

### Resources 

Python libraries 
- pandas
- Numpy
- scikit-learn
- maaplotlib
- seaborn

### Definitions

__Data__
: data is either numerical or categorical 

__Numerical Data__
: Numerical data can either be an interval or ratio

__Interval Data__
: Interval data can be ordered, added and subtracted. But, interval (scale) data does not have a true zero and can not be multiplied or divided with meaning. 

__Ratio Data__
: Ratio data is identical to interval except it has a true zero point. Equal, not equal, ordinal, commutable, 

__Categorical Data__
: Categorical data can either be nominal or ordinal

__Nominal Data__
: Nominal data is either equal or not to a given reference or not.
: Nominal data does not have "method", that is it cannot be commuted (added, subtracted, multiplied, divided)
: Example: A given colored ball is either green, blue, or red. 

__Ordinal Data__
: Ordinal data can be equal or not and can be ordered along a given scale.
: Example: The radius of a given set of balls are equal, greater than or less than. They cannot be operated on. 