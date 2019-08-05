---
title: "Electron Catch"
date: 2019-08-03T12:13:28-07:00
draft: false
menu:
  docs:
    title: "Electron Catch"
    parent: "Frameworks"
    name: "Electron Catch"
---

# Electron Catch

* * *

## Setting Up Env

_Assumetion: Node already installed_

#### Initialize Project

```bash
# Terminal

~ npm init
# initializes node env

~ npm install electron
# exposed electron framework to env
```

```javascript
// ./package.json
...
"scripts": {
    "start": "electron index.js"
  },
...
```

#### Hello World

```javascript
// ./index.js
const electron = require('electron');
const {app, BrowserWindow} = electron;

app.on('ready', ()=>{
  // set window dimensions
  let win = new BrowserWindow({width: 800, height:600});
  win.loadURL()

})
```

```html
<!-- ./index.html -->
...
<body>
<h1>Hello World</h1>
</body>
...
```

#### 

```javascript
// ./index.js
...

exports.openWindow = (filename) => {
  let win = new BrowserWindow({width: 800, height:600});
  win.loadURL(`file://${__dirname}/ ${filename} + html`)
}
```

```html
<!--./page-two.html-->
...
<body>
  <h1>Page Two</h1>
</body>
...
```

```javascript
// ./home.js
const remote = require('electron').remote;
const main = remote.require('./index.js')
```

### Packaging

### Navigation

#### React Option

#### HTML Option

#### JavaScript Option

* * *

## REFERECENES

[Electronjs](https://electronjs.org/)
: Offical Electron site

[Cameron YouTube Electron Tutorial](https://www.youtube.com/watch?v=Y8c9b8nZxp8&list=PLkOqyUCsoGE2KwOmt698IxAerJbLLws1a)
: Great full walk through for getting up and started with Electron

#### Packagging For Production

[Electron Documentation Application Packaging](https://electronjs.org/docs/tutorial/application-packaging)

[Electron Packager](https://github.com/electron-userland/electron-packager)
: Packaging App from App store

[Asar Electron](https://github.com/electron/asar)
: An asar archive is a simple tar-like format that concatenates files into a single file.

### RESOURCES

### TOOLS
