const axios = require("axios");
const OtpSchema = require("./../models/mysql/OtpSchema");
var otpController = {
  OtpGenerator: async function (req, res, next) {
    const otp = 101010;
    // Provision to call api to generate otp
    var x;
    await OtpSchema.count({ where: { MobileNumber: req.body.MobileNumber } }).then((count) => {
      if (count != 0) {
        x = false;
      } else {
        x = true;
      }
    });
    if (x === true) {
      // insert into OtpSchema
      OtpSchema.create({
        MobileNumber: req.body.MobileNumber,
        otp: otp,
      }).then(function (result) {
        if (result) {
          res.status(200).json({
            otp: otp
          });
        } else {
          res.status(400).send("Error in getting otp");
        }
      });
    }
    else{
      // update OtpSchema
      OtpSchema.update({
        MobileNumber: req.body.MobileNumber,
        otp: otp
      },
      { where: { MobileNumber: req.body.MobileNumber } }).then(function (result) {
        if (result) {
          res.status(200).json({
            otp: otp
          });
        } else {
          res.status(400).send("Error in getting otp");
        }
      });
    }
  },
  OtpVerification: async function (req, res, next) {
    OtpSchema.findOne({
      where: { MobileNumber: req.body.MobileNumber },
    }).then(function (result) {
      if (result) {
        const otp = result.otp;
        const verificationTime = new Date().getTime();
        const generatedTime=result.updatedOn.getTime();
        console.log(result.updatedOn.getTime(),verificationTime);
        console.log(verificationTime-generatedTime)
        if ((verificationTime - generatedTime) < 60000) {
          if (otp === Number(req.body.otp)) {
            console.log("sending data")
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
                console.log(id);
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
        }
        else
        {
          res.status(200).json({
            Message: "Timeout!!",
            error: true,
          });
        }
      } 
      else {
        res.status(200).json({
            Message: "Mobile Number verification failed!!",
            error: true,
          });
      }
    });
  },
};
module.exports = otpController;
