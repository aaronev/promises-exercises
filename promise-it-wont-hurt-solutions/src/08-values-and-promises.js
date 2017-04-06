require('es6-promise');
'use strict';

attachTitle = (str) => {
 return "DR. " + str 
}

let promises = new Promise((resolve, reject) => {
  resolve('MANHATTAN')
})
.then(attachTitle)
.then(console.log)