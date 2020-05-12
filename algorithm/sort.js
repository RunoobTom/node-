// 排序

// 1.冒泡排序
function bubble(target) {
    const arr = [...target]

    for(let i = 0; i < arr.length - 1; i++) {
        // 加入标志位 如果没有变化就停止排序
        let tag = true;
        for(let j = 0; j < arr.length - 1; j++) {
            let temp = arr[j];
            console.log(temp)
            if(arr[j] > arr[j+1]) {
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                tag = false;
            }
        }

        if(tag) break;
    };
    console.log(arr)
    return arr;
}
// bubble([1, 2, 3, 4])

// 每轮正反两次冒泡，排除一个最大最小值 下次不对其排序  或者只正向排序 每次删除最后一个数字的排序资格
// 不需正反两次冒泡也可， 每次排除最后一个为最大值
function godBubble(target) {
    const arr = [...target];
    const length = arr.length;

    for(let i = 0; i < length - 1; i++) {
        let tag = true;

        for(let j = i; j < length - 1 - i; j++) {
            let temp = arr[j];
            console.log(temp)
            if(arr[j] > arr[j+1]) {
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                tag = false;
            }
        };

        for(let j = length - 1 - i; j > i; j--) {
            let temp = arr[j];
            console.log(temp);

            if(arr[j] < arr[j - 1]) {
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
                tag = false;
            }
        } 
        console.log('i ', i)
        if(tag) break; 
    }
    console.log(arr);
    return arr;

};

godBubble([4,3,6,4,2,3,7]);

// 2.快排
function quickSort(arr) {
    if(arr.length <= 1) return arr;

    const temp = arr[0];
    let left = [], right = [];

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] <= temp) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return quickSort(left).concat(temp, quickSort(right));
}

console.log(quickSort([10,3,11,3,4,2,8,20]));