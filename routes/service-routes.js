const express = require('express');
const router = express.Router();
const { check } = require("express-validator");

const serviceControllers = require("../controllers/service-controllers");
 
router.get("/:id", serviceControllers.getService);

router.post("/",
            [
                check('name').not().isEmpty(),
                check('description').not().isEmpty(),
                check('icon').not().isEmpty()
            ]
            ,serviceControllers.postService);

router.patch("/", serviceControllers.patchService);

router.delete("/:id", serviceControllers.deleteService);

router.get("/",serviceControllers.getAllService);

module.exports = router;