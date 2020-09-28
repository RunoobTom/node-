function promiseArr() {
    return [
        new Promise((a) => {
            setTimeout(() => {
                a(1)
            },1000)
        }),
        new Promise((b) => {
            setTimeout(() => {
                b(2)
            }, 2000)
        })
    ]
}

Promise.race = function(arr, fn) {
    return new Promise((resolve, reject) => {
        console.log(arr, resolve, reject)
        arr.forEach(item => {
            item.then((value) => resolve(value), reject);
        })
    })
}


Promise.race(promiseArr()).then((res) => {
    console.log(123, res)
});

Promise.all = function(arr) {
    return new Promise((resolve, reject) => {
        let index = 0;
        let result = [];

        arr.forEach((item, i) => {
            item.then((value) => {
                index ++;
                result[i] = value;

                arr.length === index && resolve(result)
            }, reject)
        }) 
    })
}

const all = Promise.all(promiseArr());

all.then((values) => console.log(values))


new Promise((a) => {
    a(1)
}).then((b) => {
    console.log('p1', b);
    // setTimeout(() => {
    //     return 123
    // }, 2000)
    return 1
}).then((b) => console.log('p2', b))