/*
 * @Author: zhaoqian.tang
 * @Date: 2021-07-14 17:47:56
 * @Desc: 
 */
const a = require('./singletonObj')
const b = require('./singletonObj')
const c = require('./bUse')
a.b = 123123
console.log(b === c)
console.log(a === b, a ,b, c)