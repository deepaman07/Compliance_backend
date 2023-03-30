const ProductSchema = require("../models/");
const Product = ProductSchema.product.Products;
const SubProduct = ProductSchema.product.SubProduct;
const FinancialService = ProductSchema.product.LeadDetails;
const { Op, literal } = require("sequelize");
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
    const financialService = await ProductSchema.sequelize.query(
      "SELECT * from pbpasidb.leaddetails WHERE YEAR(CreatedAt) = YEAR(CURDATE() - INTERVAL 1 MONTH) AND MONTH(CreatedAt) = MONTH(CURDATE() - INTERVAL 1 MONTH) AND SubProductId = (:SubProductId) AND FINCode = (:FINCode)",
      {
        replacements: {
          SubProductId: req.params.subproductid,
          FINCode: req.params.customerid,
        },
        type: ProductSchema.sequelize.QueryTypes.SELECT,
      }
    );
    console.log(financialService);
    res.status(200).send(financialService);
  } catch (error) {
    throw error;
  }
};
const ReadFinancialServiceFincode = async (req, res) => {
  try {
    const financialService = await ProductSchema.sequelize.query(
      "SELECT * from pbpasidb.leaddetails WHERE YEAR(CreatedAt) = YEAR(CURDATE() - INTERVAL 1 MONTH) AND MONTH(CreatedAt) = MONTH(CURDATE() - INTERVAL 1 MONTH) AND FINCode = (:FINCode) ORDER BY Id DESC",
      {
        replacements: {
          FINCode: req.params.customerid,
        },
        type: ProductSchema.sequelize.QueryTypes.SELECT,
      }
    );
    res.status(200).send(financialService);
  } catch (error) {
    throw error;
  }
};
const ReadFinancialServiceAll = async (req, res) => {
  try {
    const financialService = await ProductSchema.sequelize.query(
      "SELECT * from pbpasidb.leaddetails WHERE YEAR(CreatedAt) = YEAR(CURDATE() - INTERVAL 1 MONTH) AND MONTH(CreatedAt) = MONTH(CURDATE() - INTERVAL 1 MONTH) ORDER BY Id DESC",
      {
        type: ProductSchema.sequelize.QueryTypes.SELECT,
      }
    );
    res.status(200).send(financialService);
  } catch (error) {
    throw error;
  }
};

const InsertFinancialService = async (req, res) => {
  try {
    let info = {
      SubProductId: req.body.SubProductId,
      Name: req.body.Name,
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
const Dashboard = async (req, res) => {
  try {
    const finCode = req.body.FINCode;
    await ProductSchema.sequelize
      .query(
        "SELECT ifnull(sum(Nop), 0) as TotalRecords, case WHEN ifnull(MONTH, 0) = 0 Then TMname ELSE MONTH END AS Month, TMonthid as Numbering FROM pbpasidb.tbl_Index left JOIN pbpasidb.provisions on monthid = TMonthid and provisions.FinanceCode = (:FINCode) GROUP BY TMonthid, case WHEN ifnull(MONTH, 0) = 0 Then TMname ELSE MONTH END ORDER BY TMonthid",
        {
          replacements: {
            FINCode: finCode,
          },
          type: ProductSchema.sequelize.QueryTypes.SELECT,
        }
      )
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((error) => {
        console.error(error);
      });
    res.status(400);
  } catch (error) {
    throw error;
  }
};
const DashboardAll = async (req, res) => {
  try {
    const finCode = req.body.FINCode;
    await ProductSchema.sequelize
      .query(
        "SELECT ifnull(sum(Nop), 0) as TotalRecords, case WHEN ifnull(MONTH, 0) = 0 Then TMname ELSE MONTH END AS Month, TMonthid FROM pbpasidb.tbl_Index left JOIN pbpasidb.provisions on monthid = TMonthid GROUP BY TMonthid, case WHEN ifnull(MONTH, 0) = 0 Then TMname ELSE MONTH END ORDER BY TMonthid",
        {
          type: ProductSchema.sequelize.QueryTypes.SELECT,
        }
      )
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((error) => {
        console.error(error);
      });

    res.status(400);
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
  ReadFinancialServiceFincode,
  Dashboard,
  DashboardAll,
};
