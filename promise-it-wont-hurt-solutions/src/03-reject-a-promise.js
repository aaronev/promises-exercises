require('es6-promise');
'use strict';

let promise = new Promise((resolve, reject) => {
  reject(new Error('REJECTED!'))
})
.then(null, onReject => {
  setTimeout(() => {
    console.log(onReject.message)
  }, 300)
})