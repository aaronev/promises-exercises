require('es6-promise');
'use strict';

const firstPromise = first()

const secondPromise = firstPromise.then(value => {
  return second(value)
})

secondPromise.then(console.log)