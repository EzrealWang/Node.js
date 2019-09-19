// MD5和SHA1
// MD5是一种常用的哈希算法，用于给任意数据一个“签名”。这个签名通常用一个十六进制的字符串表示

'use strict';

const crypto = require('crypto');

const hash = crypto.createHash('md5');
// 可任意多次调用update()
// update()方法默认字符串编码为UTF-8，也可以传入Buffer
hash.update('Hello, world!');
hash.update('Hello, nodejs!');

console.log(hash.digest('hex'));

// 如果要计算SHA1，只需要把'md5'改成'sha1'
// 使用更安全的sha256和sha512

const hashSHA1 = crypto.createHash('sha1');

hashSHA1.update('Hello, world!');
hashSHA1.update('Hello, nodejs!');

console.log(hashSHA1.digest('hex'));

