const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Importing Routers
const otp = require("./api/otp");
const customerDetails = require("./api/CustomerDetails");
const userToken = require("./api/tokenRouter");
const states = require("./api/StateRouter");
const products = require("./api/ProductRouter");

// Routers connections
app.use("/otp", otp);
app.use("/details", customerDetails);
app.use("/api", userToken);
app.use("/geo", states);
app.use("/product", products);

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT - ${PORT}`);
});
