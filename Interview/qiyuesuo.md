1.async await 实现promsie.all promise.race(答foreach 标志位回调)  有没有更好的方法

2.map set weakmap weakset区别

3.cors头部有哪些字段
    access-control-allow-origin

4.for循环和数组forEach中使用async await有什么区别

5.cookie跨域  ios问题 除了第三方cookie有问题还有ios Safari的cookie问题

6.vue  作用域slot  watch两个字段都改变  不想handler执行两次

7.js有哪些类数组  怎么转为数组  （答es6遍历器）有没有其他的方法
    类数组：非Array生成；所有property为自然数，且有相应的length
    方法1：Array.prototype.slice.call
    方法2：Array.from

8.promise.race中 当一个promise执行完成，其他的promise还会执行吗
    不会，但是只有第一个promise执行完会进入到race的then里

9.小程序为什么建议setData里只执行一个setData

10.对象的深拷贝，function怎么复制
    箭头函数用eval
    普通函数用new Function 解析出的字符串的参数和函数体

11.jsbridge的优化？

12.setState是异步的嘛