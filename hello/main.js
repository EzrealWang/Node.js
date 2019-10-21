'use strict';

// 引入hello模块:
// var greet = require('./hello'); // 模块的相对路径
// import greet from './hello';

const hello = require('./hello');
var s = 'Michael';

// greet(s);
hello.hi(s);
hello.goodbye(s);

const os = require('os');

console.log('CPU: ' + JSON.stringify(os.cpus()));

console.log('Network: ' + JSON.stringify(os.networkInterfaces()));

console.log('Total memory: ' + os.totalmem());

console.log('Free memory: ' + os.freemem());

console.log('Hostname: ' + os.hostname());

console.log('Platform: ' + os.platform());

console.log('Temp dir: ' + os.tmpdir());

console.log('OS type: ' + os.type());

console.log('Uptime: ' + os.uptime());

console.log('Now: ' + new Date().toTimeString());

setTimeout(function () {
    console.log('Run at ' + new Date().toTimeString());
}, 1500);

setInterval(function () {
    console.log('Schedule at ' + new Date().toTimeString());
}, 3000);

console.log('timer setted.');