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
    console.log('冒泡', arr);
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
console.log('快排' ,quickSort([10,3,11,3,4,2,8,20]));

// 优化在于不创建新的数组 在原数组上进行改变
function promoteQuickSort(arr, left, right) {          //这个left和right代表分区后“新数组”的区间下标，因为这里没有新开数组，所以需要left/right来确认新数组的位置
    if (left < right) {
        let pos = left - 1                      //pos即“被置换的位置”，第一趟为-1
        for(let i = left; i <= right; i++) {    //循环遍历数组，置换元素
            let pivot = arr[right]              //选取数组最后一位作为基准数，
            if(arr[i] <= pivot) {               //若小于等于基准数，pos++，并置换元素, 这里使用小于等于而不是小于, 其实是为了避免因为重复数据而进入死循环
                pos++
                let temp = arr[pos]
                arr[pos] = arr[i]
                arr[i] = temp
            }
        }
        //一趟排序完成后，pos位置即基准数的位置，以pos的位置分割数组
        quickSort(arr, left, pos - 1)        
        quickSort(arr, pos + 1, right)
    }
    return arr      //数组只包含1或0个元素时(即left>=right)，递归终止
}


console.log('优化快排', promoteQuickSort([1,2,3,4,2,3,20,4,5,-2,-4,5,-100], 0, 11));