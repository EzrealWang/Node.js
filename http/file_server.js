// 解析request.url中的路径，然后在本地找到对应的文件，把文件内容发送出去

'use strict';
// a simple http server

const url = require('url');
// 处理本地文件目录需要使用Node.js提供的path模块，它可以方便地构造目录
// 使用path模块可以正确处理操作系统相关的文件路径
const path = require('path');
const fs = require('fs');
const http = require('http');

// // 通过parse()将一个字符串解析为一个Url对象
// console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));
// // 解析当前目录:
// var workDir = path.resolve('.');
// // 组合完整的文件路径
// var filePath = path.join(workDir, 'pub', 'index.html');
// console.log(filePath);

// 从命令行参数获取root目录，默认是当前目录:
var root = path.resolve(process.argv[2] || '.');

console.log('Static root dir: ' + root);

var server = http.createServer(function (request, response) {
    // 获得URL的path，类似 '/css/bootstrap.css':
    var pathname = url.parse(request.url).pathname;
    console.log('pathname: ' + pathname);
    // 获得对应的本地文件路径，类似 '/srv/www/css/bootstrap.css':
    var filepath = path.join(root, pathname);
    console.log('filepath: ' + filepath);

    // 如果HTTP请求的是目录，则自动在此路径下依次搜索index.html和default.html，
    // 若找到，就返回HTML文件的内容
    var defaultPages = ['index.html', 'default.html'];

    var pageCount = 0;
    function getDefaultPage() {
        if (pageCount === defaultPages.length) {
            get404Page();
            return;
        }
        var page = path.join(filepath, defaultPages[pageCount]);
        fs.stat(page, function(err, stats) {
            if (err || !stats.isFile()) {
                pageCount++;
                getDefaultPage();
            } else {
                get200Page(page);
            }
        });
    };

    function get404Page() {
        console.log('404 ' + request.url);
        response.writeHead(404);
        response.end('404 Not Found');
    };

    function get200Page(filepath) {
        console.log('200 ' + request.url);
        response.writeHead(200);
        fs.createReadStream(filepath).pipe(response);
    }

    // 获取文件状态:
    fs.stat(filepath, function (err, stats) {
        if (!err && stats.isFile()) {
             // 没有出错并且文件存在, 发送200响应, 将文件流导向response
            console.log('200 ' + request.url);
            response.writeHead(200);
            fs.createReadStream(filepath).pipe(response);
        } else if (!err && stats.isDirectory()) {
            getDefaultPage();
        } else {
            // 出错了或者文件不存在, 发送404响应:
            console.log('404 ' + request.url);
            response.writeHead(404);
            response.end('404 Not Found');
        }
    });
});

server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');