---
title: "Javascript Problems"
date: 2019-10-13T11:13:16-07:00
draft: false
categories:  ['']
menu:
  docs:
    title: "Javascript Problems"
    parent: "Javascript"
    name: "Javascript Problems"
---

### Remove Vowels

Given a string remove all of the vowels form said string.

```javascript
function reVowels(str){
  var pattern = /[aeio]/ig
  retrun str.replace(pattern, '')
}

reVowels('This website is amazing')
// Ths wbst s mzng
```
