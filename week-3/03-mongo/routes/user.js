const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {Course,User} = require('../db/index.js')

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    User.create({
        username,
        password
    }).then(res.json({
        message: 'User created successfully'
    }))
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const username = req.headers.username;
    const password = req.headers.password;
    const user = User.findOne({
        username,
        password
    }).then((val)=>{
        if(val){
            console.log(val.purchasedCourse)
            res.json({
                msg:"Success"
            })
        }else{
            res.status(404).json({
                message:"User not found"
            })
        }
    })
});

router.post('/courses/:courseId', userMiddleware,async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;
    await User.updateOne({
        username:username,
    },{
        '$push':{
            purchasedCourse:courseId
        }
    });
    res.json({
        message:"Course suncessfully purchased"
    })
    
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username;
    const password = req.headers.password;
    const userInfo = await User.findOne({
        username:username,
        password:password
    })
    // console.log(userInfo)
    const allCourse = await Course.find({
        _id: {$in:userInfo.purchasedCourse}
    })
    res.json({
        courses: allCourse
    })
});

module.exports = router