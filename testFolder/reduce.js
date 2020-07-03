// reduce实现累加
var arr1= [1, 2, 3, 4];
var a;
a = arr1.reduce((prev, current, index, arr) => {
    console.log(prev, current, index, arr);

    return prev + current;
}, 5);

console.log(a);

// 空数组如果没有设置初始值会导致报错,设置初始值更为安全
// try {
//     var a = [].reduce((a, b) => a + b);
// } catch(e) {
//     console.log(1, e);
// }

// 数组去重  es6  array.includes方法判断是否含有基础数据类型
var arr2 = [1, 1, 2, 2, 3, 4];
a = arr2.reduce((prev, curr) => {
    if(prev.includes(curr)) {
        return prev.concat(curr)
    } else {
        return prev
    }
}, []);

console.log('a2', a);


// 计算对象数组属性值累加
var arr3 = [
    {
        name: 1,
        value: 100,
    },{
        name: 2,
        value: 3,
    },{
        name: 3,
        value: 2,
    },{
        name: 4,
        value: 22,
    },
];

a = arr3.reduce((prev, curr) => {
    return prev + (curr.value || 0)
}, 0);

console.log('a3', a)