/*
 * @Author: zhaoqian.tang
 * @Date: 2021-10-21 16:02:13
 * @Desc: es5继承的几种写法
 */
function Father(name) {
    this.name = name
}

Father.prototype.getName = function() {
    return this.name
}

// 构造函数继承 缺点：只能继承属性，不能继承方法和原型链
function Son1(...args) {
    Father.call(this, ...args)
}
console.log('s1',new Son1('s1'))

// 原型链继承 缺点：所有实例的原型都指向父实例 修改一个会影响多个
function Son2(...args) {
    
}

Son2.prototype = new Father('s2')
const son2 = new Son2('s2')
console.log('s2', son2, son2.getName())

// 组合
function Son3(...args) {
    Father.call(this, ...args)
}

Son3.prototype = new Father('s3')
