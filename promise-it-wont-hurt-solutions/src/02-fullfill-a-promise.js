require('es6-promise');
'use strict';

let promise = new Promise((fulfill, reject) => {
	setTimeout(function(){
		fulfill('FULFILLED!')
	}, 300);
});

promise.then((success) => {
	console.log("It has been " + success);
});