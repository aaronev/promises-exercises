require('es6-promise');
'use strict';

let alwaysThrows = () => {
	throw new Error('OH NOES')
}

let iterate = (num) => {
	console.log(num)
	return num += 1
}

Promise.resolve(iterate(1))
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(alwaysThrows)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.catch(error => {
	console.log(error)
})