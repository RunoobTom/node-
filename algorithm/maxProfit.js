function maxPro(arr) {
    let min = arr[0];
    let maxP = 0;
    let max = arr[0];
    let minIndex, maxIndex;

    arr.forEach((item, index) => {
        if(item - min > maxP) {
            maxP = item -min;
            max = item;
            maxIndex = index;
        }

        if(item < min) {
            min = item;
            minIndex = index;
        }
    })

    console.log(min, minIndex, maxP, max, maxIndex)
}

maxPro([0, 2, 3, 1, 2, 5, 3, 4, 8, -1, 10, 4, 9, 12])