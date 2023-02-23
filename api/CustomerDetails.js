const router = require("express").Router();
const { celebrate } = require("celebrate");

const CustomerDetails = require("../controllers/CustomerDetails");
const CustomerDetailsValidator = require("../validations/CutomerDetails");
const asyncMiddleware = require("../middleWare/asyncMiddleware");
const tokenAuthentication = require("../middleWare/tokenAuthentication");

router.post(
  "/getbasicinfo/:mobileNumber",
  // celebrate({ body: CustomerDetailsValidator.insertBasicInfo_POST_Schema }),
  asyncMiddleware(CustomerDetails.ReadBasicInfo)
);
router.post(
  "/getbankinfo/:id",
  tokenAuthentication,
  // celebrate({ body: CustomerDetailsValidator.insertBasicInfo_POST_Schema }),
  asyncMiddleware(CustomerDetails.ReadBankInfo)
);
router.post(
  "/getkycinfo/:id",
  tokenAuthentication,
  // celebrate({ body: CustomerDetailsValidator.insertBasicInfo_POST_Schema }),
  asyncMiddleware(CustomerDetails.ReadKYCInfo)
);
router.post(
  "/createbasicinfo",
  celebrate({ body: CustomerDetailsValidator.insertBasicInfo_POST_Schema }),
  asyncMiddleware(CustomerDetails.CreateBasicInfo)
);
router.post(
  "/updatebasicinfo",
  tokenAuthentication,
  celebrate({ body: CustomerDetailsValidator.insertBasicInfo_POST_Schema }),
  asyncMiddleware(CustomerDetails.UpdateBasicInfo)
);
router.post(
  "/bankinfo",
  tokenAuthentication,
  celebrate({ body: CustomerDetailsValidator.insertBankInfo_POST_Schema }),
  asyncMiddleware(CustomerDetails.BankInfo)
);
router.post(
  "/kycdocuments",
  tokenAuthentication,
  asyncMiddleware(CustomerDetails.KycDocuments)
);
router.get(
  `/kycinfo/:id/:docname`,
  tokenAuthentication,
  asyncMiddleware(CustomerDetails.GetKycDoc)
);

module.exports = router;
