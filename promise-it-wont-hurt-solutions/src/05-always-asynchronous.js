require('es6-promise');
'use strict';

let promise = new Promise((resolve, reject) => {
	resolve('PROMISE VALUE')
})
.then(resolve => {
	console.log(resolve)
})
console.log('MAIN PROGRAM');
