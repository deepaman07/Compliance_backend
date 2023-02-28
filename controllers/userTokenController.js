const db = require("../models");
var jwt = require("jsonwebtoken");
const axios = require("axios");
//JWT secret key
require("dotenv").config();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

// create main Model
const Token = db.userToken;

// 1. create product
const FINCode = async (req, res) => {
  try {
    axios
      .post("https://pbpqaslimapi.policybazaar.com/getAffiliateIdByFinCode", {
        FinanceCode: req.body.FinanceCode,
      })
      .then((response) => {
        res.send(response.data.data);
      })

      .catch((error) => {
        console.log(error);
      });
  } catch (err) {
    res.status(400).send(err);
  }
};

const Register = async (req, res) => {
  let jwtToken = jwt.sign({ FINCode: req.body.FINCode }, JWT_SECRET_KEY);
  let info = {
    FINCode: req.body.FINCode,
    MobileNumber: req.body.MobileNumber,
    Token: jwtToken,
    IsActive: 1,
    CreatedAt: Date(),
    UpdatedAt: Date(),
  };
  try {
    const token = await Token.create(info);
    // res.cookie("userCookie", "aman", {
    //   httpOnly: false,
    // });
    // res.send(req.cookies);
    if (token) res.status(200).send(token);
  } catch (error) {
    throw error;
  }
};

// 2. Logout user

const Logout = async (req, res) => {
  const logout = await Token.update(
    { IsActive: 0, UpdatedAt: Date() },
    { where: { FINCode: req.params.id } }
  );
  res.status(200).send("logout");
};

module.exports = {
  Register,
  FINCode,
  Logout,
};
