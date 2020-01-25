---
title: "Angular Catch"
date: 2019-10-13T11:25:57-07:00
draft: false
categories:  ['']
menu:
  docs:
    title: "Angular Catch"
    parent: "JS Frameworks and Libraries"
    name: "Angular Catch"
---

## How does Angular Work

Angular is based on a component tree model. It loads from the root component then Angular goes component by component to find matches and loads those thereby batching load.  

The angular value is base on modular component. A component consists of Angular flavored markup and a component class where DOM events.  

-   component
-   data binding
-   dependency injection
-   router module

### Components

Components are defined with a decorator ```@Component()```.
Components are associated with a DOM element via a selector. A selector can be a tag, class or id. A component extends a HTML markup.

##### Component Selectors

```typescript
@Component({
  selector: 'test-component', //<test-component>
  selector: '.test-class', //<div class="test-class">
  selector: '#test-id' //<div id="test-id">
})
```

**Component** is a directive with a template.

Directives are changes within the DOM. An Angular directive fall into two types.

-   structural
-   attributes

__Structural directive__ change the appearance of an element in the DOM.

__Attribute directives__ change the behavior or functionality of an element.

Directives are defined with a selector.  

```typescript
@Decorator({
  selector: 'makeFavorite'
})
```

Once a directive has been defined it can be applied to an element in  two ways.

__Write Attribute on Element - Example__

```typescript
<div makeFavorite>
  //..
</div>
```

__Template syntax - Example__
```typescript
<div [makeFavorite]="true">
//..
</div>
```

Angular comes with a set of "out of the box" directive to ease development.

Pipe : change data

### Data Binging

Client side data manipulations

-   expression statements
-   Value binding
-   Event binding
-   Expression operators

### Structure

e2e
: end to end test

app
: module and component

assets- \[] - \[]
: static assets, img, text, icons

environments
: config setting for the production and development

## Building Block of Angular App

**Component**
: data, html markup, logic

**Component - Example**

-   course list - component
    -   course - component
        -   rating - component

**Module**
: a group of related components

### Interpolation

Angular way to display dynamic data into a view

__Not Supported with Interpolation {{}}__

- assignments
- newing up variables
- chaining expressions
- incrementing/decrementing

_Even Angular app has at least one Module the App module_

### Modules

An Angular application consists of at least one module. Within a modules for example ```app.module.ts``` the class decorator ```@NgModule({declarations: []})``` is use to define the  components accessible within a given module.

__Example of component import__

```typescript
@Ngmodule({
  declarations: [
    AppComponent,
    ExampleComponent
  ]
})
```

### Binding

#### Class Binding

This can be used to bind a class to a element based on some condition.

```typescript
//...

@Component({
  selector: 'courses',
  template: `
    <button class="btn btn-primary" [class.active]="isActive">Save</button>
  `
})
export class CoursesComponent {
  isActive = true;
}

// <button class="btn btn-primary active>Save</button>
```

### ``[ngClass]``

The ``[ngClass]`` directive can be uses to bind multiples css classes in an object..

```html
<div class="bg-light"
  [ngClass]="{
    'fillIcon' : isSelected,
    'emptyIcon': !isSelected
  }"
>
```

#### Style Binding

Dynamically add a style to a element.

```typescript
//...
@Component({
  selector: 'courses',
  template: `
    <button class="btn btn-primary" [style.backgroundColor]="isActive ? 'blue
     : 'white'">Save</button>
  `
})
export class CoursesComponent {
  isActive = true;
}

// <button class="btn btn-primary active>Save</button>
```

#### Event Binding


```typescript
//...

@Component({
  selector: 'courses',
  template: `
    <button class="btn btn-primary" (click)="onSave()">Save</button>
  `
})
export class CoursesComponent {
  onSave(){
    console.log("save click")
  }
}
```

#### Access to Event Object


```typescript
//...

@Component({
  selector: 'courses',
  template: `
    <button class="btn btn-primary" (click)="onSave($event)">Save</button>
  `
})
export class CoursesComponent {
  onSave($event){
    console.log("save click")
    console.log($event)
  }
}
```
*Note: recall ```$event.stopPropagation();```*



#### Event Filtering

__Tradition "Enter was pressed"__
```typescript
//...

@Component({
  selector: 'courses',
  template: `
    <input (keyup)="onKeyUp($event)"/>
  `
})
export class CoursesComponent {
  onKeyUp($event){
    if($event.keyCode === 13){console.log("enter was pressed")}
  }
}
```


__Angular "Enter was pressed"__


```typescript
//...

@Component({
  selector: 'courses',
  template: `
    <input (keyup.enter)="onKeyUp($event)"/>
  `
})
export class CoursesComponent {
  onKeyUp(){
    console.log("enter was pressed")
  }
}
```

#### Passing input by Event - Traditional


```typescript
//...

@Component({
  selector: 'courses',
  template: `
    <input (keyup.enter)="onKeyUp($event)"/>
  `
})
export class CoursesComponent {
  onKeyUp(){
    console.log("enter was pressed")
    console.log($event.target.value)
  }
}
```

#### Angular - Passing input by Event

Template variables

```typescript
//...

@Component({
  selector: 'courses',
  template: `
    <input #email (keyup.enter)="onKeyUp(email.value)"/>
  `
})
export class CoursesComponent {
  onKeyUp(email){
    console.log("enter was pressed")
    console.log(email)
  }
}
```

__Property Binding - sObject oriented__
```typescript
//...

@Component({
  selector: 'courses',
  template: `
    <input #email (keyup.enter)="onKeyUp(email.value)"/>
  `
})
export class CoursesComponent {
  onKeyUp(email){
    console.log("enter was pressed")
    console.log(email)
  }
}
```

#### Two way Binding - ```ngModel```

*app.module.ts*
```typescript
//...
import { FormsModule } from '@angularr/forms';
//....
@NgModule{(
//...
imports: [
  //...
  FormsModule
  //...
]
)}
```
*course.component.ts*
```typescript
//...

@Component({
  selector: 'courses',
  template: `
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
  `
})
export class CoursesComponent {
  email="me@example"

  onKeyUp(email){
    console.log("enter was pressed")
    console.log(this.email)
  }
}
```

```typescript
//...

@Component({
  selector: 'courses',
  template: `
    <button class="btn btn-primary" (click)="onSave()">Save</button>
  `
})
export class CoursesComponent {
  onSave(){
    console.log("save click")
  }
}
```

### Pipes

Pipes are used to format  data. For example

|          Pipe                           |      Input      | Output  |         |
| --------------------------------------- | --------------- | ------- | ------- |
| ```{{ course.title    | uppercase }}``` |   "Input"     | "INPUT" |
| ```{{ course.students | number }}```    |    30234      | 30,234   |         |
| ```{{ course.rating   | number: '1.2-2 }}```    |  3.4532   |  3.45       |         |
| ```{{ course.price   | currency :true }}```   |    40             |  US$40  |         |
| ```{{ course.releaseDate  | date:'shortdate' }}```   |                 |         |         |

[For a complete list of pipe options see Angular guides](https://angular.io/guide/pipes)

#### Custom Pipe

*course.component.ts*
```typescript

@Component({
  //...
  template: `
  // limit of ten charaters
    {{ text | summary:10 }}
  `
})

```

*summary.pipe.ts*
```typescript
import { Pipe, PipeTransform } from '@angluar/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransfrom  {
  transform(value: any, limit?: number any){
    if(!value){
      return null;

      let actualLimit = (limit) ? limit : 50;
      return value.substr(0, actualLimit) + '...';
    }
  }
}
```

Register in module
*app.module.ts*
```typescript
import { SummaryPipe } from './summary.pipe';
//...

@NgModule({
//...
  SummaryPipe
})
//....

```
###  Input - properties

This example uses an alias

*<some-component.component.html>*
```html
<button
  #changeColor
  (click)="onClick()"
  [class.bg-primary]="isClick"
  [class.bg-secondary]="!isClick">
  Change Color
</button>
```

*app.component.html*
```html
 <app-click-fill [is-click]="post.isClick">
 </app-click-fill>
```

*<some-component>.component.ts*
```typescript  
//...
@Component({
  //....
  templateUrl: '<some-component>.component.html'
  //....
})
export class ClickFillComponent implements OnInit {
  @Input('is-click') isClick = false;

  constructor() { }

  ngOnInit() {
  }
  onClick() {
    this.isClick = !this.isClick;

  }
}
```

### Output


*app.component.html*
```typescript


```


*app.component.ts*
```typescript


```

*<some-component>.component.ts*
```typescript

```

### Passing Data Between Components



## Review

- ``ngContent``
- trackby for list


## ``ngIf`` vs ``[hidden]``

There are performance tradeoffs between ``ngIf`` and ``[hidden]``. The ``[hidden]`` method renders all elements to the DOM, including the hidden ones. Whereas, ``ngIf`` only renders to the DOM what is returned truthy. Therefore, the two dangers are of using bloated DOM tree or vs having to render on the fly many DOM elements.

- Use ``[hidden]`` when a user may toggle a large amount of DOM elements for a given interactions.

- Use ``*ngIf`` when the elements rendered are static or a low number.  

``ngIf`` has performance ramifications depending on if we render a

### ``ngIf``

```html
  <ng-container *ngIf="<something></something>; else elseblock">
    Something True
  </ng-container>
  <ng-template #elseblock>
    Something false
  </ng-template>
```

### ``[hidden]``

```html
  <ng-container [hidden]="something = true">
    Something true
  </ng-container>
  <ng-container [hidden]="something = false">
    Something falsee
  </ng-container>

```

## ``ngSwitch`` tab Example

*app.component.ts*
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  viewMode= "map"
}
```

*app.component.html*
```html
<div class= "container m-5">
  <ul class="nav nav-pills">
    <li  class="nav-item ">
      <a
        [class.active]="viewMode == 'map'"
        (click)="viewMode = 'map'"
        class="nav-link">
        Map view
      </a>
    </li>
    <li class="nav-item"  >
      <a
        [class.active]="viewMode == 'list'"
        (click)="viewMode = 'list'"
        class="nav-link">
        List View
      </a>
    </li>
  </ul>
  <div [ngSwitch]="viewMode">
    <div *ngSwitchCase="'map'">Map View Content</div>
    <div *ngSwitchCase="'list'">List View Content</div>
    <div *ngSwitchDefault>Otherwise</div>
  </div>
</div>
```




## Angular Cli Keyboard Shortcuts

#### Generate Project

```bash
ng new <some-project>
```

#### Generate Component

```bash
ng generate create <component-name>
# or
ng g c <component-name>
```

#### Generate Service
```bash
ng generate service <service-name>

ng g s <service-name>
```
