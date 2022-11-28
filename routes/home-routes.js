const express = require('express');
const router = express.Router();
const { check } = require("express-validator");

const homeControllers = require("../controllers/home-controllers");
 
router.get("/:id", homeControllers.getHome);

router.post("/",
            [
                check('healthyLiver').not().isEmpty(),
                check('fattyLiver').not().isEmpty(),
                check('cirrhoticLiver').not().isEmpty(),
                check('patientBeds').not().isEmpty(),
                check('happyPatients').not().isEmpty(),
                check('staff').not().isEmpty(),
                check('surgeries').not().isEmpty(),
                check('doctor1Name').not().isEmpty(),
                check('doctor1Description').not().isEmpty(),
                check('doctor1imgae').not().isEmpty(),
                check('doctor2Name').not().isEmpty(),
                check('doctor2Description').not().isEmpty(),
                check('doctor2imgae').not().isEmpty(),
                check('doctor3Name').not().isEmpty(),
                check('doctor3Description').not().isEmpty(),
                check('doctor3imgae').not().isEmpty()
            ]
            ,homeControllers.postHome);

router.patch("/", homeControllers.patchHome);


module.exports = router;