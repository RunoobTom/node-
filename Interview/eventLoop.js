// x信 面试题
// 答案 1 9 0 2 4 5 7 6 3 8

setTimeout(()=> { console.log(0) }); 
    
new Promise(
    resolve => 
        {
            console.log(1); 
            setTimeout( 
                ()=> {
                    resolve(); 
                    Promise.resolve().then(()=> {console.log(2); 
                    setTimeout(()=> console.log(3)); 
                    Promise.resolve().then(()=> console.log(4));
                    Promise.resolve().then(()=> console.log(5)).then(()=> console.log(6)); 
                    Promise.resolve().then(()=> console.log(7)); setTimeout(()=>console.log(8));
                })
            })
        }
)    
console.log(9);