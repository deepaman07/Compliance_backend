var localStorage = require("localStorage");
// const otpGenerator = require("otp-generator");
const axios = require("axios");
var otpController = {
  OtpGenerator: async function (req, res, next) {
    const mobileNo = req.body.MobileNumber;
    const generatedTime = new Date().getTime();
    // const otp = otpGenerator.generate(6, {
    //   upperCaseAlphabets: false,
    //   lowerCaseAlphabets: false,
    //   specialChars: false,
    // });
    const otp = 101010;
    localStorage.setItem("mobileNo", mobileNo);
    localStorage.setItem("otp", otp);
    localStorage.setItem("generatedTime", generatedTime);
    res.status(200).json({
      otp: otp,
    });
  },
  
  OtpVerification: async function (req, res, next) {
    const mobileNumber = Number(localStorage.getItem("mobileNo"));
    const otp = Number(localStorage.getItem("otp"));
    const generatedTime = Number(localStorage.getItem("generatedTime"));
    const verificationTime = new Date().getTime();
    var id;
    if (verificationTime - generatedTime < 60000) {
      if (mobileNumber === Number(req.body.MobileNumber)) {
        if (otp === Number(req.body.otp)) {
          var id;
          const data = {
            Username: " ",
            FatherName: " ",
            MobileNumber: req.body.MobileNumber,
            EmailId: " ",
            PanNumber: " ",
            DOB: "01/01/0001",
            Address: " ",
            Pincode: " ",
            State: " ",
            City: " ",
            GSTNumber: 0,
            MSMENumber: 0,
          };
          axios
            .post(`${process.env.LOCALHOST}CustomerDetails/BasicInfo`, data) // Print data
            .then((response) => {
              id = response.data.ID;
              res.status(200).json({
                Message: "Otp verification successful",
                CustomerId: id,
                error: false,
              });
            }) // Print error message if occur
            .catch((error) => console.log("Error to fetch data\n"));
        } else {
          res.status(200).json({
            Message: "Otp verification failed!!",
            error: true,
          });
        }
      } else {
        res.status(200).json({
          Message: "Mobile Number verification failed!!",
          error: true,
        });
      }
    } else {
      res.status(200).json({
        Message: "Timeout!!",
        error: true,
      });
    }
  },
};
module.exports = otpController;
