const { Joi } = require("celebrate");
const OtpValidation = {
  otpGenerator_POST_Schema: Joi.object().keys({
    MobileNumber: Joi.string().required(),
  }),
  otpVerification_POST_Schema: Joi.object().keys({
    MobileNumber: Joi.string().required(),
    otp: Joi.number().required(),
  }),
};
module.exports = OtpValidation;
