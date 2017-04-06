require('es6-promise');
'use strict';

let getPromise1 = Promise.resolve('This is one')
let getPromise2 = Promise.resolve('This is two')

let all = (promise1, promise2) => {
  let counter = 0
  let promise3
  promise1.then(counter++)
  promise2.then(counter++)
  if (counter === 2) {
    promise3 = new Promise(resolve => {
      resolve([promise1, promise2]) 
    })
  }
  return promise3 
}

console.log(all(getPromise1, getPromise2))