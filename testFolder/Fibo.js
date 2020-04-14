function myFibo(times) {
    var arr = [];

    for(let i = 0; i < times; i++) {
        var array = [];

        for(let a = i;a>-1;a--) {
            array.push(1);
        }
        array.forEach((item, index) => {
            if(i === 0) {
                array[index] = 1;
            } else if(index === 0) {
                array[index] = 1;
            } else if(index === i) {
                array[index] = 1;
            } else {
                array[index] = arr[i - 1][index - 1] + arr[i - 1][index]
            }
        });
        console.log('array'+i, array)
        arr.push(array);
    };
};

myFibo(10);

