require('es6-promise');
'use strict';

let promise = new Promise((fulfill, reject) => {
	fulfill('I FIRED')
	throw new Error('I DID NOT FIRE')
}).then(fulfill => {
	console.log(fulfill)
}).catch(onReject => {
	console.log(onReject)
});