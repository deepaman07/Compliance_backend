var localStorage = require("localStorage");
const otpGenerator = require("otp-generator");
var otpController = {
    OtpGenerator: async function (req, res, next) {
        const mobileNo = req.body.MobileNumber;
        const generatedTime = new Date().getTime();
        const otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
        });
        localStorage.setItem("mobileNo", mobileNo);
        localStorage.setItem("otp", otp);
        localStorage.setItem("generatedTime", generatedTime);
        res.status(200).json({
        otp: otp,
        });
    },
    OtpVerification: async function (req,res,next) {
        const mobileNumber=Number(localStorage.getItem("mobileNo"));
        const otp=Number(localStorage.getItem("otp"));
        const generatedTime=Number(localStorage.getItem("generatedTime"));
        const verificationTime=new Date().getTime();
        if((verificationTime-generatedTime)<60000)
        {
          if (mobileNumber === Number(req.body.MobileNumber)) {
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
        }
    
}
module.exports=otpController;
