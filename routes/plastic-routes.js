const express = require('express');
const router = express.Router();
const { check } = require("express-validator");

const PlasticControllers = require("../controllers/plastic-controllers");
 
router.get("/:id", PlasticControllers.getPlastic);

router.post("/",
            PlasticControllers.postPlastic);

router.patch("/", PlasticControllers.patchPlastic);


module.exports = router;