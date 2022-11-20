/*
 * @Author: zhaoqian.tang
 * @Date: 2021-10-14 18:18:36
 * @Desc: 数组的各种排序
 */

/**
 * @description: 快排
 * @param {*}
 * @return {*}
 */ 
function quick(arr) {
    if(arr.length <= 1 ) return arr

    let tag = arr[0]
    let left = [], right = []
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < tag) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return [...quick(left), tag, ...quick(right)]
}

console.log(quick([5, 3, 2,6,1,-2,4]))


/**
 * @description: 选择排序  选择当前最小数插到队尾
 * @param {*} array
 * @return {*}
 */
function select(array) {
    for(let i = 0;i < array.length; i++) {
        let j = i + 1
        let minIndex = i
        for(;j<array.length;j++) {
            if(array[j] < array[minIndex]) {
                minIndex = j
            }
        }
        [array[minIndex], array[i]] = [array[i], array[minIndex]]
    }

    return array
}
console.log(select([5, 3, 2,6,1,-2,4]))

/**
 * @description: 插入 选择当前数插入到有序数组
 * @param {*}
 * @return {*}
 */
function insert(array) {
    for(let i = 1; i < array.length; i ++) {
        // 外层循环
        for(let j = i; j > 0; j--) {
            if(array[j] < array[j - 1]) {
                [array[j - 1], array[j]] = [array[j], array[j - 1]]
            } else {
                break
            }
        }
    }
    return array
}

console.log(insert([5, 3, 2,6,1,-2,4]))
