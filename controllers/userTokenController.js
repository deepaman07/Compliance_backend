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
    FINCode: req.body.FINCode,
    MobileNumber: req.body.MobileNumber,
    Otp: req.body.Otp,
    Token: jwtToken,
    IsActive: 1,
    CreatedAt: Date(),
    UpdatedAt: Date(),
  };
  try {
    const token = await Token.create(info);
    res.cookie("userCookie", "aman", {
      httpOnly: false,
    });
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
  Logout,
};
