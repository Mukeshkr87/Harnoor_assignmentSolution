    // function counter(n){//Using set and clear interval
    //     let i = 1;
    //     let timer = setInterval(()=>{
    //         console.log(i++);
    //         if(i>n){
    //         clearInterval(timer);
    //     }
    //     },1000)
        
    // }
    // counter(3);



    function timer(n){//Through setTimeout
        setTimeout(() => {
            console.log(`Timer finished after ${n} seconds`);
        }, 1000*n);
}
timer(4);
