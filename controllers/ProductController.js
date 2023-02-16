const ProductSchema = require("../models/");
const Product = ProductSchema.product.Products;
const SubProduct = ProductSchema.product.SubProduct;
const FinancialService = ProductSchema.product.Financial_service_lead_details;

// 1. create product

const ReadProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).send(products);
  } catch (error) {
    throw error;
  }
};

const ReadSubProducts = async (req, res) => {
  try {
    const subproducts = await SubProduct.findAll({
      where: {
        product_id: req.params.id,
      },
    });
    res.status(200).send(subproducts);
  } catch (error) {
    throw error;
  }
};

const ReadFinancialService = async (req, res) => {
  try {
    const financialService = await FinancialService.findAll({
      where: {
        sub_product_id: req.params.id,
      },
    });
    res.status(200).send(financialService);
  } catch (error) {
    throw error;
  }
};
const InsertFinancialService = async (req, res) => {
  try {
    let info = {
      sub_product_id: req.body.sub_product_id,
      customer_name: req.body.customer_name,
      customer_mobile: req.body.customer_mobile,
      city_id: req.body.city_id,
      loan_amount: req.body.loan_amount,
      net_monthly_income: req.body.net_monthly_income,
      employment_type: req.body.employment_type,
      created_by: req.body.created_by,
      is_active: 1,
      created_at: Date(),
      updated_at: Date(),
    };
    const financialService = await FinancialService.create(info);
    res.status(200).send(financialService);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  ReadProducts,
  ReadSubProducts,
  ReadFinancialService,
  InsertFinancialService,
};
