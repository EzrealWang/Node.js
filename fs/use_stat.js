'use strict'

var fs = require('fs');

fs.stat('./fs/sample.txt', function (err, stat) {
    if (err) {
        console.log(err);
    } else {
        console.log('isFile: ' + stat.isFile());
        console.log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile()) {
            console.log('size: ' + stat.size);
            console.log('birth time: ' + stat.birthtime);
            console.log('modified time: ' + stat.mtime);
        }
    }
});

// try {
//     var stat = fs.statSync('./fs/sample.txt');
// } catch (err) {
//     console.log(err);
// }

// console.log('isFile: ' + stat.isFile());
// console.log('isDirectory: ' + stat.isDirectory());
// if (stat.isFile()) {
//     console.log('size: ' + stat.size);
//     console.log('birth time: ' + stat.birthtime);
//     console.log('modified time: ' + stat.mtime);
// }