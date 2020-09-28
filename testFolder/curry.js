// 重写curry函数
function curry(fn, ...args) {
    const { length } = fn;

    if(args.length < fn.length) {
        return (...newArgs) => curry(fn, ...args, ...newArgs)
    } else {
        fn(...args)
    }
}

function fn(a,b,c) {
    console.log('!', a,b,c)
}

curry(fn, 1,2,3);


function testClosure() {
    var a = 1;

    return () => {
        a ++;
        return a;
    }
}


for(var i = 0; i<5; i ++) {
    (
        function() {
            var b = i;
            setTimeout(function() {
                console.log(b)
            })
        }
    )()
}

console.log('i', i);
// 解决方法  let和闭包
// let是块级作用域
