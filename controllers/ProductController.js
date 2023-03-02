const ProductSchema = require("../models/");
const Product = ProductSchema.product.Products;
const SubProduct = ProductSchema.product.SubProduct;
const FinancialService = ProductSchema.product.LeadDetails;

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
        ProductId: req.params.id,
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
        SubProductId: req.params.subproductid,
        FINCode: req.params.customerid,
      },
    });
    res.status(200).send(financialService);
  } catch (error) {
    throw error;
  }
};
const ReadFinancialServiceFincode = async (req,res) => {
  try {
    const financialService = await FinancialService.findAll({
      where: {
        FINCode: req.params.customerid,
      },
    });
    res.status(200).send(financialService);
  } catch (error) {
    throw error;
  }
}
const ReadFinancialServiceAll = async (req, res) => {
  try {
    const financialService = await FinancialService.findAll();
    res.status(200).send(financialService);
  } catch (error) {
    throw error;
  }
};

const InsertFinancialService = async (req, res) => {
  try {
    let info = {
      SubProductId: req.body.SubProductId,
      Name:req.body.Name,
      CustomerMobile: req.body.CustomerMobile,
      CityId: req.body.CityId,
      LoanAmount: req.body.LoanAmount,
      NetMonthlyIncome: req.body.NetMonthlyIncome,
      EmploymentType: req.body.EmploymentType,
      FINCode: req.body.FINCode,
      IsActive: 1,
      GrossSales: req.body.GrossSales,
      IsPresent: req.body.IsPresent,
      CreatedAt: Date(),
      UpdatedAt: Date(),
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
  ReadFinancialServiceAll,
  InsertFinancialService,
  ReadFinancialServiceFincode
};
