'use strict';

var fs = require('fs');

try {
    var data = fs.readFileSync('./fs/sample.png');
} catch (err) {
    console.log(err);
}

console.log(data);
console.log(data.length + ' bytes');