Function.prototype.myCall = function(targetObj, ...arugs) {
    console.log(targetObj, arugs, this);
    targetObj.fn = this;
    // targetObj.fn(...arugs)
    return targetObj.fn(...arugs)
}

function add(a, b) {
    console.log('this', this);

    return a + '-' + this.a
 };

var ob = {
    c: 123,
    a: 'hello',
    fnc: () => {
        console.log(this)
    }
}

var result = add.myCall(ob, 12, 23);
console.log(result);


Function.prototype.myApply = function(targetObj, argu) {
    targetObj.fn = this;

    targetObj.fn(argu)
};

var newObj = {
    hello: 'hello ',
    name: 'Tom'
};

function hello(value) {
    console.log(this.hello + this.name, value);
};

hello.myApply(newObj, 123)

function newCallWay(func, targetObj, ...args) {
    targetObj.fn = func;

    targetObj.fn(...args);
}

var c = {a: 123};
function cFuc() {
    console.log(this.a);
};

newCallWay(cFuc, c, 1, 3);
