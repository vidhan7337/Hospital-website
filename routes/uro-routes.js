const express = require('express');
const router = express.Router();
const { check } = require("express-validator");

const UroControllers = require("../controllers/uro-controllers");
 
router.get("/:id", UroControllers.getUro);

router.post("/",
            UroControllers.postUro);

router.patch("/", UroControllers.patchUro);


module.exports = router;