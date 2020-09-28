function myFlat(arr) {
    const result =  arr.reduce((prev, cur) => {
        if(cur instanceof Array) {
            return [...prev, ...myFlat(cur)];
        } else {
            return [...prev, cur]
        }
    }, []);

    // console.log('result1', result);
    return result
}

function myFlat2(arr) {
    const result  = [];

    arr.forEach((item) => {
        if(item instanceof Array) {
            result = [...arr, ...myFlat2(item)]
        } else {
            result = [...arr, item]
        }
    });

    return result;
}

console.log('result1', myFlat([1,2,[3,[4,[5]]]]));
console.log('result2', myFlat([1,2,[3,[4,[5]]]]));