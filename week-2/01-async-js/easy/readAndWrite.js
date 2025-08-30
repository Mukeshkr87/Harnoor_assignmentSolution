// const fs = require('fs');
// fs.readFile('read.txt', 'utf-8', (error, data) => {

// if(error){
//     console.error("Error in reading file ",error);
//     return;
// }
// else{
//     console.log('File is added: ',data);
// }
// })

// for(let a  = 0;a<100000000;a++){
// }
// console.log("Done with the loop")
// setTimeout(()=>{

// },10000)
// console.log("Hello")
// //The above code is asnyc


const fs = require('fs');
let data = fs.readFileSync('read.txt','utf-8');//UTF is help to encode that file
data += ' Thanks File System Hello how are you';
try{
    fs.writeFileSync('output.txt',data,'utf-8')
}
catch{
    throw new Error("Error occur at file reading")
}
