// importing routers
const ProductController = require("../controllers/ProductController");
// router
const router = require("express").Router();

// use routers
router.post("/readproducts", ProductController.ReadProducts);

router.post("/readsubproducts/:id", ProductController.ReadSubProducts);

router.post(
  "/readfinancialservices/:id",
  ProductController.ReadFinancialService
);
router.post(
  "/insertfinancialservices",
  ProductController.InsertFinancialService
);

module.exports = router;
