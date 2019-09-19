'use strict';

const fs = require('fs');

var rs = fs.createReadStream('./stream/sample.txt', 'utf-8');
var ws = fs.createWriteStream('./stream/copied.txt', 'utf-8');

rs.pipe(ws);