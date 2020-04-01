const express = require('express');

const app = new express();

app.get('/', (req, res, next) => {
    res.send('123');
});

app.listen(3000, () => {
    console.log('on')
})