const express = require('express');
const router = express.Router();
const { check } = require("express-validator");

const NeuroControllers = require("../controllers/neuro-controllers");
 
router.get("/:id", NeuroControllers.getNeuro);

router.post("/",
            NeuroControllers.postNeuro);

router.patch("/", NeuroControllers.patchNeuro);


module.exports = router;