require('es6-promise');
'use strict';

const http = require('q-io/http');

http.read("http://localhost:7000")
  .then(id => {
    return http.read("http://localhost:7001/<" + id + ">");
  })
  .then(user => {
    console.log(JSON.parse(user));
  })
  .catch(error => {
  	throw new Error('Something went wrong');
  })
  .done();

