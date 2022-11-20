
/*
 * @Author: zhaoqian.tang
 * @Date: 2021-10-12 10:15:28
 * @Desc: 
 */
function myCall(obj, ...args) {
    // 保证obj为对象
    obj = Object(obj) || window
    const func = this
    const funcName = Symbol('func')
    obj[funcName] = func

    const result =  obj[funcName](...args)
    delete obj[funcName]
    return result
}

function myApply(obj, args) {
    // 保证obj为对象
    obj = Object(obj) || window
    const func = this
    const funcName = Symbol('func')
    obj[funcName] = func

    const result =  obj[funcName](...args)
    delete obj[funcName]
    return result
}

function myBind(obj, ...args) {
    return (...newArgs) => {
        console.log(this)
        const func = this
        func.call(obj, ...args, ...newArgs)
    }
}

Function.prototype.myCall = myCall
Function.prototype.myApply = myApply
Function.prototype.myBind = myBind

function testFuc(a, b) {return this.a + this.b + a + b}

var obj = {a: 1, b: 2}

console.log(testFuc.myCall(obj, 3, 0))
console.log(testFuc.myApply(obj, [3, 0]))
var bindFuc = testFuc.myBind(obj, 1, 2)
console.log(bindFuc(1))

