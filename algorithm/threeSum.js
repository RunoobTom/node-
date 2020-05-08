// 数组中三数为0的所有组合
// 还没完成
function deWeight(arr) {
    const target = [];

    arr.forEach((item, index) => {
        if(target.indexOf(item) === -1) target.push(item)
    });
    return target;
};


function threeSum(arr) {
    const sortedArr = arr.sort((a, b) => a -b);
    const targetArr = [];

    const firstDeWeightArr = deWeight(sortedArr);
    firstDeWeightArr.forEach((item, index) => {
        const secondDeweightArr = deWeight(sortedArr.slice(index, 1));

        const a = sortedArr.slice(index, 1);

        console.log('item', item, secondDeweightArr)
        secondDeweightArr.forEach((secondItem, secondIndex) => {
            console.log('second', secondItem)
            const newIndex = a.indexOf(secondItem);
            const b = deWeight(a.slice(newIndex, 1));
            const result = -(item + secondItem);
            console.log(item, secondItem, b.indexOf(result) > -1)
            if(b.indexOf(result) > -1) targetArr.push([item, secondItem, -item-secondItem])
        })
    });
    console.log(targetArr)
    return targetArr
}

threeSum([0, 0, -1, 3, -1, 2, 4, -2])

// deWeight([1,1,1,1,4,3,6]);