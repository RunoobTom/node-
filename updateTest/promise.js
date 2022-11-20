/*
 * @Author: zhaoqian.tang
 * @Date: 2021-10-15 10:30:57
 * @Desc: promise 基础版本promise，不支持then链式调用
 */
class myPrmoise {
    constructor(executor) {
        this.status = 'pending'
        this.value = undefined
        this.reason = undefined
        this.onFulfilled = []
        this.onRejected = []

        // 使用箭头函数是为了绑定this
        let resolve = (value) => {
            this.status = 'fulfilled'
            this.value = value
            this.onFulfilled.forEach(fn => fn())
        }
    
        let reject = (reason) => {
            this.status = 'rejected'
            this.reason = reason
            this.onRejected.forEach(fn => fn())
        }
        try {
            executor(resolve, reject)
        } catch(error) {
            this.reject(error)
        }
    }

    then(onFul, onRej) {
        if(this.status === 'pending') {
            this.onFulfilled.push(onFul)
            this.onRejected.push(onRej)
        }
        if(this.status === 'rejected') {
            onRej(this.reason)
        }
        if(this.status === 'fulfilled') {
            onFul(this.value)
        }
    }
}


// new myPrmoise((resolve, reject)=> {
//     resolve(1)
// }).then((v) => {console.log(v)}, v => {console.log(v)})

// new myPrmoise((resolve, reject)=> {
//     reject(2)
// }).then((v) => {console.log(v)}, v => {console.log(v)})

// new myPrmoise((resolve, reject)=> {
//     setTimeout(() => {
//         resolve(3)
//     }, 1000)
// }).then((v) => {console.log(v)}, v => {console.log(v)})


/**
 * @description: 更新后的
 * @param {*}
 * @return {*}
 */
class UpdatePromise {
    constructor(executor) {
        this.status = 'pending'
        this.value = undefined
        this.reason = undefined
        this.onFulfilled = []
        this.onRejected = []

        // 使用箭头函数是为了绑定this
        let resolve = (value) => {
            // 只执行一次
            if(this.status === 'pending') {
                this.status = 'fulfilled'
                this.value = value
                console.log(this.onFulfilled)
                this.onFulfilled.forEach(fn => fn())
            }
        }
    
        let reject = (reason) => {
            // 只执行一次
            if(this.status === 'pending') {
                this.status = 'rejected'
                this.reason = reason
                this.onRejected.forEach(fn => fn())
            }
        }
        try {
            executor(resolve, reject)
        } catch(error) {
            this.reject(error)
        }
    }

    then(onFul, onRej) {
        let promise2 = new UpdatePromise((resolve, reject) => {
            // 如果constructor同步执行则直接同步执行then里的内容
            if(this.status === 'fulfilled') {
                let x = onFul(this.value)
            }

            if(this.status === 'rejected') {
                let x = onRej(this.reason)
            }

            if(this.status === 'pending') {
                this.onFulfilled.push(() => {
                    // 模拟微任务
                    setTimeout(() => {
                        onFul(this.value)
                    })
                })

                this.onRejected.push(() => {
                    // 模拟微任务
                    setTimeout(() => {
                        onRej(this.reason)
                    })
                })
            }
        })

        return promise2
    }
}

new UpdatePromise((resolve, reject) => {
    console.log(1)
    setTimeout(() => {resolve(2)})
    // reject(3)
}).then((v) => {
    console.log(4, v)
}, v => console.log(v)).then(v => {
    console.log('二次', v)

})


function resolvePromise(originPromise, promise2, resolve, reject) {

}


// 手写promise.all
Promise.myAll = function(promisesArr) {
    return new Promise((resolve, reject) => {
        let res = []
        promisesArr.forEach((item, index) => {
            item.then((value) => {
                res[index] = value
                if(res.length === promisesArr.length) {
                    resolve(res)
                }
            }, reason => {
                reject(reason)
            })
        })
    })
}

// 手写promise.race
Promise.myRace = function(promisesArr) {
    return new Promise((resolve, reject) => {
        promisesArr.forEach((item, index) => {
            item.then(resolve, reject)
        })
    })
}

// var arr = [
//     new Promise((r) => {setTimeout(() => {r(1)}, 500)}),
//     new Promise((r) => {setTimeout(() => {r(2)}, 600)}),
//     new Promise((r,j) => {setTimeout(() => {j(3)}, 400)})
// ]