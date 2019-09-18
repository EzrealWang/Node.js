'use strict'

// var name = 'Node.js';
// var s = `Hello, ${name}!`;
// console.log(s);

var s = 'Hello';

function greet(name) {
    console.log(s + ', ' + name + '!');
}

function hi(name) {
    console.log('Hi, ' + name + '!');
}

function goodbye(name) {
    console.log('Goodbye, ' + name + '!');
}

// module.exports = greet; //把函数greet作为模块的输出暴露出去
// export default greet;
module.exports = {
    greet: greet,
    hi: hi,
    goodbye: goodbye
};