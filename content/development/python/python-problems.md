---
title: "Python-problems"
date: 2019-10-13T10:54:28-07:00
draft: false
categories:  ['']
tag: ['practise']
menu:
  docs:
    title: "Python-problems"
    parent: "Python"
    name: "Python problems"
---

### Remove Vowels

Given a sting remove all the vowels and return string.

**Option 1 - Regular Expression**

```python
import re

def revowels(string):
  pattern = "[aeiou]"
  return re.sub(pattern, string, flags=re.I)
```

**Option 2 - Translate**

```python
def revowels(string):
  return string.translate(None, 'aeiouAEIOU')
```
