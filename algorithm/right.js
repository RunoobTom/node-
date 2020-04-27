function right(num, arr) {
    for(let i = 0; i < num % arr.length; i++) {
        const temp = arr.pop();
        arr.unshift(temp);
    }

    console.log(arr);
}

right(200, [1, 2, 3, 4]);


function anotherRight(num, arr) {
    for(let i = 0; i < arr.length - (num % arr.length); i++) {
        const temp = arr.shift();
        arr.push(temp);
    }

    console.log(arr);
}

anotherRight(200, [1, 2, 3, 4]);

function arraySplice(num, arr) {
    
}