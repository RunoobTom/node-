<!--
 * @Author: your name
 * @Date: 2020-12-23 19:06:51
 * @LastEditTime: 2021-05-24 20:28:04
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /node-tips/record/eventTarget.md
-->

### target和currentTarget的区别

1.target指向触发事件的元素
2.currentTarget指向监听事件的元素

<ul eventListener>
    <li></li>
</ul>

点击li，target指向li，触发父元素ul的事件监听，currenTarget指向ul

tips: currentTarget在chrome控制台显示null，但是单独打印可以展示当前冒泡到的dom