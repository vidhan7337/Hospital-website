const express = require('express');
const router = express.Router();
const { check } = require("express-validator");

const expertiseControllers = require("../controllers/expertise-controllers");
 
router.get("/:id", expertiseControllers.getExpertise);

router.post("/",
            [
                check('image').not().isEmpty(),
                check('name1').not().isEmpty(),
                check('description1').not().isEmpty(),
                check('icon1').not().isEmpty(),
                check('name2').not().isEmpty(),
                check('description2').not().isEmpty(),
                check('icon2').not().isEmpty(),
                check('name3').not().isEmpty(),
                check('description3').not().isEmpty(),
                check('icon3').not().isEmpty(),
                check('name4').not().isEmpty(),
                check('description4').not().isEmpty(),
                check('icon4').not().isEmpty(),
            ]
            ,expertiseControllers.postExpertise);

router.patch("/", expertiseControllers.patchExpertise);


module.exports = router;