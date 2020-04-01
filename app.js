const Koa = require('koa');
const cluster = require('cluster');
const http = require('http');
const router = require('./router');
const bodyParser = require('koa-bodyparser');

const numCPUs = require('os').cpus().length;
const app = new Koa();

// app.use(async (ctx, next) => {
//     console.log('request', ctx.request);
//     await next();
// });

// app.use(async (ctx, next) => {
//     await next();
//     ctx.response.type = 'text/html';
//     ctx.response.body = '<p>hello, world!</p>';
// })

if (cluster.isMaster) {
    console.log('success')
    // 创建工作进程
    for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
    }
    cluster.on('death', function(worker) {
    console.log('worker ' + worker.pid + ' died');
    cluster.fork();//重启子进程
    });
} else {
    // 工作进程创建http 服务器
    http.Server(function(req, res) {
    res.writeHead(200);
    res.end("hello world\n");
    }).listen(8000);
}    

// app.use(bodyParser());
// app.use(router.routes());
console.log('server run on 3000...')
app.listen(3000);