const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());
// console.log(cookieParse)

app.get('/mgt/activity/list', (req, res) => {
    const { cookie } = req;
    console.log('cookie', req.headers.cookie);
    // if(req.cookies.isVisit) {
    //     console.log(req.cookies)
    //     res.send('欢迎再次光临')
    // } else {
    //     res.cookie('isVisit', 1, {maxAge: 60 * 1000, httpOnly: true}) // 该处是设置 cookie 与 httpOnly 
    //     res.send('欢迎初次光临')
    // }
    // res.cookie("name", 'zhangsan', {maxAge: 900000, httpOnly: true, sameSite: 'strict'}); 
    res.send('tt')
});

app.listen(3000, () => {
    console.log('run in 3000...')
})