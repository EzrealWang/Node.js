// 导入WebSocket模块:
const WebSocket = require('ws');
// 引用Server类:
const WebSocketServer = WebSocket.Server;
// 实例化:
const wss = new WebSocketServer({
    port: 3000
});
// 如果有WebSocket请求接入，wss对象可以响应connection事件来处理这个WebSocket
// 在connection事件中，回调函数会传入一个WebSocket的实例，表示这个WebSocket连接
// 对于每个WebSocket连接，我们都要对它绑定某些事件方法来处理不同的事件。
// 这里，我们通过响应message事件，在收到消息后再返回一个ECHO: xxx的消息给客户端
wss.on('connection', function (ws) {
    console.log(`[SERVER] connection()`);
    ws.on('message', function (message) {
        console.log(`[SERVER] Received: ${message}`);
        setTimeout(() => {
            ws.send(`What's your name?`, (err) => {
                if (err) {
                    console.log(`[SERVER] error: ${err}`);
                }
            });
        }, 1000);
    })
});

console.log('ws server started at port 3000...');

// client test:
// 如果嫌在浏览器中输入JavaScript代码比较麻烦，我们还可以直接用ws模块提供的WebSocket来充当客户端
// 换句话说，ws模块既包含了服务器端，又包含了客户端
// ws的WebSocket就表示客户端，它其实就是WebSocketServer响应connection事件时回调函数传入的变量ws的类型
let count = 0;
// 如何真正创建WebSocket并且给服务器发消息呢？方法是在浏览器中写JavaScript代码
// 打开一个WebSocket:
let ws = new WebSocket('ws://localhost:3000/ws/chat');
// var localpath = (window.location.href).substring(6); 
// var ws = new WebSocket('ws://'+localpath+'ws/chat');
// let ws = new WebSocket('ws://${location.hostname}:3000/ws/chat');

// 给服务器发送一个字符串:
ws.on('open', function () {
    console.log(`[CLIENT] open()`);
    ws.send('Hello!');
});
// 响应onmessage事件:
ws.on('message', function (message) {
    console.log(`[CLIENT] Received: ${message}`);
    count++;
    if (count > 3) {
        ws.send('Goodbye!');
        ws.close();
    } else {
        setTimeout(() => {
            ws.send(`Hello, I'm Mr No.${count}!`);
        }, 1000);
    }
});
