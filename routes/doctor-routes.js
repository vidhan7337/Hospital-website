const express = require('express');
const router = express.Router();
const { check } = require("express-validator");

const doctorControllers = require("../controllers/doctor-controllers");
 
router.get("/:id", doctorControllers.getDoctor);

router.post("/",
            [
                check('name').not().isEmpty(),
                check('description').not().isEmpty()
            ]
            ,doctorControllers.postDoctor);

router.patch("/", doctorControllers.patchDoctor);

router.delete("/:id", doctorControllers.deleteDoctor);

router.get("/",doctorControllers.getAllDoctor);

module.exports = router;