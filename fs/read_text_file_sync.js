'use strict';

var fs = require('fs');

try {
    var data = fs.readFileSync('./fs/sample.txt', 'utf-8');
} catch (err) {
    console.log(err);
}

console.log(data);