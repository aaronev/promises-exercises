require('es6-promise');
'use strict';

let promise = new Promise((resolve, reject) => {
  resolve('fulfilled')
  reject(new Error('Not Fulfilled'))
}).then(resolve => {
  console.log(resolve)
}).catch(reject => {
  console.log(reject)
})

let youAreAwesome = ( 
  Promise.resolve('Yeah you are dude!'), 
  Promise.reject(new Error('Syyyyyykkkkkkeeeeee!')))
.then(resolve => {
    console.log(resolve)
  }).catch(reject => {
    console.log(reject)
  })