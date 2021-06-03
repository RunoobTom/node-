/*
 * @Author: zhaoqian.tang
 * @Date: 2021-06-02 22:18:31
 * @LastEditTime: 2021-06-03 10:59:03
 * @LastEditors: your name
 * @Description: 订阅发布模式 off 停止监听某个事件
 */

 // todo 和订阅者模式有什么区别

class Emitter {
    constructor() {
        this.eventList = {}
    }

    on(eventType, fn) {
        if(!this.eventList[eventType]) {
            // 该事件未注册
            this.eventList[eventType] = [fn]
        } else {
            // 已注册
            this.eventList[eventType].push(fn)
        }
    }

    emit(eventType, ...args) {
        // 执行
        if(this.eventList[eventType]) {
            this.eventList[eventType].forEach(listener => {
                listener.call(this, args)
            })
        }
    }

    off(eventType, fn) {
        // 取消监听某事件的某个回调
        const event = this.eventList
        console.log('执行off')

        if(event[eventType]) {
            // 除去符合off条件的回调
            event[eventType] = event[eventType].filter(item => (item !== fn && item.onceFn !== fn))
        }
    }

    once(eventType, fn) {
        console.log('执行once')
        // 执行一次后删除
        // 为了保持和on方法一致，once传入的也为自定义的方法
        function onceFuc() {
            // 执行callback
            // todo 为啥这地方不需要绑定this  噢 在emit那个地方做过了
            fn(arguments)
            this.off(eventType, onceFuc)
        }

        onceFuc.onceFn = fn
        this.on(eventType, onceFuc)
    }
}


const ev = new Emitter()


ev.on('hhh', (a) => {
    console.log('1    ', 12123231)
})

ev.on('hhh', () => {
    console.log('2    ', 123123)
})

ev.once('hhh', (...aabc) => {
    console.log('once', aabc)
})

ev.emit('hhh', 1 , 2, 3, 4)


setTimeout(() => {
    console.log('第二次')
    ev.emit('hhh', 1 , 2, 3, 4)
}, 1000)
