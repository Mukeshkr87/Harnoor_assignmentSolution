const { Router } = require("express");
const router = Router();
const {User, Course} = require('../db/index.js')
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    User.create({
        username,
        password
    }).then(()=>{
        res.status(201).json({
            message: 'User created successfully'
        })
    })
});

router.post('/signin', async (req, res) => {});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const allCourses = await Course.find({
    })
    console.log(allCourses);
    res.json({
        courses:allCourses
    });
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;
    await User.updateOne({
        username:username
    },{
        '$push':{
            purchasedCourse: courseId
        }
    })
    res.json({
        msg:"Purchase Completed!"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username;
    const password = req.headers.password;
    const myCourse = await User.findOne({username,password});
    console.log(myCourse.purchasedCourse)
    const allCourse = await Course.find({
        _id: {
            "$in" : myCourse.purchasedCourse
        }
    });
    res.json({
        course:allCourse
    })
});

module.exports = router