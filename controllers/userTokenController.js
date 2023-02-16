const db = require("../models");
var jwt = require("jsonwebtoken");

//JWT secret key
require("dotenv").config();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

// create main Model
const Token = db.userToken;

// 1. create product

const Register = async (req, res) => {
  let jwtToken = jwt.sign({ email: req.body.email }, JWT_SECRET_KEY);
  let info = {
    CustomerID: req.body.CustomerID,
    MobileNumber: req.body.MobileNumber,
    Otp: req.body.Otp,
    Token: jwtToken,
    IsActive: 1,
    CreatedOn: Date(),
    UpdatedOn: Date(),
  };
  try {
    const token = await Token.create(info);
    if (token) res.status(200).send(token);
  } catch (error) {
    throw error;
  }
};

// 2. Logout user

const Logout = async (req, res) => {
  let id = req.params.id;
  const logout = await Token.update(
    { isactive: 0, updatedOn: Date() },
    { where: { id: id } }
  );
  res.status(200).send(logout);
};

module.exports = {
  Register,
  Logout,
};
