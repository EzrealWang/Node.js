'use strict';

const fs = require('fs');

var data = fs.readFileSync('./fs/sample.txt');

console.log(data);
console.log(data.length + ' bytes');
console.log('First three bytes: ' + data[0] + ', ' + data[1] + ', ' + data[2]);

// Buffer -> String
var text = data.toString('utf-8');
console.log(text);

// String -> Buffer
// var buf = new Buffer(text, 'utf-8'); // deprecated
var buf = Buffer.from(text, 'utf-8');
console.log(buf);

