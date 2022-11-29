const express = require('express');
const router = express.Router();
const { check } = require("express-validator");

const GastroControllers = require("../controllers/gastro-controllers");
 
router.get("/:id", GastroControllers.getGastro);

router.post("/",
            GastroControllers.postGastro);

router.patch("/", GastroControllers.patchGastro);


module.exports = router;