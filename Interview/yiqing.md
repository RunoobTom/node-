掌门教育
1.setstate执行过程.同步还是异步
2.react生命周期，分别什么时候使用，卸载生命周期什么时候用
3.深拷贝，浅拷贝，怎么实现，几种方式
4.哪种循环性能更好一些
5.js基本类型，引用类型，存储方式，堆栈
6.es6新特性
7.antddesign表单校验怎么处理
8.redux怎么在react中起作用
9...是深拷贝还是浅拷贝
10.hooks有哪些，taro包含了哪些
11.垂直居中怎么实现
12.怎么清除浮动
13.一共10列，中间4列一起，css怎么实现
14.webpack实现原理，过程
15.js 加载不出来怎么处理
16.react和vue 的区别
17.js闭包，有什么优劣，使用场景是什么
18.dva,umi原理
19.js原型链,最顶层是什么
20.echarts图表了解
21.absolute相对于什么定位
22.react18新特性
23.数组有哪些方法，reduce?

平安好医生
1.react生命周期，分别什么时候执行
2.react中组件通讯，除了redux和mobx轻量级的项目怎么实现，context上下文？
3.跨域有哪几种方式
4.option请求？
5.浏览器缓存有哪些方式
6.怎么强制刷缓存
7.es6新特性
8.for循环，ajax请求后输出什么，let var分别输出什么，都输出i的最大值这种情况怎么改成正常输出
9.async await. es5怎么实现的
10.解构赋值是深拷贝还是浅拷贝
11.promise有哪几种状态
12.0.5px怎么实现
13.css水平垂直居中
14.function和箭头函数的区别
15.let和var的区别
16.for in和for of的区别

货拉拉
1.怎么解决连续点击发多次请求的问题
2.防抖和节流，英文
3.节流怎么保留最后一次执行
4.eventloop
5.跨域有哪几种方式，jsonp 怎么实现的，为什么会产生跨域
6.浏览器缓存
7.高阶组件怎么实现
8.浏览器输入url发生什么
9.promise输出
10.小程序包优化
11.antd design引入包，整个引进来太大怎么办，按需加载怎么实现的
12.react hooks
13.TCP三次握手，发送内容？为什么需要三次握手
todo 重构下面代码，使其支持圆形的面积和计算
 时间 ~5min 
class Circle { -->
   constructor(public radius) {
   } 
 } 
// <!-- // class Rectangle { -->
// <!-- //   constructor(public width, public height) { -->
// <!-- //   } -->
// <!-- // } -->
// <!--  -->
// <!-- // class Square { -->
// <!-- //   constructor(public width) { -->
// <!-- //   } -->
// <!-- // } -->
// <!--  -->
// <!-- // class AreaCalculator { -->
// <!-- //   /** -->
// <!-- //    * 计算图形的面积和 -->
// <!-- //    */ -->
// <!-- //   static Area(shapes: Rectangle[]) { -->
// <!-- //     let area = 0 -->
// <!-- //     for (let shape of shapes) { -->
// <!-- //       area += shape.width * shape.height -->
// <!-- //     } -->
// <!--  -->
// <!-- //     return area -->
// <!-- //   } -->
// <!-- // } -->
// <!--  -->
// <!-- // AreaCalculator.Area([ -->
// <!-- //   new Rectangle(2,4),  -->
// <!-- //   new Circle(3), -->
// <!-- //   new Square(3) -->
// <!-- // ]) -->
// <!--  -->
// <!-- console.log(1) -->
// <!--  -->
// <!-- new Promise((resolve) => { -->
// <!--   console.log(2) -->
// <!--   resolve() -->
// <!--   console.log(3) -->
// <!-- }) -->
// <!--  -->
// <!-- console.log(4) -->
// <!--  -->
// <!-- setTimeout(() => { -->
// <!--   new Promise((resolve) => { -->
// <!--     console.log(5) -->
// <!--     resolve() -->
// <!--   }).then(() => { -->
// <!--     console.log(6) -->
// <!--   }) -->
// <!-- }) -->
// <!-- console.log(7) -->
// <!--  -->
// <!-- setTimeout(() => { -->
// <!--     console.log(8) -->
// <!-- }) -->
// <!--  -->

// new Promise((_, reject) => {
//   reject(2)
// }).catch(e => {
//   console.log(e)
// }).then(() => {
//   console.log(3)
// }, () => {
//   console.log(4)
// })

泛微
1.react生命周期 will receive props什么时候使用，路由切换会不会执行
2.内存泄漏，接口太多，页面白屏怎么处理
3.性能监控工具，performance 如何使用
4.set state 是同步还是异步
5.hooks
6.规划，对现在公司的评价
7.redux的缺点
达达
1.OA是什么体量的，包含什么功能
2.怎么实现一个弹窗组件
3.Taro和React的区别
4.Taro是怎么实现数据绑定的，setState
5.es6新特性
6.Promise实现，promise.then实现
7.async await和promise的区别
8.es6 Set和Map的区别，Set是数组吗，他有数组原型的一些属性吗
9.var和let的区别
10.怎么用var实现块级作用域（立即执行函数）
11.闭包，使用场景
12.eventloop,哪些属于宏任务
13.常用的布局方式
14.flex的缺点
15.盒模型
16.浏览器渲染过程，怎么防止css阻塞，怎么防止js阻塞，defer?
17.页面白屏可以做哪些优化，有没有基于html/DOM层面的处理
18.浏览器缓存，怎么禁止浏览器缓存
19.https和http的区别
20.webpack插件实现
21.js设计模式

德邦证券
1.var和function的变量提升
2.深拷贝的实现
3.判断数据类型，typeof  instanceof怎么使用，返回值
4.遍历的方法
5.for in和for of的区别
6.宏任务和微任务，分别有哪些
7.Promise除了接口请求，有哪些使用场景
8.promise实现
9.promise.then有哪几个参数，.catch什么时候执行，.then再.catch怎么执行
10.promise.all有哪些参数，参数值是什么，返回结果是什么，then的参数是什么，一个接口请求失败后面会出现什么问题
11.promise.race
12.es6新特性
13.const 修改对象属性
14.原型链
15.用原型怎么实现继承
16._proto_和prototype的区别，string有prototype吗
17.react生命周期，render什么时候执行，构造函数什么时候执行，父子组件的生命周期执行顺序
18.shouldcomponentupdate什么时候执行
19.组件通信
20.class和函数组件的区别，他们里面this的区别
21.hooks解决什么问题
22.函数组件有什么优势
23.react key使用index，会怎么渲染，和key使用id渲染上有什么区别
24.路由有哪些模式。哈希模式？#
25.路由的生命周期
26.路由发生变化，页面没有变化，如何处理
27.垂直水平居中
28.上中下布局，上下固定高度，中间撑满，有哪几种实现方式
29.flex默认布局，怎么指定上中下布局
30.放大缩小动画实现
31.git常用命令 git stash\git ref
32.正在开发一个分支，线上出了问题如何处理，如何操作git
33.如何实现两个非常大的数相加，超过了最大值
34.小数的精确计算
35.实现一个方法，数组每一位是前面两位的和[0,1]
36.页面卡顿可以做哪些优化，打包优化，css优化
37.ts可以定义的数据类型，除了基础类型
38.未来3年规划

得物
1面
1.Taro issue提了哪些，有回复吗，进度咋样
2.有用过vue吗
3.BFC
4.position分别有哪些值，什么时候使用
5.普通函数和箭头函数的区别
6.事件循环
7.防抖和节流使用场景，如何实现
2面
1.优点和缺点
2.未来3年规划
3.在组里的位置
4.浏览器缓存
5.cdn原理和作用
6.浏览器输入url发生什么
7.防抖节流
8.闭包
9.BFC
10.有没有读过源码，npm源码，有没有写过SDK
11.DNS解析
12.new的过程
3面
1.自我介绍
2.最近解决的一次印象比较深的问题
3.js基本类型，基本类型和引用类型的区别
4.跨域，同源策略
5.jsonp原理，返回的是什么
6.css选择器，优先级
7.flex:1代表什么
8.http2.0和1.0的区别，多路复用原理
9.https，加密过程
10.浏览器缓存

爱回收
1.自我介绍
2.印象比较深的问题
3.配置文件动态生成是如何实现的
4.为什要引入hooks
5.React为什要往函数式组件靠
6.React16新的生命周期，为什么要引入，处理什么问题，分别什么时候使用
7.React的异步可中断更新具体流程
8.Redux的作用，在React中怎么使用，数据更新组件如何知道
9.React-redux做了哪些处理
10.reducer为什么规定要return一个新的对象，为什么不能直接改对象的值
11.Redux源码，发布订阅模式是如何实现的
12.redux middleware实现，dispatch做了哪些改造，怎么保证中间件的执行顺序
13.weboack的作用
14.loader和plugin的区别
15.自己写过webpack吗，怎么实现的
16.小程序页面优化
17.跨域，同源策略，如何解决跨域
18.nginx反向代理具体过程
19.git开发流程，git rebase

蔚来汽车
1面
1.自我介绍
2.span设margin会不会生效，设padding会不会生效
3.怎么把一个元素设为不可见
4.display:none和visibility:hidden和opacity:0的区别
5.怎么实现左侧固定导航栏，右侧自适应，有几种方式
6.移动端怎么处理不同机型的自适应
7.call\apply\bind的区别，怎么实现一个bind
8.怎么判断一个元素的类型，object.prototype.toString.call的返回值
9.普通函数和箭头函数的区别
10.const的特点，可以只声名不赋值吗
11.小程序登陆流程实现
12.React中key的作用
13.diff算法原理
14.redux如何使用
15.封装过哪些公共组件
2面
1.settimeout for循环输出内容
2.function(x){delete x ;return x}输出内容
3.eventloop代码输出内容
4.实现一个全排列
5.实现判断字符串是否是有效的括号
6.不用递归和现有类实现数组展平
7.小程序中遇到的一些坑
8.原型链
9.如何利用原型实现继承
10.在必须使用eval的场景，如何处理报错的情况
11.promise有哪些弊端
12.浏览器做加载处理的时候在onLoad之前是用什么来处理的
13.字符串的‘true’’false’如何转成bool值
14.防抖，使用场景，怎么实现，如何解决第一次事件不做延迟执行
3面
1.Taro打包遇到的问题
2.比较有意思的业务实现
3.概率题
4.数组翻转求最大值
5.n层台阶，一次走一步or2步,求多少种方法走到终点。动态规划、递归，递归的弊端
6.一个只包含0 1的方阵，求全是1的最大子方阵 暴力解法、动态规划

携程
1面
1.页面优化有哪些方式
2.实现一个基础组件，需要考虑哪些方面
3.React生命周期，shouldcomponentupdate什么时候使用
4.数组方法，map和forEach区别
5.数组去重的几种方式
6.防抖节流，如何实现
2面
1.多种排序方式，手写
2.手写斐波纳切数列，2种方式，递归实现
3.0 1背包问题，固定容量，求最大价值
4.54张扑克牌，黑白两面，求出翻面最少次数然后扑克牌颜色相间
5.git如何覆盖上次提交的某个文件
6.闭包，使用场景
7.react 兄弟组件通信有哪几种方式
8.页面卡顿如何排查性能问题所在
9.父组件的props更新，子组件会执行哪些生命周期
10.数组方法
11.正则实现三个数一组以，分隔
3面
1.taro2 和3的区别
2.taro和uni-app的区别
3.taro长列表渲染性能问题如何解决
4.taro 公共的common.js文件如何让他在每个分包里打包进去
5.多个小程序的taro 公共打包文件如何处理
6.hooks遇到哪些问题
7.hooks模拟生命周期
8.hooks父子组件如何通信 useref?

美团
1面
1.项目中的挑战、遇到的问题
2.this的指向，箭头函数中的this
3.commonjs和es6module的区别
4.浏览器输入一个url发生了什么
5.浏览器缓存策略
6.call\apply\bind的区别
7.手写call
8.手写new
9.手写数组展平+排序+去重
10.事件循环，2道输出题
11.原型链
12.new做了哪些操作
13.深拷贝的方式
14.js基础类型和引用类型的区别
15.js defer和async的区别
16.页面性能优化的方式
17.XSS在什么场景下出现，如何避免
18.实际工作中有处理过前端安全吗
19.三次握手
20.上线发布流程，如何实现的
21.js为什么是单线程
2面
1.反转链表
2.数组中出现次数超过一半的数字

叮咚买菜
1.小程序页面跳转
2.小程序input 组件特点
3.小程序层级渲染
4.小程序中遇到的一些问题
5.taro 和uniapp的区别
6.promise多次resolve，多次then返回值
7.js跨域
8.flex 1
9.flex垂直居中
10.盒模型
11.ts用过哪些
12.小程序登陆流程
13.小程序生命周期

陆金所
1.es6新特性，defineproperties?
2.前端模块化
3.cssModule
4.treeshaking原理，如何实现
5.nginx 反向代理过程，nginx原理，反向代理和镜像代理的区别
6.context属于哪种设计模式
7.单例模式
8.redux 如何使用，有哪些弊端
9.useRef的作用
10.组件如何通信
11.hooks如何模拟生命周期
12.proxy，可以用来做些什么
13.小程序遇到的问题
14.小程序数据绑定原理
15.小程序setdata和react setstate的区别
16.跨域的几种方式，jsonp是如何处理的，为什么可以这样处理跨域，原理
17.let和var的区别
18.如何处理const使他不能直接修改对象
19.普通函数和箭头函数的区别

拼多多
1.左右标签字符串判断是否有效 leetcode20 有效括号
2.leetcode 56 合并区间
3.数组展平，找出重复的数字，除了递归还有什么方式
4.js跨域方式
5.简单请求和复杂请求如何区分
6.proxy和defineProperties的区别
7.hooks为什么不能写在条件语句里
8.react生命周期
9.asyncawait和promise的关系
10.react页面卡顿优化方案
11.如何实现在浏览器空闲的时候执行某些内容（requestIdleCallback)
12.页面如何捕捉错误，window.onerror?

字节
1.react fiber原理 
2.classcomponent 和hooks在fiber 中的区别
3.inline-block空格问题
4.事件捕获 冒泡，哪些事件不能冒泡
UI事件：load unload resize scroll  焦点：focus blur  鼠标事件： mouseleave mouseenter
5.事件循环题
6.事件代理绑定事件
7.iframe的弊端

百度
1面
1.手写数组展平+排序+去重
2.手写promise.all
3.css实现左边导航栏自适应宽度，右边content占据剩余位置
4.position有哪些值，absolute和fixed分别相对于什么定位
5.手写反转字符串，中间有-保持不动
6.react16和15的区别，fiber原理，以及做了哪些优化，新的生命周期
7.如何优化渲染
2面
1.手写将对象数组转为树
2.手写promise请求次数限制以及轮训
3.微服务
4.……记不清了
3面
1.项目
2.一道数学题，类似dfs