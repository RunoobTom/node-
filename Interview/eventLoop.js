// x信 面试题
// 答案 1 9 0 2 4 5 7 6 3 8

setTimeout(()=> { console.log(0) }); 
// 宏1
    
new Promise(
    resolve => 
        {
            console.log(1);
            
            // 宏2
            setTimeout( 
                ()=> {
                    resolve(); 
                    Promise.resolve().then(()=> {
                        console.log(2); 
                        setTimeout(()=> console.log(3)); // 宏3
                        Promise.resolve().then(()=> console.log(4)); // 微1
                        Promise.resolve().then(()=> console.log(5)) // 微2
                            .then(()=> console.log(6));  // 微4插队
                        Promise.resolve().then(()=> console.log(7));  // 微3
                        setTimeout(()=>console.log(8)); // 宏4
                    })
            })
        }
)    
console.log(9);