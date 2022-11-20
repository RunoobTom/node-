/*
 * @Author: zhaoqian.tang
 * @Date: 2021-10-14 10:17:59
 * @Desc: 手写new curry 注意点：1.需要指向原型2.如果原方法返回对象则使用原方法返回的对象作为实例
 */
function myNew(func, ...args) {
    /* 需要把新对象的__proto__ 指向构造函数的prototype */
    // let obj = {}
    // obj.__proto__ = func.prototype
    let obj = Object.create(func.prototype)
    const res = func.call(obj, ...args)
    if(typeof res === 'object' && res !== null) {
        return res
    }

    return obj
}


// 重点：1.function.length指入参的个数 2.未满足参数个数时，返回的是一个函数（所以是高阶函数）
function curry(func, ...args) {
    if(args.length < func.length) {
        return (...newArgs) => curry(func, ...args, ...newArgs)
    } else {
        return func(...args)
    }
}
function add(a, b, c) {return a+b+c}
console.log(curry(add)(1)(2)(3))
console.log(curry(add,1,2,3))