const fs = require('fs');
let demo = fs.readFileSync('./text-fileCleanser.txt','utf-8',(error,data)=>{
    if(error){
        throw new Error("Error while reading file");
    }
    
    
})
demo = demo.replace(/\s+/g,' ');

console.log(demo);

fs.writeFileSync('./text-fileCleanser.txt',demo,'utf-8')
console.log("Done SucessFully....")
