function testPromise(delay, name) {
    return new Promise((a, b) => {
        setTimeout(() => {
            a(name)
        }, delay);
    })
}

async function forTest() {
    const a = await testPromise(1000, 'a');
    console.log('1000', a);

    const b = await testPromise(2000, 'b');
    console.log('2000', b)
};

// forTest();


function abc() {
    this.a = 123;

    return () => {
        console.log('ss', this, arguments)
    }
}

abc(1, 2,3)(4,5)