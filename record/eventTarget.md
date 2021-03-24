<!--
 * @Author: your name
 * @Date: 2020-12-23 19:06:51
 * @LastEditTime: 2020-12-23 19:09:11
 * @LastEditors: Please set LastEditors
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