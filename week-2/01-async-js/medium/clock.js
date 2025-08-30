// Can you make it so that it updates every second, and shows time in the following formats - 
//  - HH:MM::SS (Eg. 13:45:23)
//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)
setInterval(()=>{
    let date = new Date().toLocaleString();
    console.log(date)
},1000)
