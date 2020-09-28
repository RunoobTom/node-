// 订阅者发布者模式 

const { eventNames } = require("superagent");

class MyEmitter {
    constructor() {
        this.eventList = {};
    }

    on(eventName, fn) {
        if(this.eventList[eventName]) {
            this.eventList[eventName].push(fn);
        } else {
            this.eventList[eventName] = [fn];
        }
    }

    emit(eventName) {
        if(this.eventList[eventName]) {
            this.eventList[eventName].forEach(item => item())
        }
    }
}

const event = new MyEmitter();
event.on('hello', () => {
    console.log('hello')
});

event.on('hello', () => {
    setTimeout(() => {
        console.log(2)
    },1000)
})

setTimeout(() => {
    event.emit('hello')
}, 2000)