require('es6-promise');
'use strict';

let promise = new Promise((resolve, reject) => {
  resolve('I FIRED')
  reject(new Error('I DID NOT FIRE'))
})
.then(resolve => {
  console.log(resolve)
}, onReject => {
  console.log(onReject.message)
})
