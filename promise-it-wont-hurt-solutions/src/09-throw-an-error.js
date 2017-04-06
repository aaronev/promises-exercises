require('es6-promise');
'use strict';

let parsePromised = () => {
  let promise = new Promise((resolve, reject) => {
    resolve('It went through')
    reject(new Error('It did not go through'))
  let function1 = (resolve) => {
    return resolve
  }
  let function2 = (function1) =>{
    return function1
  }
  try {
    parsePromised()
    function1()
    function2()
  } catch (e) {
    throw Error.message
  }
  })
  return promise
}
console.log(parsePromised())
