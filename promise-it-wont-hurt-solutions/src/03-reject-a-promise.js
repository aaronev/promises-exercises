require('es6-promise');
'use strict';

let promise = new Promise((fulfill, reject) => {
	reject('rejected')
});

promise.catch(error => {
	console.log("It has been ", error);
});