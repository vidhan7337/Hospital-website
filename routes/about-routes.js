const express = require('express');
const router = express.Router();
const { check } = require("express-validator");

const aboutControllers = require("../controllers/about-controllers");
 
router.get("/:id", aboutControllers.getAbout);

router.post("/",
            [
                check('about').not().isEmpty(),
                check('image').not().isEmpty(),
                check('point1').not().isEmpty(),
                check('point2').not().isEmpty(),
                check('point3').not().isEmpty(),
                check('point4').not().isEmpty()
            ]
            ,aboutControllers.postAbout);

router.patch("/", aboutControllers.patchAbout);


module.exports = router;