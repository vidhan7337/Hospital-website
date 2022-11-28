const express = require('express');
const router = express.Router();
const { check } = require("express-validator");

const departmentControllers = require("../controllers/department-controllers");
 
router.get("/:id", departmentControllers.getDepartment);

router.post("/",
            [
                check('name').not().isEmpty(),
                check('backgroundImage').not().isEmpty(),
                check('image1').not().isEmpty(),
                check('description1').not().isEmpty()
            ]
            ,departmentControllers.postDepartment);

router.patch("/", departmentControllers.patchDepartment);

router.delete("/:id", departmentControllers.deleteDepartment);

module.exports = router;