/*
 * @Author: zhaoqian.tang
 * @Date: 2021-06-02 11:28:49
 * @LastEditTime: 2021-06-02 16:40:15
 * @LastEditors: your name
 * @Description: call,bind,apply
 */

/**
 * 基本思路：在执行上下文对象上增加一个对象方法，执行完对象方法后删除对象方法
 * 注意点： 不要与已有属性重复；检测执行上下文是否为对象；call挂载Function的实例方法上
 */
function myCall(newThis, args) {
    const fnBody = this  // 调用本次call的函数
    
    // 如果执行上下文不是对象就取window作为执行上下文
    const context = Object(newThis) || window

    // 属性用symbol避免与对象原有属性冲突
    const fnKey = Symbol('方法名symbol')

    // 增加对象方法
    context[fnKey] = fnBody

    const result = context[fnKey](...args)

    delete context[fnKey]

    return result
}

function fn(...args) {
    console.log(123)
    console.log(this)
    return args
}

Function.prototype.myCall = myCall

const a = fn.myCall({a: 123}, [1])

console.log('a:', a)