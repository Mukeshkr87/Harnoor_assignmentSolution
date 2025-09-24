const {User} = require('../db/index.js')
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;
    User.findOne({
        username,
        password
    }).then((val)=>{
        if(val){
            next();
        }else{
            res.status(404).json({
                message: "Invalid user input"
            })
        }
    })

}

module.exports = userMiddleware;