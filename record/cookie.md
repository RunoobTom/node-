<!--
 * @Author: your name
 * @Date: 2021-01-06 15:11:56
 * @LastEditTime: 2021-01-06 15:11:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node-tips/record/cookie.md
-->

1. http请求
http请求携带set-cookie字段让浏览器生成cookie
浏览器下次请求时携带所有满足条件的cookie，但是服务器并不知道cookie的属性，只能拿到cookie的k-v

2.属性

Expires/Max-Age: Expires根据本地时间判断是否过期（UTC格式）；Max-Age根据倒计时秒数来计算过期时间；两者都存在Max-Age优先；都不存在则为Session Cookie
s
Domain/Path: 默认用一级域名作为domain，使用不符合当前域名的domain不生效；匹配path才会带cookie

Secure/HTTPOnly: Secure属性只是一个开关，不需要指定值,如果通信是 HTTPS 协议，该开关自动打开;HttpOnly开启时，浏览器无法通过js获取到cookie