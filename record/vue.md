<!--
 * @Author: your name
 * @Date: 2020-09-29 15:49:19
 * @LastEditTime: 2021-01-07 15:26:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node-tips/record/vue.md
-->
#vue实例 把data里的数据存在_data字段里，访问this.data为undefined

为什么直接写this.message就能访问到data里的message变量
箭头函数的this的指向

initData函数：

真正的data初始化是这个函数，首先会从实例的$options中获取到data，判断data是函数还是对象，因为data可以是一个函数（组件），也可以是一个对象（根实例），如果是函数会执行getData方法，getData方法简单来说就是返回了data函数执行的结果（是一个对象）赋值给 data和 vm._data；如果是对象直接把data赋值给data和 vm._data；如果data不存在，把空对象赋值给 data和 vm._data；(vm._data 就是data中的数据对象) 


其实proxy函数很简单，通过 Object.defineProperty(target, key, sharedPropertyDefinition)，会把data中的数据代理转发到vue实例上了。

当我们通过vm.xxx 访问data中的数据时，实际上访问的是： this[sourceKey][key] , 也就是 vm. _data.[key]  ，而vm._data 在上边提到过，它正是data中的数据对象，所以，当我们通过 实例 访问data中的数据时，访问的是 this._data.xxx

```
    // proxy(vm, `_props`, key)
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


为什么组件内用this.message能获取到this.props里的message


# 模板编译
基本流程如图
![avatar](./模板流程图.png)