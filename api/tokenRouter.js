// importing routers
const tokenController = require("../controllers/userTokenController");
// const authenticateUser = require("../middleWare/authenticateUser");
// router
const router = require("express").Router();

// use routers
router.post("/login", tokenController.Register);

router.put("/logout/:id", tokenController.Logout);

router.post("/fincode", tokenController.FinCode);
module.exports = router;
