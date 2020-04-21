网络请求
1.http2.0有什么新特性
    二进制分帧；多路复用；首部压缩；流量控制；请求优先级；服务器推送
2.http和https有什么区别
    https需要申请证书，http明文https加密传输，https传输时间更久
3.使用到请求缓存的情况 （cache-control和etag） cache-control的几个字段

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
    链式传递
9.Array.prototype.sort用的算法
    数组长度不超过10个使用插入排序；超过10个使用的快排

react
1.什么是受控组件
2.react做过什么优化 （答this.colunmns
    shouldComponentUpdate避免不必要的更新render；render中能避免放入的计算和赋值尽量避免；
3.react最新的几个特性（答hooks）
4.react生命周期

webpack打包