---
title: "Webpack"
date: 2020-10-15T19:10:20-07:00
draft: false
categories:  ['']
menu:
  docs:
    title: "Webpack"
    parent: "dev-env"
    name: "webpack"
---

# Webpack Dev Env 2020 

## Introduction

This a generally based on [webpack production guide](https://webpack.js.org/guides/production/). As of 2020 an encouraged webpack set up is a module structure break you `webpack.config.js` down into; 

```text
-- webpack.common.js
-- webpack.config.js
-- webpack.dev.js
-- webpack.prod.js
```

Though the above structure is a convention we are not limited to these environments, for example we could just as easily add a `webpack.sandbox.js`. The value of this break down besides the value to us lowly humans to keep our build processes separated and at a glance manageable. Is 

## Guide 

```shell 
npm install --save-dev webpack-merge

```