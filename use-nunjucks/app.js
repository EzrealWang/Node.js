const nunjucks = require('nunjucks');

function createEnv(path, opts) {
    var autoscape = opts.sutoscape === undefined ? true : opts.autoscape;
    var noCache = opts.noCache || false;
    var watch = opts.watch || false;
    var throwOnUndefined = opts.throwOnUndefined || false;
    // 使用new nunjucks.FileSystemLoader('views')创建一个文件系统加载器，从views目录读取模板
    var env = new nunjucks.Environment(
        new nunjucks.FileSystemLoader('use-nunjucks/views', {
            noCache: noCache,
            watch: watch
        }),
        {
            autoscape: autoscape,
            throwOnUndefined: throwOnUndefined 
        }
    );
    if (opts.filters) {
        for (var f in opts.filters) {
            env.addFilter(f, opts.filters[f]);
        }
    }
    return env;
}
// 变量env就表示Nunjucks模板引擎对象，它有一个render(view, model)方法，正好传入view和model两个参数，并返回字符串
var env = createEnv('views', {
    watch: true,
    filters : {
        hex: function (n) {
            return '0x' + n.toString(16);
        }
    }
});

var s = env.render('hello.html', { name: 'Ezreal' });
console.log(s);
// 避免了输出恶意脚本
var s = env.render('hello.html', { name: '<script>alert("小明")</script>' });
console.log(s);

console.log(env.render('extend.html', {
    header: 'Hello',
    body: 'bla bla bla...'
}));