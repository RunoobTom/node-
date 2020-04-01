'use strict';

const hello = require('./hello');

process.nextTick(() => {
    console.log('next')
})
console.log(hello)
hello.hello('小李子');