require('es6-promise');
'use strict';

let promise = new Promise((resolve, reject) => {
	resolve('I FIRED')
	throw new Error('I DID NOT FIRE')
}).then(resolve => {
	console.log(resolve)
}).catch(onReject => {
	console.log(onReject)
});