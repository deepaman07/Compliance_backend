// importing routers
const ProductController = require("../controllers/ProductController");
const tokenAuthentication = require("../middleWare/tokenAuthentication");
// router
const router = require("express").Router();

// use routers
router.post("/readproducts", ProductController.ReadProducts);

router.post("/readsubproducts/:id", ProductController.ReadSubProducts);

router.post(
  "/readfinancialservices/:id/:customerID",
  tokenAuthentication,
  ProductController.ReadFinancialService
);
router.post(
  "/insertfinancialservices",
  tokenAuthentication,
  ProductController.InsertFinancialService
);

module.exports = router;
