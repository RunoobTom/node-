# vue中的Object.defineProperty
#### 为什么vue里可以用this.number访问data里的number属性
原来vue使用Object.defineProperty把data数据挂在vue实例上，实际存储在实例的_data上
props同理


```
// proxy(vm, `_props/_data`, key)
export function proxy (target: Object, sourceKey: string, key: string) {
    sharedPropertyDefinition.get = function proxyGetter () {
        return this[sourceKey][key]
    }
    sharedPropertyDefinition.set = function proxySetter (val) {
        this[sourceKey][key] = val
    }
    Object.defineProperty(target, key, sharedPropertyDefinition)
}
```

那怎么使用Object.defineProperty呢

# Object.defineProperty用法及api

## 语法
```
Object.defineProperty(obj, prop, descriptor)
```
## 参数 [mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

- *obj* 要定义属性的对象
- *prop* 要定义或修改的属性的名称或 Symbol
- *descriptor* 要定义或修改的属性描述符

#### 
举个例子
```
const object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 42,
  enumerable: true,
  writable: false // property1不可赋值
});

object1.property1 = 77;
// throws an error in strict mode

console.log(object1.property1);
// expected output: 42
```
这就实现了拥有默认值且不可改变的属性property1
# Object.defineProperty在vue里还做了什么
## 监听state状态变化，收集依赖并且通知更新

```
// 源码位置：src/core/observer/index.js

/**
 * Observer类会通过递归的方式把一个对象的所有属性都转化成可观测对象
 */
export class Observer {
  constructor (value) {
    this.value = value
    // 给value新增一个__ob__属性，值为该value的Observer实例
    // 相当于为value打上标记，表示它已经被转化成响应式了，避免重复操作
    def(value,'__ob__',this)
    if (Array.isArray(value)) {
      // 当value为数组时的逻辑
      // ...
    } else {
      this.walk(value)
    }
  }

  walk (obj: Object) {
    const keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
      defineReactive(obj, keys[i])
    }
  }
}
/**
 * 使一个对象转化成可观测对象
 * @param { Object } obj 对象
 * @param { String } key 对象的key
 * @param { Any } val 对象的某个key的值
 */
function defineReactive (obj,key,val) {
  // 如果只传了obj和key，那么val = obj[key]
  if (arguments.length === 2) {
    val = obj[key]
  }
  if(typeof val === 'object'){
      new Observer(val)
  }
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get(){
      console.log(`${key}属性被读取了`);
      return val;
    },
    set(newVal){
      if(val === newVal){
          return
      }
      console.log(`${key}属性被修改了`);
      val = newVal;
    }
  })
}
```

## 双向绑定
# Object.defineProperty还可以用来作什么酷炫的事情