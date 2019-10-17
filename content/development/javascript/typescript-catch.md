---
title: "Typescript Catch"
date: 2019-10-13T12:37:24-07:00
draft: false
categories:  ['']
menu:
  docs:
    title: "Typescript Catch"
    parent: "Javascript"
    name: "Typescript Catch"
---

-   Type annotations
-   Arrow functions
-   Interfaces
-   Classes
-   Constructors
-   Access Modifiers
-   Properties
-   Modules

TypeScript is a superset of Javascript. The biggest difference between TypeScript and Javascript is that TypeScript is a strongly typed language.

-   Strong type
-   Object-oriented features
-   Compile-time errors

At build time TypeScript is transpiled into Javascript.

#### Variables

let is declared to the closest function.

```javascript
let test = 5
```

#### Types

If a variable is declare and defined at the same time the type of the initial declaration is pervasive.

**Example**

```javascript
let count = 5;
// let count : number
count = 'a';
// with show an error as "a" is a str
```

If a variable is  not defined it will have type 'any' and will beable to be reasigned to any type.

**Example - Type Anaotations**

```javascript
// bad practice
let a;
// let a: any

let a: number;
// let a: number
let b: boolean;
let c: string;
let d: any;
let f: number[];
```

```javascript
enum Color = {Red=0, Green=1, Blue=2}
let backgroundColor = Color.Red;
```

##### Type Assertions

```javascript
let message;
message = "hello world";
let endsWithD = (<string>message).endsWith('d');
let endsWithD = (message as string).endsWith('d');
```

#### Arrow functions

```javascript
let doLog = (message) => console.log(message)
```

#### Custom Types & Interfaces

Using an interface we can define out input and pass it in anywhere the schema is used.

```javascript
interface Point {
  x: number,
  y: number
}

let drawPoint = (point: Point) => {
  // ....
}

drawPoint({
  x: 1,
  y: 2
})
```

_note  this example violate the Cohesion principle of object oriented programming_

## Object Oriented

Cohesion
: Things that are related should be part of one unit

To maintian Cohension creating a Class is the best.

Class
: Groups variables (properties) and function (methods) that are highly related.

#### Using Classes

```javascript
class Point {
  x: number;
  y: number;

  draw() {
    console.log("X: " + this.x + ', Y: ' + this.y)
  }

  getDistance(another: Point){
    // ...
  }
}

let point = new Point();
point.x = 1;
point.y = 2;
point.draw()
```

_An Object is an instance of a class_

#### Using Constructors

Every class

```javascript
class Point {
  x: number;
  y: number;

  // '?' makes the parameter optional
  constructor(x?: number, y?:number){
    this.x = x;
    this.y = y;
  }

  draw() {
    console.log("X: " + this.x + ', Y: ' + this.y)
  }

}

let point = new Point(1,2);
point.draw()
```

##### access modifiers

```javascript
class Point {
  /*
  the "private" access modifier will make the variables x and y only modifiable from within the class declaration
  */
  private x: number;
  private y: number;

  // '?' makes the parameter optional
  constructor(x?: number, y?:number){
    this.x = x;
    this.y = y;
  }

  draw() {
    console.log("X: " + this.x + ', Y: ' + this.y)
  }

}

let point = new Point(1,2);
point.draw()
```

**Cleaning Up Class Syntax**
**Properies**

_properties look like feild but are simple methods in a class. Normally a gettter and a setter_

```javascript
class Point {
  // '?' makes the parameter optional
  constructor(public _x?: number, public _y?:number){
  }

  draw() {
    console.log("X: " + this._x + ', Y: ' + this._y)
  }
  // get method for the x property
  get x(){
    return this._x;
  }
  // set method for the x property for x
  set x(value){
    this._x = value
  }


}

let point = new Point(1,2);
// get the value of x
let x = point.x;
// sets a new value to x
point.x = 10;
point.draw()
```

#### Modules

_main.ts_

```javascript
import {Point} from './point'

let point = new Point(1,2);
// get the value of x
let x = point.x;
// sets a new value to x
point.x = 10;
point.draw()
```

_point.ts_

```javascript
export class Point {

  constructor(public _x?: number, public _y?:number){
  }

  draw() {
    console.log("X: " + this._x + ', Y: ' + this._y)
  }
  get x(){
    return this._x;
  }
  set x(value){
    this._x = value
  }
}
```
