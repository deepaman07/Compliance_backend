const { Joi } = require("celebrate");
const FinancialServiceValidator = {
  insertFinancialServices_POST_Schema: Joi.object().keys({
    sub_product_id: Joi.number().required(),
    customer_name: Joi.string().required(),
    customer_mobile: Joi.string().required(),
    city_id: Joi.number().required(),
    loan_amount: Joi.string().required(),
    net_monthly_income: Joi.alternatives([
      Joi.string().allow(""),
      Joi.string().regex(/^[0-3]{0,1}[0-9]{1}\/[0-1]{0,1}[0-9]{1}\/[0-9]{4}$/),
    ]),
    employment_type: Joi.number().required(),
    created_by: Joi.number().required(),
  }),
};
module.exports = FinancialServiceValidator;
