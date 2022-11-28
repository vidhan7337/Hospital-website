const express = require('express');
const router = express.Router();
const { check } = require("express-validator");

const contactControllers = require("../controllers/contact-controllers");
 
router.get("/:id", contactControllers.getContact);

router.post("/",
            [
                check('phone1').not().isEmpty(),
                check('email1').isEmail(),
                check('address1').not().isEmpty()
            ]
            ,contactControllers.postContact);

router.patch("/", contactControllers.patchContact);


module.exports = router;