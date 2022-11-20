1.js 基本类型
    string number boolean undefined null bigInt object symbol
    存储：基本数据类型 栈内存（占据空间小、大小固定，频繁使用）；引用数据类型 栈内存指针指向堆内存（堆内存大小不确定）

2.深浅拷贝
    .../Object.assign都属于浅拷贝
    深拷贝方法：JSON.parse(JSON.stringify()) + 递归浅拷贝
    https://juejin.cn/post/6844903929705136141
    1.考虑数组 2.循环引用（通过map来标记当前对象是否生成过  => 进阶weakMap） 3.克隆symbol

3.循环效率 while、for in 、for of
    while和for的循环速度会比es6语法快，但是不同浏览器表现不同

4.js原型链的顶端 Object.prototype  Object.prototype.__proto__ == null

5.原型链怎么实现继承

6.浏览器缓存；怎么强制刷新缓存；怎么禁止缓存
强缓存（expires和cache-control）命中直接从浏览器缓存获取结果；未命中发请求判断协商缓存（last-modified和etag），未过期则从本地缓存获取结果；

cache-control: public、private、no-cache、no-store

7.跨域的产生以及解决方法
同源政策下，不同源的请求会被浏览器拦截；
解决方法：正向代理、jsonp（只支持http请求）、反向代理、postMessage、设置access-control-allow-origin（acao）


8.简单请求和复杂请求
1): 请求方式只能是：head，get，post
2): 请求头允许的字段：Accept，Accept-Language，Content-Language，Last-Event-ID
Content-Type：application/x-www-form-urlencoded、multipart/form-data、text/plain

9.tcp三次握手？为什么需要三次握手
1.client发送syn包 进入syn-sent状态
2.server接收到syn包，发送syn+ack包，进入syn-recived状态
3.client接收到syn+ack包，发送ack包，进入establish状态，server接收到ack包之后也进入establish状态

如果只有两次握手，当client 发送syn包之后网络延迟等异常状态会导致server一直等待

10.http 2.0 3.0
二进制分帧、多路复用、头部压缩
一个域名能建立有限个tcp链接（Chrome是6个），每个tcp链接不断掉可以建立http请求；而1.x的版本，除了使用pipeline只能并发单个请求，pipeline也有队头阻塞的问题

11.https与http的区别
http+ssl
1.首先客户端通过URL访问服务器建立SSL连接。
2.服务端收到客户端请求后，会将网站支持的证书信息（证书中包含公钥）传送一份给客户端。
3.客户端的服务器开始协商SSL连接的安全等级，也就是信息加密的等级。
4.客户端的浏览器根据双方同意的安全等级，建立会话密钥，然后利用网站的公钥将会话密钥加密，并传送给网站。
5.服务器利用自己的私钥解密出会话密钥。
6.服务器利用会话密钥加密与客户端之间的通信

HTTPS是HTTP协议的安全版本，HTTP协议的数据传输是明文的，是不安全的，HTTPS使用了SSL/TLS协议进行了加密处理。
http和https使用连接方式不同，默认端口也不一样，http是80，https是443

12.dns解析
1）首先搜索浏览器的 DNS 缓存，缓存中维护一张域名与 IP 地址的对应表；

2）若没有命中，则继续搜索操作系统的 DNS 缓存；

3）若仍然没有命中，则操作系统将域名发送至本地域名服务器，本地域名服务器查询自己的 DNS 缓存，查找成功则返回结果（注意：主机和本地域名服务器之间的查询方式是递归查询）；

4）若本地域名服务器的 DNS 缓存没有命中，则本地域名服务器向上级域名服务器进行查询，通过以下方式进行迭代查询（注意：本地域名服务器和其他域名服务器之间的查询方式是迭代查询，防止根域名服务器压力过大）：

首先本地域名服务器向根域名服务器发起请求，根域名服务器是最高层次的，它并不会直接指明这个域名对应的 IP 地址，而是返回顶级域名服务器的地址，也就是说给本地域名服务器指明一条道路，让他去这里寻找答案
本地域名服务器拿到这个顶级域名服务器的地址后，就向其发起请求，获取权限域名服务器的地址
本地域名服务器根据权限域名服务器的地址向其发起请求，最终得到该域名对应的 IP 地址
4）本地域名服务器将得到的 IP 地址返回给操作系统，同时自己将 IP 地址缓存起来

5）操作系统将 IP 地址返回给浏览器，同时自己也将 IP 地址缓存起来

6）至此，浏览器就得到了域名对应的 IP 地址，并将 IP 地址缓存起来

13.输入url
1.dns解析
2.http请求
3.解析html生成DOMTree，解析css文件生成cssomTree，把cssomTree attach到domTree上生成renderTree（将字节流转换成字符流，根据不同的编码进行解码
通过词法分析将字符流解析为一个个词语（Token）。这个过程会跳过空格与换行内容。词法分析由HTMLTokenizer完成。
使用XSSAuditor来进行词语验证及过滤，主要是出于安全方面的考虑
在经过XSSAuditor过滤之后，由解释器调用方法构建DOM节点
从上面的DOM节点构建出来DOM树，包括创建元素节点的属性节点工作）

14.回流 重绘
reflow：例如某个子元素样式发生改变，直接影响到了其父元素以及往上追溯很多祖先元素（包括兄弟元素），这个时候浏览器要重新去渲染这个子元素相关联的所有元素的过程称为回流。

repaint：如果只是改变某个元素的背景色、文字颜色、边框颜色等等不影响它周围或内部布局的属性，将只会引起浏览器 repaint（重绘）

怎么减少回流
1.减少不必要的dom结构
2.减少对dom节点的操作
3.合并修改样式或dom操作，避免多次回流
4.实现元素的动画，对于经常要进行回流的组件，要抽离出来，它的position属性应当设为fixed或absolute

15.怎么不让别人修改某个对象或数组
Object.defineProperty + Object.seal
Object.freeze()
Proxy()