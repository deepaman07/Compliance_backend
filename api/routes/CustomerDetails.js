const express = require("express");
const { celebrate } = require("celebrate");
const CustomerDetails = require("./../../controllers/CustomerDetails");
const CustomerDetailsValidator = require("./../../validations/CutomerDetails");
const asyncMiddleware = require("./../../middleWare/asyncMiddleware");
const router = express.Router();
router.post(
  "/BasicInfo",
  celebrate({ body: CustomerDetailsValidator.insertBasicInfo_POST_Schema }),
  asyncMiddleware(CustomerDetails.BasicInfo)
);
router.post(
  "/BankInfo",
  celebrate({ body: CustomerDetailsValidator.insertBankInfo_POST_Schema }),
  asyncMiddleware(CustomerDetails.BankInfo)
);
router.post(
  "/KycInfo",
  celebrate({ body: CustomerDetailsValidator.insertKycInfo_POST_Schema }),
  asyncMiddleware(CustomerDetails.KycInfo)
);
router.post("/KycDocuments", asyncMiddleware(CustomerDetails.KycDocuments));
router.get(`/KycDocs/:id/:docname`, asyncMiddleware(CustomerDetails.GetKycDoc));
module.exports = router;
