const express = require('express');
const router = express.Router();
const { check } = require("express-validator");

const OrthoControllers = require("../controllers/ortho-controllers");
 
router.get("/:id", OrthoControllers.getOrtho);

router.post("/",
            OrthoControllers.postOrtho);

router.patch("/", OrthoControllers.patchOrtho);


module.exports = router;