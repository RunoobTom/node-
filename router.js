const router = require('koa-router')();

router.get('/', async (ctx, next) => {
    ctx.response.body = 'hello';
    await next();
});

router.get('/login', async(ctx, next) => {
    ctx.response.body = 'login';
    await next();
})

module.exports = router;