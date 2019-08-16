---
title: "Console"
date: 2019-08-15T22:33:01-07:00
draft: false
menu:
  docs:
    title: "Console"
    parent: "Dev Env"
    name: "Console"
---

## Console Reference

```javaScript
const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular

// Interpolated
console.log('Hello I am a %s string', 'Something');
console.log(`$`);

// Styled
console.log('%c I am some great text', 'font-size: 20px;')

// warning!
console.warn('there is a problem');

// Error :|
console.error('bad');

// Info
console.info('Kangroos cannot jump backword');

// Testing
console.assert(1===1, 'This is wrong');

// clearing
// console.clear();

// Viewing DOM Elements
const p = document.querySelector('p');
console.log(p);
console.dir(p);
console.clear();

// Grouping together
dogs.forEach(dog => {
  // console.group(`${dog.name}`);
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
})

// counting
console.count('test');
console.count('test');

// timing
console.time('fetching data');
fetch('https://api.github.com/zen')
  .then(response => {
    console.groupCollapsed();
    console.log(response);
    console.log(response.text());
    console.groupEnd();
    return response;
    }).then(response => {
      console.log(typeresponsede;
      return response;
      })
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);

    })
    .catch(error => console.error(error.message));

// Display 
// displays and interactive list of properties of the specified JavaScript object.
console.dir()

```
