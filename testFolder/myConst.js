// 使用Object 对象属性描述符模拟const

function myConst(name, value) {
    global.name = value;

    Object.defineProperty(global, name, {
        // enumerable: false,
        // configurable: true,
        writable: true,
        // get: () => value,
        
    })
};

myConst('nums', 12);

// 模拟new，首先把原型指向构造函数的原型对象，然后把构造函数的this指向新创建的对象执行一次，最后把对象返回出来
function myNew(Fuc, args) {
    let obj = Object.create(Fuc.prototype);
    console.log('obj', obj);
    let target = Fuc.apply(obj, args);
    console.log('target', target)
    return obj;
}

function Man(name, age) {
    this.name = name;
    this.age = age;
    console.log(name)
};

const m = myNew(Man, ['Tom', 123]);

console.log(m.name);
