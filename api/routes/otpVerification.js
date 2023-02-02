const express = require("express");
var localStorage=require("localStorage")
const router = express.Router();
router.post("/", (req, res, nex) => {
  const mobileNumber=Number(localStorage.getItem("mobileNo"));
  const otp=Number(localStorage.getItem("otp"));
  const generatedTime=Number(localStorage.getItem("generatedTime"));
  const verificationTime=new Date().getTime();
  if((verificationTime-generatedTime)<60000)
  {
    if (mobileNumber === Number(req.body.mobile_Number)) {
        if (otp === Number(req.body.otp))
        res.status(200).json({
          Message: "Otp verification successful",
          error: false
        });
        else
        {
          res.status(200).json({
              Message: "Otp verification failed!!",
              error: true
            });
        }
    } else {
      res.status(200).json({
        Message: "Mobile Number verification failed!!",
        error: true
      });
    }
}
else
{
  res.status(200).json({
    Message: "Timeout!!",
    error: true
  });
}
});

module.exports = router;
