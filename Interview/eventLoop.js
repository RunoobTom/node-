// x信 面试题

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
                    Promise.resolve().then(()=> {console.log(2); 
                    setTimeout(()=> console.log(3)); 
                    // 宏3
                    Promise.resolve().then(()=> console.log(4));
                    Promise.resolve().then(()=> console.log(5)).then(()=> console.log(6)); 
                    Promise.resolve().then(()=> console.log(7)); 
                    setTimeout(()=>console.log(8));
                    // 宏4
                })
            })
        }
)    
console.log(9);