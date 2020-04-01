function deepClone(sourceObj) {
    if(typeof sourceObj === 'object') {
        const targetObj = sourceObj instanceof Array ? [] : {};

        for(let key in sourceObj) {
            if(typeof sourceObj[key] === 'object') {
                targetObj[key] = deepClone(sourceObj[key]);
            } else {
                targetObj[key] = sourceObj[key];
            }
        }

        return targetObj;
    } else {
        return sourceObj;
    }
}
const a = {
    b: {
        c: 123,
        d: [1, 2, 3]
    },
}
const b = deepClone(a);
console.log(a, b, a.b.d === b.b.d);