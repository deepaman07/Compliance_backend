const Token = require("./../models/mysql/user_token");
var jwt = require("jsonwebtoken");

//JWT secret key
require("dotenv").config();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

// create main Model

// 1. create product

const register = async (req, res) => {
  let jwtToken = jwt.sign({ email: req.body.email }, JWT_SECRET_KEY);
  let info = {
    email: req.body.email,
    otp: req.body.otp,
    token: jwtToken,
    isactive: 1,
    createdOn: Date(),
    updatedOn: Date()
  };
  try {
    const token = await Token.create(info);
    if (token) res.status(200).send(token);
  } catch (error) {
    throw error;
  }
};

// 2. Logout user

const update = async (req, res) => {
  let id = req.params.id;
  const product = await Token.update(
    { isactive: 0, updatedOn: Date() },
    { where: { id: id } }
  );

  res.status(200).send(product);
};

module.exports = {
  register,
  update
};