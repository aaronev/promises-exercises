require('es6-promise');
'use strict';

let promise = new Promise((resolve, reject) => {
	reject('rejected')
});

promise.catch(onReject => {
	console.log("It has been ", onReject);
});