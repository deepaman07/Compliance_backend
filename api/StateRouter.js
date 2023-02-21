// importing routers
const StateController = require("../controllers/StateController");
// router
const router = require("express").Router();

// use routers
router.post("/readstates", StateController.ReadallStates);

router.get("/readcity", StateController.ReadallCity);

router.get("/readcity/:id", StateController.ReadSpecificCity);

module.exports = router;
