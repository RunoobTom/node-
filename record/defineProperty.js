var car = {};
var val = 3000;

Object.defineProperty(car, 'price', {
    enumerable: true,
    configurable: true,
    get() {
        console.log('get');
        return val;
    },
    set(value) {
        console.log('set', value);
        val = value;
    }
});

car.price = 2000;
console.log(car.price);