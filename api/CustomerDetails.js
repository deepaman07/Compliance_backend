const router = require("express").Router();
const { celebrate } = require("celebrate");

const CustomerDetails = require("../controllers/CustomerDetails");
const CustomerDetailsValidator = require("../validations/CutomerDetails");
const asyncMiddleware = require("../middleWare/asyncMiddleware");

router.post(
  "/readall",
  // celebrate({ body: CustomerDetailsValidator.insertBasicInfo_POST_Schema }),
  asyncMiddleware(CustomerDetails.ReadBasicInfo)
);
router.post(
  "/basicinfo",
  celebrate({ body: CustomerDetailsValidator.insertBasicInfo_POST_Schema }),
  asyncMiddleware(CustomerDetails.CreateBasicInfo)
);
router.post(
  "/bankinfo",
  celebrate({ body: CustomerDetailsValidator.insertBankInfo_POST_Schema }),
  asyncMiddleware(CustomerDetails.BankInfo)
);
router.post(
  "/kycinfo",
  celebrate({ body: CustomerDetailsValidator.insertKycInfo_POST_Schema }),
  asyncMiddleware(CustomerDetails.KycInfo)
);
router.post("/kycdocuments", asyncMiddleware(CustomerDetails.KycDocuments));
router.get(`/kycinfo/:id/:docname`, asyncMiddleware(CustomerDetails.GetKycDoc));

module.exports = router;
