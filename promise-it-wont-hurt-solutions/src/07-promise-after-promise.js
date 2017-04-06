require('es6-promise');
'use strict';

let first = () => {
  let promise = new Promise(function(resolve, reject){
    resolve('secret value')
  })
    return promise
}

let second = (first) => {
  return first
}

let print = (second) => {
  	console.log(second)
}

first()
.then(second)
.then(print)