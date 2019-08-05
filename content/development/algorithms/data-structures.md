---
title: "Data Structures"
date: 2019-07-28T11:57:20-07:00
draft: false
categories:  ['computer-science', 'foundations','data-structures']
menu:
  docs:
    title: "Data Structures Foundations - LinkedIn Learning(Lynda.com)"
    parent: "Development"
    weight: 1
---
---

# Foundations: Data Structure Lynda.com

###### _Definitions:_

> data-structure :: A repeatable, arrangement of data.
>
> POD :: plain old data structure
>
> array :: An array is an ordered collection of items enclosed in a named/defined container
>
> append :: adding to end
>
> #### Top Level Take Aways
>
> -   If you can clearly define a data-structure. That is define its size, type, etc, then our program will be more efficient.

## Data Structure Summary of Strength and Weaknesses

### Arrays

**Strengths**

-   direct indexing
-   easy to create and use
    **Weakenesses**
-   sorting and Searching
-   inserting and deleting - if not at start or end
    ### Linked List
    **Strengths**
-   Inserting and deleting elements
-   Iterating through the collection
    **Weakenesses**
-   Direct access
-   searching and sorting

### Stacks and Queues

**Strengths**

-   Designed for LIFO/FIFO
    **Weakenesses**
-   Direct access
-   Searching and sorting

### Hash Tables

**Strengths**

-   Speed of insertion and deletion
-   speed of access
    **Weakenesses**
-   Some overhead
-   retrieving in a sorted order
-   searching fro a specific value

### Sets

**Strengths**

-   Checking if an object is in a collection
-   Avoiding duplicates
    **Weakenesses**
-   Direct access
-   everything else

### Binary Search Trees

**Strengths**

-   Speed of insertion and deletion
-   speed of access
-   maintaining sorted  order
    **Weakenesses**
-   some overhead

**Fixed(immutable) sructures are faster/smaller in memory**
Pattern: If you need an immutable version to load, consider then copying to a mutable version for lookup.

#### ----- Structs ----

* * *

1.  Record::

    The simplest form of a data-structure is a record

Example:

|   Date  | Transaction | Location |
| :-----: | :---------: | -------: |
| 4/12/15 |     -10     | AB store |

2.  C-style struct::

Example:

    // define the struct
    struct Book {
      string title;
      double price;
      bool isPublished;
      bool isHardback;
    }

    // create a variable with that struct type
    Book first;
    // set member variables
    first.title = "Dune";
    first.price = 100.99;
    first.isPublished = true;
    first.isHardback = false;

Transposed as a record:

| Title |  Price | isPublished | isHardback |
| :---: | :----: | ----------: | ---------: |
|  Dune | 100.99 |        true |      false |

3.  POD :: plain old data structure

Note: ~ class, look into for review.

-   review definition of classes

Example:

    struct Point {
      int x;
      int y;
    };

    Point startPosition;
    startPosition.x = 50;
    startPosition.y = 50;

    Point finishPosition;
    finishPosition.x = 500;
    finishPosition.y = 100;

    myObject.animate(startPosition, finishPosition);

##### ----- Collections : Arrays and List -----

Note: An 'array' is the most common form of data-structure.

Multidimensional Array:

Note in many cases a Multidimensional array consists of an singular array composed of other singular arrays. Thus, yielding a multidimensional array.

_Note: Review Linear Algebra:_

Rectangular arrays: this is a matrix of arrays.

jagged array: normally initial logic is required to create a jagged array.

    //sudo code
    int[][] ticketSales = new int[12][]
    for each month in ticketSales
      if april, june, september, november
        create array of 30 elements
      else if february and leap year
        create array of 29 elements
      else if february and not leap year
        create array of 28 elements
      else
        create array of 31 elements
      end if
      add array to ticketSales[month]
    end for

NOTE:

\---------- in data-structures there are five actions ------------

-   How to **Access**
-   How to **Insert**
-   How to **Delete**
-   How to **Find**
-   How to **Sort**

##### Sorting and Searching Arrays

Note: _sorting and searching needs to be looked at with discernment_
?? How big is the set ??
?? How often are we sorting ??

Check : it is imperative to know what kind of sorting a language uses.

Note: _sorting arrays of objects_
logic required: a compare function// a comparator
  !sorting

    // pseudo comparator / compare function
    PseudoCompare ( Employee a, Employee b)

      if a.lastname < b.lastname return -1 // less than
      if a.lastname > b.lastname return 1 // greater than
      if a.lastname == b.lastname
        if a.firstname < b.firstname return -1 //less than
        if a.firstname > b.firstname return 1 // greater than
        if a.firstname == b.firstname return 0 // equal
      end if
    end

##### Searching Arrays

\----- linear (sequential) search -----</br>
Description: A linear(sequential) search: is such that the searched for element is checked against each element in our array linearly. For index 0 to n.

Does this value exist?

    //pseudo code

    set i to 0
    while i < array.length
      if array[i] == 99
        return true
      end if
      add 1 to i
    end while
    return false

linear(sequential) search: O(n) complexity.

\----- Binary Searching -----</br>

> Description: a binary search functions such that for a given ordered set of data, bisect and compare middle element agains searched for element. If middle element is larger. Discard complementary set. Upon the remaining set, bisect and compare middle element against searched for element. If middle element is smaller repeat bisection and comparison on ascending set and if greater repeat bisection and comparison on descending set.
>
> Example:
> Question: Given an ordered array of 99 integers composed of values between 1 and 150 find. Find 87 and return its index.
>
> Solution: Binary search; bisect the array upon element 56.
>   if ( 56 > 87 )
>     false
>   repeat on ascending half of the array.
> \------------------- Pause  ---------------

Note: Arrays support direct access: arrays are saved sequentially in memory and therefore any element can be accessed via their index with the same cost. This is defined as direct access.

##### **List**

Note: list support sequential access. List elements can be stored anywhere in memory.

> when accessing a list; the access point is the first node of the list normally a simple struct and a link to the next node of the list.

_Note: adding and removing elements is easier.
By contrast, a array must be reordered where as a node on a list can be acted upon individually_

\---------- linked list -----------

**Definitions:**

> singly linked list :: each object has a  reference to the next object.
>
> doubly lined list :: each object has a reference >to the next and previous object.
>
> circular doubly linked list :: the final node has a reference to the initial node; and vice versa.

#### ----- Stacks and Queues -----

##### Stacks

stacks :: (LIFO) last in first out
Note: simpler to a array and list

general: The only thing that matters with stacks is that an item can be added to the stack and an the last item added is the first item removed.

-   push : add and item to the top
-   pop : remove the last item to stack


    // push a new element to the top of the stack
    myStack.push()
    // pop returns and deletes an element from the top of the stack
    int topElement = myStack.pop();
    // peek reads the element from the top element (option)
    int topValue = myStack.peek();

ADT :: abstract data types

### Queues

Queues :: (FIFO) first in first out

### Heaps

Heaps are normally implimented as binary trees and used a priority queues.
**Min Heap** lowest value at the root node. Rule: a child must always be greater than its parent. child > parent
**Max Heap** highest value at the root node.
Rule: a child must always be less than its parent. child &lt; parent
**A heap is not a fully sorted data structure**

### Graph

A set of nodes where any node can link to any other node. Or, where any verticy is connected to another via an edge.

**Edges** can have a defined direction or no direction.

-   directed graph
-   undireded graph
-   weighted graph (edged have weights)

**Example Use**: social network, either net network, flight.

It is intersting to note that grahs are extremely generic data structures. Each of the following is a type of graph.

-   linked list
-   trees
-   heaps

## Next Step Learning and Review

-   Learn: big O
    -   code efficiency
-   Review: logs and exponents

## Log

5/20/2018, 6:20:09 PM

\-------------- STOPPED AT: -------------------------
