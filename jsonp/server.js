const express = require('express');

const app = new express();

app.get('/', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.send('123');
});

app.get('/asd', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.json(404, {error: 'asdas'});
});

app.listen(4000, () => {
    console.log('on')
})