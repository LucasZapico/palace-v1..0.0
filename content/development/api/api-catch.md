---
title: "Api Catch"
date: 2019-07-28T12:24:05-07:00
draft: false
categories:  ['computer-science','api', 'catch','references']
menu:
  docs:
    title: "API Catch"
    parent: "APIs"
    weight: 1
---
---

## General API Interaction Methods

### Request Response Methods

### XMLHttpRequest

[XMLHttpRequest Doc MDN](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)

__EXAMPLE__

#### JQuery

[JQuery Request Response Doc](https://api.jquery.com/category/ajax)

__JQuery Request Example__
```
// jQuery request
(function() {
  var url = "http://api.openweathermap.org/data/2.5/weather?q=London,England";
  var apiKey = "8f41f474a335429dc652f5177e653498";

  $.get(url + '&appid=' + apiKey).done(function(response){
    console.log(response);
  })

})();
```
### Fetch

[Fetch on Github](https://github.com/github/fetch)

[Fectch doc on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

```
(function() {
  var url = "http://api.openweathermap.org/data/2.5/weather?q=London,England";
  var apiKey = "8f41f474a335429dc652f5177e653498";

  fetch(url + '&appid=' + apikey).then(function(response){
    if(!response.ok){
      throw Error(response.statusText);
    }
    console.log(response);
    return(response.json());
    })

})();
```

## API Requests with Node

### Basic HTTP request
```Node
const https = require('https');

https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data).explanation);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
```
__Note__: Basic API request with node http module.

### Request Module
```npm install request```

```node
const request = require('request');

request('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', { json: true}, function(err, response, body){
  if(err){
    return console.log(err);
  }
  console.log(body.url);
  console.log(body.explanation);
});
```

## Notes
### Notes Learning REST API's
[Lynda.com Learning REST API's](https://www.lynda.com/Web-Development-tutorials/Learning-REST-APIs/651230-2.html)

#### REST API

#### REQUEST

#### RESPONSE

## TO REVIEW

#### Promises
Promises used with the Fetch
[promises](https://www.promisejs.org/)

## RESOURCES
### Tools

[HTTPie](https://httpie.org/)

[curl://](https://curl.haxx.se/)

### REFRENCES

[Wiki list of http status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

#### Courses

##### [Lynda.com Learning REST API's](https://www.lynda.com/Web-Development-tutorials/Learning-REST-APIs/651230-2.html)

- [Notes Lynda.com Learning REST API's](#note-learning-rest-apis)




### DEFINITIONS
