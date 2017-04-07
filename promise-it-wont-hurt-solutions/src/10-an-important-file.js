require('es6-promise');
'use strict';

let alwaysThrows = () => {
	throw new Error('OH NOES')
}

let iterate = (arg) => {
	console.log(arg += 1)
}

Promise.resolve('This will not show')
.then(resolve => {iterate(0)})
.then(resolve => {iterate(1)})
.then(resolve => {iterate(2)})
.then(resolve => {iterate(3)})
.then(resolve => {iterate(4)})
.then(resolve => {iterate(alwaysThrows())})
.then(resolve => {iterate(5)})
.then(resolve => {iterate(6)})
.then(resolve => {iterate(7)})
.then(resolve => {iterate(8)})
.catch(error => {
	console.log(error)
})