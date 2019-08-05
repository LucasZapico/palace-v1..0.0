---
title: "Leaning C# Algorithms - LinkedIn Learning(Lynda.com)"
date: 2019-07-28T11:04:58-07:00
draft: false
categories:  ['computer-science','algorithms','foundations']
menu:
  docs:
    name: "C#"
    parent: "Algorithms"
---

# Algorithms

## Courses

## [Leaning C# Algorithms](https://www.lynda.com/C-tutorials/Learning-C-Algorithms/604241-2.html)

[Lynda](https://www.lynda.com)
**log**
4/14/2018

### Overview

**Algorithm uses**

-   compressing data
-   sorting
-   generating random numbers

Start: 4/14/2018, 11:00:00 AM

### Common Algorithms

#### [Linked List](https://en.wikipedia.org/wiki/Linked_list)

Collection of items, in nodes which points to the next element in the list.
**Benefit**

-   insert data at any point
-   can increase of decrease the size with relative efficiency.

**Key Terms**
**head**: beginning of a linked list
**tail**: end of a linked list
**NULL**: last node

![Class definition of node](./class-definition-diagram.png)

[Singly linked list](https://en.wikipedia.org/wiki/Linked_list#Singly_linked_list)
A singly linked list does not contain a pointer to the previous node in the list.
_//Note: examine further:drill:train_

#### [Stack](https://en.wikipedia.org/wiki/Stack_(abstract_data_type))

The stack is an abstract data type that serves as a collection of elements
**Key Terms**
**push**: add an element
**pop**: remove element
~ _Stack is a [LIFO(last in fist out)](https://en.wikipedia.org/wiki/FIFO_and_LIFO_accounting) structure_

Note: elements are not actually removed or added to the array. Rather pointers
_End: 4/14/2018, 1:10:10 PM_

* * *

## CoderByte

_Description: notes on algorithms from [CoderByte](https://coderbyte.com/)_
_Date: 11/22/2018, 6:11:06 AM_

### Tree Traversal Algorithms

A tree traversal is the process of visiting each node in a tree exactly once.

##### Example Pre-order

```JavaScript
// Construct Nodes
function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

// create nodes
var root = new Node('A');
var n1 = new Node('B');
var n2 = new Node('C');
var n3 = new Node('D');
var n4 = new Node('E');

// setup children
root.left = n1;
root.right = n2;
n1.left = n3;
n1.right = n4;
```

```JavaScript
function pre_order(root, nodes){
  nodes.push(root.data);
  if(root && root.left){
    pre_order(root.left, nodes);
  }
  if(root && root.right){
    pre_order(root.right, nodes);
  }
  return nodes;
}

pre_order(root, []);
// ["A", "B", "D", "E", "C"]
```

##### Example In-orderr

```javaScript
function in_order(root, nodes){
  if(root && root.left){
    in_order(root.left, node);
  }
  node.push(root.data);
  if(root && root.right){
    in_order(root.rigth, nodes);
  }
  return nodes;
}

in_order(root, []); // => [D, B, E, A, C]
```

##### Example Post-Order

Post-order traversal on the tree is performed in the following.
1. Travers the left subtree by recursively calling the post-order function.
2. Travers the right subtree by recursively calling the post-order function
3. Return the root node value.

```javaScript
function post_order(root, nodes){
  if(root && root.left){
    post_order(root.left, nodes);
  }
  if(root && root.right){
    post_order(root.right, nodes);
  }
  nodes.push(root.data);
  return nodes;
}

post_order(root, []); // => [D, E, B, C, A]
```

##### Level-order

Level-order traversal on a tree perform the following steps starting from the root:
1. add the root to a queue.
2. Pop the last node from the queue, and return its value.
3. Add all children of popped node to queue, and continue fro mstep 2 untill queue is empty.

```javaScript
function level_order(root, nodes){
  var queue = [root];
  while(queue.length > 0){
    // fron of queue is at element 0 and we push elements to back
    var n = queue.shift();
    nodes.push(n.data);
    if(n.left !== null)(queue.push(n.left);)
    if(n.right !== null)(queue.push(n.right);)
  }
  return nodes;
}
level_order(root, []) // => [A, B, C, D, E]
```



## Catch

## RESOURCES

### REFERENCES

[Lynda: Learning C# Algorithms](https://www.lynda.com/C-tutorials/Learning-C-Algorithms/604241-2.html)

   Name | Age
--------|------
    Bob | 27
  Alice | 23

**List of common sorting algorithms**

 name             | acquainted | practiced | competent | proficient | expert     
------------------|------------|-----------|-----------|------------|--------
 Bubble sort      | X          |           |           |            |            
 Heapsort         | X          |           |           |            |            
 Quicksort        |            |           |           |            |            
 Insertion sort   |            |           |           |            |            
 Selection sort   |            |           |           |            |            
 Merge sort       |            |           |           |            |            
 Pancake sort     |            |           |           |            |            
 Permutation sort |            |           |           |            |            
 Cocktail sort    |            |           |           |            |            
 Comb sort        |            |           |           |            |            
 Counting sort    |            |           |           |            |            
 Gnome sort       |            |           |           |            |            
 Bead sort        |            |           |           |            |            
 Radix sort       |            |           |           |            |            
 Shell sort       |            |           |           |            |            
 Sleep sort       |            |           |           |            |            
 Strand sort      |            |           |           |            |            

### DEFINITIONS
