/**
 * 主要思路： 递归层层拷贝
 * 注意点： 注意特殊值处理以及循环引用处理
 * 延伸考点： 数据类型；引用数据类型；循环引用
 */

// 未处理循环引用，循环引用就会爆栈
function deepCloneWithoutCircle(obj) {
    // 对 对象和数组进行处理，基本数据类型直接返回
    // typeof null也为object
    if (typeof obj === 'object' && obj !== null) {
        let copyObj = Array.isArray(obj) ? [] : {}

        for(let key in obj) {
            copyObj[key] = deepCloneWithoutCircle(obj[key])
        }

        return copyObj
    } 

    return obj
}

const obj1 = {a: 123, b: {a:123, c: {d:'asasd'}}}
const ybbb = deepCloneWithoutCircle(obj1)
console.log(ybbb)

function deepClone(obj, map = new Map()) {
    // 引入Map管理已处理过的对象，如果发现有相同的对象，直接引入处理过的对象
    if (typeof obj === 'object' && obj !== null) {
        if(map.has(obj)) return map.get(obj)

        let copyObj = Array.isArray(obj) ? [] : {}
        map.set(obj, copyObj)

        for(let key in obj) {
            copyObj[key] = deepClone(obj[key], map)
        }

        return copyObj
    }

    return obj
}

const obj2 = {a: 123, b: {a:123, c: {d:'asasd'}}}
obj2.self = obj2
console.log(obj2)
const ybbb2 = deepClone(obj2)
console.log(ybbb2)

// 乞丐版
// 缺点： 对象中不能有函数、undefined、regExp正则、循环引用；不能有Date类型,会被转换为字符串 丢失相关方法和属性
JSON.parse(JSON.stringify({}))