// RSA算法是一种非对称加密算法，即由一个私钥和一个公钥构成的密钥对，通过私钥加密，公钥解密，或者通过公钥加密，私钥解密
// 其中，公钥可以公开，私钥必须保密
// 当小明给小红发送信息时，可以用小明自己的私钥加密，小红用小明的公钥解密，
// 也可以用小红的公钥加密，小红用她自己的私钥解密，这就是非对称加密
// 相比对称加密，非对称加密只需要每个人各自持有自己的私钥，同时公开自己的公钥，不需要像AES那样由两个人共享同一个密钥

const
    fs = require('fs'),
    crypto = require('crypto');

// 从文件加载key:
function loadKey(file) {
    // key实际上就是PEM编码的字符串:
    return fs.readFileSync(file, 'utf8');
}

let
    prvKey = loadKey('./crypto/rsa-prv.pem'),
    pubKey = loadKey('./crypto/rsa-pub.pem'),
    message = 'Hello, world!';

// 使用私钥加密
let enc_by_prv = crypto.privateEncrypt(prvKey, Buffer.from(message, 'utf8'));
console.log('encrypted by private key: ' + enc_by_prv.toString('hex'));
// 使用公钥解密
let dec_by_pub = crypto.publicDecrypt(pubKey, enc_by_prv);
console.log('decrypted by public key: ' + dec_by_pub.toString('utf8'));


// 使用公钥加密
let enc_by_pub = crypto.publicEncrypt(pubKey, Buffer.from(message, 'utf8'));
console.log('encrypted by public key: ' + enc_by_pub.toString('hex'));

// 使用私钥解密
let dec_by_prv = crypto.privateDecrypt(prvKey, enc_by_pub);
console.log('decrypted by private key: ' + dec_by_prv.toString('utf8'));