const express = require("express");
const {celebrate}=require("celebrate");
const OtpValidation=require("../../validations/OtpValidation")
const OtpController=require("../../controllers/OtpController");
const asyncMiddleware=require("../../middleWare/asyncMiddleware");
const router = express.Router();
router.post(
    "/otpGeneration",
    celebrate({ body: OtpValidation.otpGenerator_POST_Schema }),
    asyncMiddleware(OtpController.OtpGenerator)
);
router.post(
    "/otpVerification",
    celebrate({ body: OtpValidation.otpVerification_POST_Schema }),
    asyncMiddleware(OtpController.OtpVerification)
)
module.exports = router;
