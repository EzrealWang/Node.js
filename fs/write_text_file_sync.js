'use strict';

var fs = require('fs');

var data = 'Hello, Node.js 2.0';
try {
    fs.writeFileSync('./fs/output.txt', data);
} catch (err) {
    console.log(err);
}

console.log('OK.');
