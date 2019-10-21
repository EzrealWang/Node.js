const Koa = require('koa');

const bodyParser = require('koa-bodyparser');
// 注意到app.use(bodyParser());这个语句，它给koa安装了一个解析HTTP请求body的处理函数
// 如果HTTP请求是JSON数据，我们就可以通过ctx.request.body直接访问解析后的JavaScript对象
const controller = require('./controller');

const app = new Koa();

// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// parse request body:
app.use(bodyParser());

// add controller:
app.use(controller());

app.listen(3000);
console.log('app started at port 3000...');

// http://localhost:3000/api/products

