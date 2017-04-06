require('es6-promise');
'use strict';

let promise = new Promise((resolved, reject) => {
	setTimeout(function(){
		resolved('FULFILLED!')
	}, 300);
});

promise.then((success) => {
	console.log("It has been " + success);
});