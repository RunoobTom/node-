const express = require('express');

const app = new express();

app.get('/', (req, res, next) => {
    // 读取参数，实际返回给前端的是一段js代码，包含前端回调函数的方法名和需要传给前端的数据
    const { query: { functionName, name } } = req;
    const data = { name };
    console.log('name', name)

    res.send(`${functionName}(${JSON.stringify({name})})`);
});

app.listen(3000, () => {
    console.log('on')
})