/*
 * @Author: zhaoqian.tang
 * @Date: 2021-06-02 16:40:47
 * @LastEditTime: 2021-06-02 22:17:25
 * @LastEditors: your name
 * @Description: 
 */

/**
 * 基本思路：在执行上下文对象上增加一个对象方法，执行完对象方法后删除对象方法
 * 注意点： 不要与已有属性重复；检测执行上下文是否为对象；apply挂载Function的实例方法上
*/
function myApply(newObject, ...agrs) {
    console.log(this, newObject, agrs)
    // 调用本方法的函数体
    const fnBody = this

    const fnKey = Symbol('newKey')
    newObject[fnKey] = fnBody

    const result = newObject[fnKey](...agrs)

    delete newObject[fnKey]

    return result
}

Function.prototype.myApply = myApply

function fn(a, b, c) {
    console.log(a, b, c)
    return [a, b ,c, this.a]
}

const res = fn.myApply({a: 123}, 1, 2, 3)
console.log(res)