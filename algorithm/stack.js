/*
 * @Author: zhaoqian.tang
 * @Date: 2021-09-09 16:27:26
 * @Desc: 
 */


// 两个堆栈实现队列先进先出功能
function CQueue() {
    this.stackA = []
    this.stackB = []
}

CQueue.prototype.appendTail = function(value) {
    this.stackA.push(value)
}

CQueue.prototype.deleteHead = function() {
    if(this.stackB.length > 0) {
        return this.stackB.pop()
    } else if(this.stackA.length === 0) {
        return -1
    } else {
        while(this.stackA.length > 0) {
            this.stackB.push(this.stackA.pop())
        }
        return this.stackB.pop()
    }
}

var cq = new CQueue()
console.log(
cq.appendTail('1'),
cq.appendTail('2'),
cq.appendTail('3'),
cq.appendTail('4'),
cq.deleteHead(),
cq.deleteHead(),
cq.deleteHead(),
cq.deleteHead(),
cq.deleteHead(),
cq.deleteHead(),
)



// 单调栈  注意点在于存储序列而不是数值本身，注意左右边界范围和极限情况
function stack(height) {
    let maxArea = 0;
    if (height.length <= 0)
        return 0;
    //从小到大的单调栈
    let stack = []
    //这一步是在求每次遇到不是单调递增的时候那个柱子的面积
    for (let i = 0; i < height.length; i++) {
        //如果栈不为空，且当前元素小于栈顶元素
        while (stack.length && height[i] <= height[stack[stack.length - 1]]) {
            // 当前所处位置
            let j = stack.pop();
            // 左边界 当前pop后，栈顶为左边界 其他都比我大
            let k = stack.length === 0 ? -1 : stack[stack.length - 1];
            // (右边界 - 左边界)*高度 我当前的位置j到i都比我大
            let curArea = (i - k - 1) * height[j];
            maxArea = Math.max(maxArea, curArea);
        }
        stack.push(i);
    }
    //求整个单调递增的面积
    while (stack.length) {
        let j = stack.pop();
        let k = stack.length === 0 ? -1 : stack[stack.length - 1];
        //当前的右边界就是数组长度
        let curArea = (height.length - k - 1) * height[j];
        maxArea = Math.max(maxArea, curArea);
    }
    return maxArea;
}