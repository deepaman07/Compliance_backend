const router = require("express").Router();
const { celebrate } = require("celebrate");

const OtpValidation = require("../validations/OtpValidation");
const OtpController = require("../controllers/OtpController");
const asyncMiddleware = require("../middleWare/asyncMiddleware");

router.post(
  "/otpGeneration",
  celebrate({ body: OtpValidation.otpGenerator_POST_Schema }),
  asyncMiddleware(OtpController.OtpGenerator)
);
router.post(
  "/otpVerification",
  celebrate({ body: OtpValidation.otpVerification_POST_Schema }),
  asyncMiddleware(OtpController.OtpVerification)
);

module.exports = router;
