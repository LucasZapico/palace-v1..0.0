---
title: "Algorithms Javascript"
date: 2019-07-28T11:36:31-07:00
draft: false
categories:  ['computer-science','algorithms', 'foundations','javascript']
menu:
  docs:
    Name: "Javascript"
    parent: "Algorithms"
    weight: 1
---
---


## Overview

-   Big O Notation
-   Analyzing Performance Arrays and Objects
-   Problem Solving Approach
-   Problem Solving Patterns
-   Recursion
    -   Bubble Sort
    -   Insertion Sort
    -   Merge Sort
    -   Quick Sort
    -   Radix Sort
-   Data Structures
    -   Linked Lists
    -   Doubly Linked Lists
    -   Stacks + Queues
    -   Binary Search Trees
    -   Tree Traversal
    -   Binary Heaaps
    -   Hash Tables
    -   Graphs
    -   Graph Traversal
    -   Dijkstra's Algorithm

## Big O Natation

How do we know what codes is best?

**Example**
"Write a function that accepts a string input and returns a reversed copy"?

There are many different methods to complete this question as there are many different ways to write a given sentence. **Big O** is a method to measure and or compare a given way of writing code vs another method.
Big O notation enables precise vocabulary when discussing code performace. This enables discores with regards to performance.

**Example**

Suppose we want to write a function that calculates the sum of all numbers from 1 up to and including some number n.

```JavaScript
// solution one
function addUpTo(n) {
  let total = 0;
  for(let i = 1; i <= n; i++){
    total += i;
  }
  return total;
}

console.log(addUpTo(6));
```

```JavaScript
// solution two
function addUpTo(n) {
return n * (n + 1) /  2
}

console.log(addUpTo(6));
```

**Important**: How are we measuring value? For example are we measuring against speed, memory, brevity, readability? In many instance readability and optimizing speed and memory pull agains one another.

#### Timing Runtime

```JavaScript
// measured
function addUpTo(n) {
  let total = 0;
  for(let i = 1; i <= n; i++){
    total += i;
  }
  return total;
}

let t1 = performance.now();
addUpTo(100000000);
let t2 = performance.now();
console.log(`Time elapsed: ${(t2 -t1)/1000} seconds`)
```

**Problem with Time**

-   different machines will record different times
-   the same machine will record different times
-   fast algorithms, can make speed measurments difficult to understand.

#### Number of Operations

**Note**: the number of operations is consistent

```JavaScript
// solution one
// n + 1 operations
function addUpTo(n) {
  let total = 0;
  for(let i = 1; i <= n; i++){
    total += i;
  }
  return total;
}
```

```JavaScript
// solution two
// three operations
function addUpTo(n) {
return n * (n + 1) /  2
}

console.log(addUpTo(6));
```

#### Big O

Big O
: It allows us to talk formally about how the runtime of an algorithm grows as the input grows
: We say that an algorithm is $O(f(n))$ if the number of simple operations the computer hass to do is eventually less than a constant time $f(n)$, as $n$ increases

-   [$f(n)$] could be linear [$(f(n) = n)$]
-   [$f(n)$] could be quadratic [$f(n) = n^2)$]
-   [$f(n)$] could be constant [$(f(n)) = 1)$]
-   [$f(n)$] could be something entirely different

**Example**

```JavaScript
// solution one
// O(n)
function addUpTo(n) {
  let total = 0;
  for(let i = 1; i <= n; i++){
    total += i;
  }
  return total;
}
```

```JavaScript
// solution two
// O(1)
function addUpTo(n) {
return n * (n + 1) /  2
}

console.log(addUpTo(6));
```

**Note:** $O(n)$ operation inside of an $O(n)$ becomes $O(n \* n) == O(n^2)$

#### Calculation of Big O

-   arithmetic opterations are constant
-   variable assignment is constant
-   accessing elements in an array by index or object by key is constant
-   in a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop

#### Big O section Questions - set 1

Q. Simplify the big O expression as much as possible - O(n + 10)
A.
Q.  Simplify the big O expression as much as possible - O(100 \* n)
A.
Q. Simply the following big O expression as much as possible - O(25)
A.
Q. Simply the following big O expression as much as possible -  O(n^2 + n^3)
A.
Q. Simply the following big O expression as much as possible - O(n + n + n + n)
A.

### Space Complexity - Big O

Auxiliary Space Complexity
: This is the space required by the algorithm, not including space taken up by the inputs.

-   most primitives (booleans, numbers, undefined, null) are constant space
-   strings require $O(n)$ space where n is the string length
-   reference types are generally $O(n)$ where n is the length for arrays or the number of keys for an object

## Analyzing Performance of Arrays and Objects

#### Objectives

-   understand how objects and arrays work through Big O
-   compare and contrast runtime for arrays and objects with built in methods

#### Big O - Objects

| Action    | Time   |
| --------- | ------ |
| insertion | $O(1)$ |
| Removal   | $O(1)$ |
| Searching | $O(N)$ |
| Access    | $O(1)$ |

#### Big O - Arrays

| Action                       | Time          |
| ---------------------------- | ------------- |
| Push                         | $O(1)$        |
| Pop                          | $O(1)$        |
| shift                        | $O(N)$        |
| unshift                      | $O(N)$        |
| concat                       | $O(N)$        |
| slice                        | $O(N)$        |
| splice                       | $O(N)$        |
| sort                         | $O(N\*log N)$ |
| forEach, map, filter, reduce | $O(N)$        |

## Algorithm and Problem Solving Patterns

#### Objectives

-   define what an algorithm is
-   devise a plan to solve Algorithms
-   compare and contrast problems solving patterns including frequency counters, two pointer problems and divide and conquer

1.  Devise a plan
2.  Master common problem solving patterns

## Problems Solving Patterns

-   understnad problem
-   explore concrete exmaples
-   break it down
-   solve/Simplify
-   look back and refactor

### Understand Problems

1.  Restate the problem in own words
2.  What are the inputs that go into the problem?
3.  What are the outputs that should come from the solution to the problem?
4.  Can the outputs be determined from the inputs?
    -   is there enough infromation to solve the problem?
5.  How should core pieces of data be labeled?

### Exploring Examples

-   coming up with examples can help you understand the problem better
-   provide sanity checks that
-   user stories

1.  start with simple examples
2.  progress to more complex examples
3.  explore examples with empty inputs
4.  explore examples with invalid inputs

### Break it Down

### Solve or Simplify

-   find core difficulty in what we're trying to do
-   temporarily ignore that difficulty
-   write a simplified solution
-   incorporate the difficulty back in

### Loop Back and Refactor

-   can you check the result?
-   can you derive the result differently?
-   can you understand it at a glance?
-   can you use result or method for some other problem?
-   can you improve performance of the solution?
-   can you think of a way to refactor?
-   How have other people solved this problem?

## REFERENCES

[JavaScript Algorithms and Data Strucutres Masterclass](https://www.udemy.com/js-algorithms-and-data-structures-masterclass/learn/v4/overview)
: udemy

### RESOURCES

[How to Solve it by George Polya - wiki](https://en.wikipedia.org/wiki/How_to_Solve_It)
[How to solve it by George Polya pdf](./how-to-solve-it-polya.pdf)
