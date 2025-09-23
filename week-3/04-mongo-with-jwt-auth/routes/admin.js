const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin,Course } = require("../db/index");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    Admin.create({
        username:username,
        password:password
    }).then(()=>{
        res.json({
          message: 'Admin created successfully'
        })
    })
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const image = req.body.image;
    const info = await Course.create({
        title,
        discription:description,
        price,
        image
    })
    console.log(info);
    res.json({
        msg: 'Course created Sucessfully', courseId: info._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const allCourses = await Course.find({
    })
    console.log(allCourses);
    res.json({
        courses: allCourses
    })
});

module.exports = router;