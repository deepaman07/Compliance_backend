// router
const router = require("express").Router();
const { celebrate } = require("celebrate");
const ProductValidator = require("../validations/ProductValidator");

// importing routers
const ProductController = require("../controllers/ProductController");
const tokenAuthentication = require("../middleWare/tokenAuthentication");

// router

// use routers
router.post("/readproducts", ProductController.ReadProducts);

router.post("/readsubproducts/:id", ProductController.ReadSubProducts);

router.post(
  "/readallfinancialservices/:customerid",
  tokenAuthentication,
  ProductController.ReadFinancialServiceFincode
);

router.post(
  "/readfinancialservices/:subproductid/:customerid",
  tokenAuthentication,
  ProductController.ReadFinancialService
);
router.post(
  "/readfinancialservices",
  tokenAuthentication,
  ProductController.ReadFinancialServiceAll
);
router.post(
  "/insertfinancialservices",
  tokenAuthentication,
  celebrate({ body: ProductValidator.insertFinancialServices_POST_Schema }),
  ProductController.InsertFinancialService
);
router.post("/dashboard", tokenAuthentication, ProductController.Dashboard);
router.post("/dashboardall", tokenAuthentication, ProductController.DashboardAll);

module.exports = router;
