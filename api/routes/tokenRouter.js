// importing routers
const tokenController = require("./../../controllers/userToken");

// router
const router = require("express").Router();

// use routers
router.post("/login", tokenController.register);

router.put("/logout/:id", tokenController.update);

module.exports = router;