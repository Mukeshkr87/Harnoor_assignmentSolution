const express = require('express')
const cors = require('cors')
const app = express();
app.use(cors());
app.get('/calSi',(req,res)=>{
    try{
        const principal = parseInt(req.query.p);
        const rate = parseInt(req.query.r);
        const time = parseInt(req.query.t);
        const ia = principal*rate*time;
        const amount = principal+ia;
        res.status(201).json({
            Intrest:ia,
            amount:amount
        })
    }catch(err){
        return res.err;
    }

})
app.listen(3000,()=>{
    console.log("Listening at port 3000");
})