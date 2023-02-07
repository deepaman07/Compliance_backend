const express = require("express");
const app = express();
app.use(express.json());
const CustomerDetails=require("./api/routes/CustomerDetails");
const otp = require("./api/routes/otp");
const InsertBasicInfo = require("./models/mysql/CustomerDetailsSchema");
app.use("/otp", otp);
app.use("/CustomerDetails", CustomerDetails);
module.exports = app;
