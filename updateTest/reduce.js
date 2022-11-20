/*
 * @Author: zhaoqian.tang
 * @Date: 2021-10-12 17:18:08
 * @Desc: 手写数组reduce方法 注意点：如果未设第二个参数，则第一次以数组第一个作为初始值
 */
var arr = [1, 2, 3, 4]
let total = arr.reduce((total, current)=> {
    return total + current
}, 0)

// console.log(total)


function myReduce(fn, origin) {
    const arr = this

    for(let i = 0;i<arr.length;i++) {
        //important 当origin无值时，第一次origin的值为数组第一个值
        if(typeof origin === 'undefined') {
            origin = arr[i]
        } else {
            origin = fn(origin, arr[i], i, arr)
        }
    }

    return origin
}

Array.prototype.myReduce = myReduce

total = arr.myReduce((total, current)=> {
    return total + current
}, 0)

// console.log(total)



console.log(1)

setTimeout(() => {console.log(2)})

new Promise((a) => {
    console.log(3)
    a(4)
}).then(value =>  {
    console.log(value)
    return value
}).then(() => console.log(5))
console.log(6)
Promise.resolve(7).then((value) => console.log(value))