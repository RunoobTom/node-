// 箭头函数没有arguments

function myCurry(fn, ...arg) {
    const { length } = fn;
    var args = [...arg];
    console.log('args', args);

    return function(...newAgrs) {
        console.log('arguments', arguments);
        const _args = [...args, ...newAgrs];

        if(_args.length < length) {
            return curry(fn, _args);
        } else {
            fn(..._args);
        }
    }
};

function add(a,b,c) {
    console.log(a + b +c);
    return a + b + c;
};

const afterCurry = myCurry(add, 1);
// afterCurry(2);
// afterCurry(2);
afterCurry(3, 6);


function curry(fn, args) {
    var length = fn.length;
    var args = args || [];
    return function(){
        newArgs = args.concat(Array.prototype.slice.call(arguments));
        if (newArgs.length < length) {
            return curry.call(this, fn, newArgs);
        }else{
            return fn.apply(this, newArgs);
        }
    }
}

function multiFn(a, b, c) {
    console.log(a * b * c)
    return a * b * c;
}

// var multi = curry(multiFn);

// multi(2)(3)(4);
// multi(2,3,4);
// multi(2)(3,4);
// multi(2,3)(4);

// var an = curry(multiFn, 2);
// an(2);
// an(2);


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
