'use strict';

var fs = require('fs');

fs.readFile('./fs/sample.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
// 当正常读取时，err参数为null，data参数为读取到的String
// 当读取发生错误时，err参数代表一个错误对象，data为undefined