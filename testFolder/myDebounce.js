// 防抖函数

function myDebounce(func, wait) {
    let timeout = null;
    let context = this;

    return function() {
        // console.log(this, arguments);
        if(timeout) clearTimeout(timeout);

        setTimeout(() => {
            func.apply(context, arguments);
        }, wait);
    }
    // const stvl = setInterval(() => func, wait)
}

function func(a, b) {
    console.log(a, b);
}

myDebounce(func, 1000)(1,2)

// 节流函数
function myThrottle(func, wait) {
    let timeout = null;
    const context = this;

    return function() {
        if(!timeout) {   
            timeout = setTimeout(() => {
                func.apply(context, arguments);
                timeout = null;
            }, wait);
        }
    }
};

function cons(a) {
    console.log(`第${a}次`)
}

myThrottle(() => {console.log(`13`)}, 1000)();
const throttle = myThrottle(cons, 1000);

throttle(1);
throttle(2);
setTimeout(() => throttle(3), 1200);
//两者都是返回一个函数，需要再次传入参数；也可以做函数柯里化的传参方式，允许多种传参方式