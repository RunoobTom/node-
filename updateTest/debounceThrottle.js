/*
 * @Author: zhaoqian.tang
 * @Date: 2021-10-12 14:29:32
 * @Desc: 防抖节流
 */
function debounce(func, delay) {
    let timeout = null

    return function(...args) {
        if(timeout === null) {
            timeout = setTimeout(() => {
                func(...args)
                timeout = null
            }, delay)
        } else {
            clearTimeout(timeout)
            timeout = setTimeout(() => {
                func(...args)
                timeout = null
            }, delay)
        }
    }
}

const t = debounce(()=>{console.log(1)}, 500)
// t()
// t()
// t()
// setTimeout(() => {t()}, 600)

// 首节流 Date.now
function throttleHead(func, delay) {
    let prev = 0
    return (...args) => {
        let cur = Date.now()
        if(cur - prev > delay) {
            func(...args)
            prev = cur
        }
    }
}

const t1 = throttleHead((a) => {console.log(a)}, 200)
t1(1)
t1(1)
t1(1)
setTimeout(() => {t1(2)}, 200)
setTimeout(() => {t1(3)}, 300)

// 尾节流
function throttleTail(func, delay) {
    let timeout = null
    return (...args) => {
        if(timeout === null) {
            timeout = setTimeout(() => {
                func(...args)
                timeout = null
            }, delay)
        }
    }
}