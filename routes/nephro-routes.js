const express = require('express');
const router = express.Router();
const { check } = require("express-validator");

const NephroControllers = require("../controllers/nephro-controllers");
 
router.get("/:id", NephroControllers.getNephro);

router.post("/",
            NephroControllers.postNephro);

router.patch("/", NephroControllers.patchNephro);


module.exports = router;