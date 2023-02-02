const express=require("express");
var localStorage=require("localStorage")
const router=express.Router();
router.post('/',(req,res,nex)=>{
    const otpGenerator = require('otp-generator')
    const mobileNo=req.body.mobileNo;
    const generatedTime = new Date().getTime();
    const otp=otpGenerator.generate(6, { upperCaseAlphabets: false, lowerCaseAlphabets:false, specialChars: false });
    localStorage.setItem("mobileNo", mobileNo);
    localStorage.setItem("otp",otp)
    localStorage.setItem("generatedTime",generatedTime)
    res.status(200).json({
        "otp":otp,
    })
})
module.exports=router;