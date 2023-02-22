const router = require("express").Router();
const EmploymentType = require("./../controllers/EmploymentType");

router.get("/", EmploymentType.getEmploymentTypes);
module.exports = router;
