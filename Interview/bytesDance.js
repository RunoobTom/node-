// 1.css需要知道大部分的技术

// 2.js基础，es5

// 3.框架原理，官方文档 ->  基础用法  ->  原理文档

// 题目
// vw，px,pt,rem,em什么区别  
//     em相对于父元素的fontSize，rem相对于根元素html的fontSize，pt是绝对长度对应物理意义的一个像素点
// 绝对垂直居中
// animation和keyframe
// 微信小程序用过什么语言
// 手写柯力化
// 手写节流
// setState是不是异步 怎么同步
//     异步，bacth批处理
//     setTimout/setInterval可以同步，原生事件触发可以同步
// 函数和组件有什么区别


// symbol的使用场景
// 1.用来做枚举值 2.作为对象的匿名属性 3.模拟类的私有方法（以symbo值为方法名,外部无法访问）

// 获取最大层数
function getDepth(obj) {
    let depth = 0

    if(typeof obj === 'object' && obj !== null) {
        // 对象类型
        for(let i in obj) {
            depth = Math.max(getDepth(obj[i]), depth)
        }
    }

    return depth + 1
}
var obj = {
    a: 123,
    b: {
        c: [1]
    }
}
console.log(getDepth(obj))

// 构造函数 主要考察对象的toSting和valueOf方法


// dp 爬楼梯

// Promise.all

// 怎么区分资源的请求，图片、css等（accept）