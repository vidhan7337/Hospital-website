const express = require('express');
const router = express.Router();
const { check } = require("express-validator");

const GynaecControllers = require("../controllers/gynaec-controllers");
 
router.get("/:id", GynaecControllers.getGynaec);

router.post("/",
           GynaecControllers.postGynaec);

router.patch("/", GynaecControllers.patchGynaec);


module.exports = router;