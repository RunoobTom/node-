import esModule from './es6';

const a = require('./module');

// node暂不支持import语法，可使用babel或者mjs来使用esmodule


a.countAdd();
console.log(a, esModule)