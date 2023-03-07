const db = require("../models");
var jwt = require("jsonwebtoken");
var axios = require("axios");
const { Op } = require("sequelize");
//JWT secret key
require("dotenv").config();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

// create main Model
const Token = db.userToken;

// 1. create product
const FINCode = async function (req, res) {
  try {
    var data = JSON.stringify({
      FinanceCode: req.body.FinanceCode,
    });

    var config = {
      method: "post",
      url: "https://pbpqaslimapi.policybazaar.com/getAffiliateIdByFinCode",
      headers: {
        "Content-Type": "application/json",
        Auth: "lg25vFjRtp5TClTsz:&5CWhLyJe",
        Cookie:
          "_abck=D2C7D5EE3753CD8044C72B7080B6A6C9~-1YAAQ5u/IF/tjCjmGAQAAdcXYgwlyodPn3c2AOb7tQ4tjlObrIt7sqMf/Pej1E1P43SwO2EPPeR5fO8v6d/ds/0lflqo9FtP3UJDRjrAJb2ZDiDcxrmPCf9cWZFqMKGppLZ7QnlHm6J3BDjCsNpGtVIqnLKRZQSsZHlcGvAyo0FexBA0hy8Pvd92iXKN+NfRV8uXbqgZOHfWFOnOTRiFMqJGEXBGacC6SzYPJG9mRprhe7yoKgFLL61El4BLy8HMzec0lJeuqa7vRQzyMuxXfR5UR7HdJqfiXjLzH/8usqG+nMXYt5vmeCcz80L+SVNinYLmRh6aa/+TiMfaJrFQnELTAGFQbQ6bEnqmxJwHeUDwn/8Gh3i7i6qtz8MK5nsI=-1~-1~-1",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        res.send(JSON.stringify(response.data));
      })
      .catch(function (error) {
        res.send(error);
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
    const lastLogin = await Token.max("CreatedAt", {
      where: {
        FINCode: req.body.FINCode,
        CreatedAt: {
          [Op.lt]: Date().slice(4, 24),
        },
      },
    });
    // res.cookie("userCookie", "aman", {
    //   httpOnly: false,
    // });
    // res.send(req.cookies);
    const result = {
      token: token,
      lastLogin: lastLogin,
    };
    if (token) res.status(200).send(result);
  } catch (error) {
    throw error;
  }
};

// 2. Logout user

const Logout = async (req, res) => {
  const logout = await Token.update(
    { IsActive: 0, UpdatedAt: Date() },
    { where: { Id: req.params.id } }
  );
  res.status(200).send("logout");
};

module.exports = {
  Register,
  Logout,
  FINCode,
};
