const { Joi } = require("celebrate");
const CustomerDetailsValidator = {
  insertBasicInfo_POST_Schema: Joi.object().keys({
    CustomerName: Joi.string().required(),
    FatherName: Joi.string().required(),
    MobileNumber: Joi.number().required(),
    EmailId: Joi.string().required(),
    PanNumber: Joi.number().required(),
    DOB: Joi.alternatives([
      Joi.string().allow(" "),
      Joi.string().regex(/^[0-3]{0,1}[0-9]{1}\/[0-1]{0,1}[0-9]{1}\/[0-9]{4}$/),
    ]),
    Address: Joi.string().required(),
    Pincode: Joi.string().required(),
    State: Joi.number().required(),
    City: Joi.number().required(),
    GSTNumber: Joi.number().required().allow(0, 1, "0", "1"),
    MSMENumber: Joi.number().required().allow(0, 1, "0", "1"),
  }),
  insertBankInfo_POST_Schema: Joi.object().keys({
    CustomerID: Joi.number().required(),
    BankName: Joi.number().required(),
    AccountHolderName: Joi.string().required(),
    AccountNumber: Joi.string().required(),
    IfscCode: Joi.string().required(),
    PanNumber: Joi.string().required(),
    Pincode: Joi.string().required(),
    BranchState: Joi.number().required(),
    BranchAddress: Joi.string().required(),
  }),
};
module.exports = CustomerDetailsValidator;
