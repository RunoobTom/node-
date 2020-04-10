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
console.log(result)
