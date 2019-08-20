---
title: "C Plus Plus Catch"
date: 2019-08-03T11:58:39-07:00
draft: true
menu:
  docs:
    title: "C Plus Plus Catch"
    parent: "Development"
    name: "C++"
---

# C++ Catch
---------


### Reflections
 __Date: 2017.October.16th__

I have begun exploring C++ with the goal of developing a strong foundation in code programming concepts.</br> </br>
_WHY ::_</br>
I initially attacked the development space with javaScript as my phalanx. But, I have now called into question whether or it is the best median for understanding of core concepts that I have begun to run into as I have explored the space further. Therefore, I have decided to mirror to a degree the current method of learning core concepts. Hence the beginning of this journal.

_note: At this point I am not convinced this was the wrong approach. Though, at this point there is enough reason to explore the benefits of learning c++_

------

### Notes 

__Date: 2017.October.16th </br>
From: Lynda.com Corse: Learning C++ </br>__

#### C++ Basics 

C++ fully supports the four pillars of object oriented development
- encapsulation
- data hiding
- inheritance
- polymorphism

__ANSI__ :: this standard ensures C++ complies without error on Mac, UNIX, Windows and Alpha</br>

---------
#### Syntax 
- __object__ - objects have states and behaviors. An object is a instance of a class.
  - Example: A dog has a state - color, name, breed and behaviors - wagging, barking, eating.
- __class__ - a class is a a template/blueprint that describes the behaviors/states
- __methods__ - a method is a behavior. Classes can contain methods. Logic and data manipulation and actions are executed.
- __instance variables__ - an objects state is created by the values assigned to these instance variables.

###### Semicolons and Blocks C++ ######
A logical entity in C++ must end with a semicolon. The semicolon is a statement terminator.

```c++
int x = 5;
int y = x + 4;
int add( x, y){
  return  x + y;
};
```
###### Reserved Words ######

|||||
|----------|----------|----------|----------|
|asm       | else     | new	     | this     |
|auto      |	enum	  |operator  |	throw   |
|bool	     |explicit	|private	 |  true    |
|break	   |export	  |protected | try      |
|case      |	extern  |	public   |	typedef |
|catch     |	false	  |register  |	typeid  |
|char	     |float     |	reinterpret_cast  |	typename|
|class     |	for	    |return    |	union   |
|const	   |friend	  |short	   |unsigned  |
|const_cast|	goto	  |signed    |	using   |
|continue	 |if	      |sizeof    |	virtual |
|default	 |inline	  |static	   |void      |
|delete	   | int      |	static_cast	| volatile |
|do	       |long	    |struct    |	wchar_t |
|double	   |mutable	  |switch    |	while   |
|dynamic_cast |	namespace |	template

-----------------------------------------
#### Data-types

<<---- Data-types & memory allocation --->>

<<---- chars and their numeric values --->>

<<---- implicit and explicit conversion --->

//static cast

```c++
//static cast
int num1 = 5 + static_cast<int>(12.75);
double num1 = static_cast<double>(5) + 12.75;
char x = static_cast<char>(65);

```

---

## References

[C plus plus - Lynda.com](https://www.lynda.com/C-tutorials)

[](http://www.cplusplus.com/doc/tutorial/)

### Resource




[](http://devdocs.io/cpp/)
Great quick reference for syntax

#### More Reference Material

