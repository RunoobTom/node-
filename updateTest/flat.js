/*
 * @Author: zhaoqian.tang
 * @Date: 2021-10-12 10:58:48
 * @Desc: 一层展平->多层展平->排序去重
 */

// 一层展平
function flatOnce(arr = []) {
    let res = []
    arr.forEach(item => {
        if(item instanceof Array) {
            res = [...res, ...item]
        } else {
            res.push(item)
        }
    })

    return res
}

// 全部展平
function flatAll(arr = []) {
    return arr.reduce(function(res, current){
        if(current instanceof Array) {
            return [...res, ...flatAll(current)]
        } else {
            return [...res, current]
        }
    }, [])
}

console.log(flatAll([1,[2,[3,[4]]],5]))
console.log(flatOnce([1,[2,[3,[4]]],5]))

function myFlat(depth) {
    depth = Math.floor(depth)
    const arr = this

    return arr.reduce(function(res, current){
        if(current instanceof Array && depth > 0) {
            return [...res, ...current.myFlat(depth - 1)]
        } else {
            return [...res, current]
        }
    }, [])
}

Array.prototype.myFlat = myFlat

console.log([1,[2,2, 2,[3,3,3,[4,4,4,[5,5,5]]]],1].myFlat(2))
console.log([1,[2,2, 2,[3,3,3,[4,4,4,[5,5,5]]]],1].myFlat(3))