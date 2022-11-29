const express = require('express');
const router = express.Router();
const { check } = require("express-validator");

const CriticalControllers = require("../controllers/critical-controllers");
 
router.get("/:id", CriticalControllers.getCritical);

router.post("/",
            
            CriticalControllers.postCritical);

router.patch("/", CriticalControllers.patchCritical);


module.exports = router;