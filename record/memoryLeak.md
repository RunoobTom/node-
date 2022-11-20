<!--
 * @Author: zhaoqian.tang
 * @Date: 2021-07-13 16:40:21
 * @Desc: 对于内存泄露的笔记
-->
参考https://juejin.cn/post/6984188410659340324?share_token=4679620d-bca4-490b-a647-53c2c99b1894

`GC`:garbage collect 垃圾回收

## 不正当的闭包
```javascript
function fn2(){
  let test = 'isboyjc'
  return function(){
    console.log(test)
    return test
  }
}
let fn2Child = fn2
fn2Child()


```

## 隐式全局变量
```javascript
function fn(){
  // 没有声明从而制造了隐式全局变量test1
  test1 = 'isboyjc1'
  
  // 函数内部this指向window，制造了隐式全局变量test2
  this.test2 = 'isboyjc2'
}
fn()
```

## 游离dom引用
```html
<div id="root">
  <ul id="ul">
    <li id="li3"></li>
    <li></li>
  </ul>
</div>
<script>
  let root = document.querySelector('#root')
  let ul = document.querySelector('#ul')
  let li3 = document.querySelector('#li3')
  
  // 由于ul变量存在，整个ul及其子元素都不能GC
  root.removeChild(ul)
  
  // 虽置空了ul变量，但由于li3变量引用ul的子节点，所以ul元素依然不能被GC
  ul = null
  
  // 已无变量引用，此时可以GC
  li3 = null
</script>

```

## 遗忘的定时器
```javascript
// 获取数据
let someResource = getData()
setInterval(() => {
  const node = document.getElementById('Node')
	if(node) {
    node.innerHTML = JSON.stringify(someResource))
	}
}, 1000)

```

## 遗忘的事件监听器

## 遗忘的事件监听器

## 遗忘的Map、Set对象
- 当使用 ```Map``` 或 ```Set``` 存储对象时，同 Object 一致都是强引用，如果不将其主动清除引用，其同样会造成内存不自动进行回收。
- 如果使用 ```Map``` ，对于键为对象的情况，可以采用 ```WeakMap```，```WeakMap``` 对象同样用来保存键值对，对于键是弱引用（注：WeakMap 只对于键是弱引用），且必须为一个对象，而值可以是任意的对象或者原始值，由于是对于对象的弱引用，不会干扰 Js 的垃圾回收。
- 如果需要使用 ```Set``` 引用对象，可以采用 ```WeakSet```，WeakSet 对象允许存储对象弱引用的唯一值，WeakSet 对象中的值同样不会重复，且只能保存对象的弱引用，同样由于是对于对象的弱引用，不会干扰 Js 的垃圾回收。
- 这里可能需要简单介绍下，谈弱引用，我们先来说```强引用```，之前我们说 JS 的垃圾回收机制是如果我们持有对一个对象的引用，那么这个对象就不会被垃圾回收，这里的引用，指的就是 强引用 ，而弱引用就是一个对象若只被弱引用所引用，则被认为是不可访问（或弱可访问）的，因此可能在任何时刻被回收。
```javascript
// obj是一个强引用，对象存于内存，可用
let obj = {id: 1}

// 重写obj引用
obj = null 
// 对象从内存移除，回收 {id: 1} 对象

```

```javascript
let obj = {id: 1}
let user = {info: obj}
let set = new Set([obj])
let map = new Map([[obj, 'hahaha']])

// 重写obj
obj = null 

console.log(user.info) // {id: 1}
console.log(set)
console.log(map)

```
此例我们重写 obj 以后，{id: 1} 依然会存在于内存中，因为 user 对象以及后面的 set/map 都强引用了它，Set/Map、对象、数组对象等都是强引用，所以我们仍然可以获取到 {id: 1} ，我们想要清除那就只能重写所有引用将其置空了。
接下来我们看 WeakMap 以及 WeakSet：
```javascript
let obj = {id: 1}
let weakSet = new WeakSet([obj])
let weakMap = new WeakMap([[obj, 'hahaha']])

// 重写obj引用
obj = null

// {id: 1} 将在下一次 GC 中从内存中删除

```
如上所示，使用了 WeakMap 以及 WeakSet 即为弱引用，将 obj 引用置为 null 后，对象 {id: 1} 将在下一次 GC 中被清理出内存。