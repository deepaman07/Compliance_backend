const express=require("express");
const app=express();
const db=require('./db')
// var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//   db.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
app.use(express.json());
const otpVerify=require('./api/routes/otpVerification');
const otpGenerate=require('./api/routes/otpGenerator');
app.use('/otpVerification',otpVerify);
app.use('/otpGeneration',otpGenerate);
module.exports=app;