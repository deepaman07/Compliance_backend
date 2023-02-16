const http=require('http');
const express = require("express");
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const CustomerDetails=require("./api/routes/CustomerDetails");
const otp = require("./api/routes/otp");
const userToken = require("./api/routes/tokenRouter");
app.use(express.json());
//routes
app.use("/otp", otp);
app.use("/CustomerDetails", CustomerDetails);
app.use("/userToken", userToken);
// creating the server
const server=http.createServer(app);
const port=process.env.PORT || process.env.PORT
server.listen(port);