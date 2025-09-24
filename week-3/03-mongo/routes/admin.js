const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const   router = Router();
const {Admin,User,Course} = require('../db/index.js')

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    Admin.create({
        username:username,
        password:password
    }).then(
        res.status(201).json({
            msg:"Admin Sucessfully created"
        })
    )
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const {title,description,price,image} = req.body;
    try{
        const thisCouse = await Course.create({
        title,
        description,
        price,
        image
    });
    
    res.json({
        message: 'Course created successfully', 
        courseId:thisCouse._id 
        });
    }
    catch (error){
        res.status(500).json({
            message:"Error while creating course",
            error:error.message
        });
    }
    
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const allCourses = await Course.findOne({});
    console.log(allCourses);
    res.json({
        courses:allCourses
    })
});

module.exports = router;