const express = require('express');
const router = express.Router();
const { check } = require("express-validator");

const departmentOverviewControllers = require("../controllers/departmentOverview-controllers");
 
router.get("/:id", departmentOverviewControllers.getDepartmentOverview);

router.post("/",
            [
                check('name').not().isEmpty(),
                check('description').not().isEmpty()
            ]
            ,departmentOverviewControllers.postDepartmentOverview);

router.patch("/", departmentOverviewControllers.patchDepartmentOverview);

router.delete("/:id", departmentOverviewControllers.deleteDepartmentOverview);
router.get("/", departmentOverviewControllers.getAllDept);
module.exports = router;