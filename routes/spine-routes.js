const express = require('express');
const router = express.Router();
const { check } = require("express-validator");

const SpineControllers = require("../controllers/spine-controllers");
 
router.get("/:id", SpineControllers.getSpine);

router.post("/",
            SpineControllers.postSpine);

router.patch("/", SpineControllers.patchSpine);


module.exports = router;