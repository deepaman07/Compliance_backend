// importing routers
<<<<<<< HEAD:api/routes/tokenRouter.js
const tokenController = require("./../../controllers/userToken");

=======
const tokenController = require("../controllers/userTokenController");
// const authenticateUser = require("../middleWare/authenticateUser");
>>>>>>> origin/server_aman_V1:api/tokenRouter.js
// router
const router = require("express").Router();

// use routers
<<<<<<< HEAD:api/routes/tokenRouter.js
router.post("/login", tokenController.register);

router.put("/logout/:id", tokenController.update);

module.exports = router;
=======
router.post("/login", tokenController.Register);

router.put("/logout/:id", tokenController.Logout);

module.exports = router;
>>>>>>> origin/server_aman_V1:api/tokenRouter.js
