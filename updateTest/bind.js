/*
 * @Author: zhaoqian.tang
 * @Date: 2021-06-03 16:27:57
 * @LastEditTime: 2021-06-03 16:34:32
 * @LastEditors: your name
 * @Description: 
 */

function myBind(obj) {
    const fn = this
    const newObj = {...obj}
    const fucKey = Symbol('fuck')
    newObj[fucKey] = fn

    return function (...args) {
        newObj[fucKey](...args)
    }
}

Function.prototype.myBind = myBind


function abc() {
    console.log(this)
}

const newFuc = abc.myBind({a: 123})

newFuc()