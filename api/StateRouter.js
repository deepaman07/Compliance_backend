// importing routers
const StateController = require("../controllers/StateController");
const tokenAuthentication = require("../middleWare/tokenAuthentication");
// router
const router = require("express").Router();

// use routers
router.post("/readstates", tokenAuthentication, StateController.ReadallStates);

router.get("/readcity", tokenAuthentication, StateController.ReadallCity);

router.get(
  "/readcity/:id",
  tokenAuthentication,
  StateController.ReadSpecificCity
);

module.exports = router;
