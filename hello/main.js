'use strict';

// 引入hello模块:
// var greet = require('./hello'); // 模块的相对路径
// import greet from './hello';

const hello = require('./hello');
var s = 'Michael';

// greet(s);
hello.hi(s);
hello.goodbye(s);