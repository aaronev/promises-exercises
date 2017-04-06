require('es6-promise');
'use strict';

let promise = new Promise((resolved, reject) => {
  setTimeout(() => {
    resolved('FULFILLED!')
  }, 300);
  })
  .then(success => {
    console.log(success);
});