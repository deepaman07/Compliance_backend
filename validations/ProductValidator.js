const { Joi } = require("celebrate");
const FinancialServiceValidator = {
  insertFinancialServices_POST_Schema: Joi.object().keys({
    SubProductId: Joi.number().required(),
    CustomerMobile: Joi.number().required(),
    CityId: Joi.number().required(),
    LoanAmount: Joi.number().required(),
    NetMonthlyIncome: Joi.number().required(),
    EmploymentType: Joi.number().required(),
    FINCode: Joi.string().required(),
    GrossSales: Joi.number().required(),
    IsPresent: Joi.number().required(),
  }),
};
module.exports = FinancialServiceValidator;
