---
title: "CSS Catch"
date: 2019-08-03T12:19:11-07:00
draft: false
menu:
  docs:
    title: "Css Catch"
    parent: "CSS"
    name: "CSS Catch"
---

# CSS NOTES

## _Description_

This document is meant as a running catch for notes pertaining to css.</br> The goal is to;
1. take notes and thereby reinforce concepts
2. by composing custom notes, develop a reference framework which maps onto my mental framework since I am the one composing it.

------------------


### Box Model

Def : The box model refers to the physical properties of an element's rectangular box.
- margins
- borders
- padding
- content width
- content height
(lynda.com, CSS: Page Layout)

## Accessibility Best Practices
2018

__SASS__
*Some browsers do not support em's, therefore it is a good practice to use some sort of mixen to convert em's to px"
```css
// Rem output with px fallback
@mixin font-size($sizeValue: 1) {
  font-size: ($sizeValue * 16) * 1px;
  font-size: $sizeValue * 1rem;
}
```

## Quick Reference

### Images
__object-fit__

```css
{
object-fit: fill;
object-fit: contain;
object-fit: cover;
object-fit: none;
object-fit: scale-down;
}
```

### CSS Principles

## catch
- a modules code should be stand alone. That is it should function the same in any container or parent element.  


-------

## RESOURCES
### REFERENCES
[CSS: Page Layout, lynda.com](https://www.lynda.com/Web-Interactive-CSS-training/CSS-Page-Layouts/86003-2.html)

### DEFINITIONS

---
## LOG
2018-06-12
Quick reference started
- images


---
## TODO
- []
