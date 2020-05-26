网络请求
1.http2.0有什么新特性
    二进制分帧：增加二进制分帧层，分成更小单位传输，通过标志位可乱序发送重新组装；首部消息进Headers帧，body进Data帧
    多路复用：可以不等待服务器返回就继续发送下一个请求
    首部压缩：头部压缩并且复用未改变的字段
    流量控制；请求优先级；服务器推送
2.http和https有什么区别
    https需要申请证书，http明文https加密传输，https传输时间更久
3.使用到请求缓存的情况 （cache-control和etag） cache-control的几个字段
    1.根据请求头的cache-control和expires判断是否命中强缓存(200(from cache));分为memory和disk  分别是内存和磁盘
    2.未命中强缓存则发个请求到服务器，根据etag和last-modified判断是否命中协商缓存，命中的话还是从缓存取资源(服务端返回304)
4.get和post的区别
    get请求是在规范中建议是幂等性的（一次或者多次请求得到的返回值相同），适合做查询等请求，不适合做增删改操作    
    原答案：post有content-type，header不同等。。

js基础
1.基础数据和引用数据类型区别
2.var let const的区别  const a ={b:123} a.b能改变吗
3.map和array的区别
4.深浅拷贝
    JSON.parse(JSON.stringify());
    递归,创造空对象赋值
5.怎么样判断数据类型
    typeof和toString来判断基本类型以及引用类型
    Object.prototype.toString === (window).toString // 浏览器中的window对象上的toString和Object.toString等同
6.js内存泄漏的情况 怎么避免内存泄漏 js的垃圾回收机制是怎么样的
7.es5和es6实现继承的方法
    手动绑定proto指向构造函数；
    new；
    class/extends
8.函数式编程
    两个特点： 1.通过函数处理数据 2.通过串联多个函数得出结果（链式传递）
    高阶函数是指以函数为参数或者以参数为返回值的函数
9.Array.prototype.sort用的算法
    chrome浏览器数组长度不超过10个使用插入排序；超过10个使用的快排
10.匿名函数和函数声明的区别
11.js的类，构造函数和类有什么区别
12.怎么给一个对象增加新的属性
    Object.defineProperty
    dot
    obj[property]

react
1.什么是受控组件
2.react做过什么优化 （答this.colunmns
    shouldComponentUpdate避免不必要的更新render；render中能避免放入的计算和赋值尽量避免；
3.react最新的几个特性（答hooks）
4.react生命周期
5.react父子通信的方法
6.react父组件更新传给子组件的props怎么更新子组件

webpack打包