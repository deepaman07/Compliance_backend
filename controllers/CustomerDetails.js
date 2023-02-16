var CustomerDetailsSchema = require("../models/mysql/CustomerDetailsSchema");
const axios = require("axios");
const multer = require("multer");
const util = require("util");
const path = require("path");
const fs = require("fs");
var folderPath;
// Set storage engine for Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    folderPath = `./KycDocs/${req.body.ID}`;
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
    }
    cb(null, folderPath);
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  // Allowed file types
  var fileExtensions = [
    "image/png",
    "image/bmp",
    "image/jpeg",
    "image/x-png",
    "image/gif",
  ];

  // Check if the file type is in the allowedTypes array
  if (fileExtensions.includes(file.mimetype)) {
    cb(null, true);
  } else {
    req.fileValidationError = `goes wrong on the file type of ${file.fieldname}`;
    return cb(new Error("Invalid upload: fieldname should be image "));
  }
};

// Initialize upload variable with storage engine and file filter
const upload = multer({ storage: storage, fileFilter: fileFilter }).fields([
  { name: "Pancard", maxCount: 1 },
  { name: "CancelCheque", maxCount: 1 },
  { name: "AddressProof", maxCount: 1 },
  { name: "HighestEducation", maxCount: 1 },
  { name: "PartnerPhoto", maxCount: 1 },
  { name: "MSMECertificate", maxCount: 1 },
  { name: "GSTCertificate", maxCount: 1 },
]);

var CustomerDetails = {
  BasicInfo: async function (req, res, next) {
    var BasicInfoSchema = CustomerDetailsSchema.BasicInfo;

    //Insert into table BasicInfo
    if (req.body.ID == null) {
      BasicInfoSchema.create({
        ID: req.body.ID,
        Username: req.body.Username,
        FatherName: req.body.FatherName,
        MobileNumber: req.body.MobileNumber,
        EmailId: req.body.EmailId,
        PanNumber: req.body.PanNumber,
        DOB: req.body.DOB,
        Address: req.body.Address,
        Pincode: req.body.Pincode,
        State: req.body.State,
        City: req.body.City,
        GSTNumber: req.body.GSTNumber,
        MSMENumber: req.body.MSMENumber,
        IsActive: 1,
      }).then(function (result) {
        if (result) {
          res.status(200).json({
            msg: result,
            ID: result.dataValues.ID ? result.dataValues.ID : 0,
          });
        } else {
          res.status(400).send("Error in insert new record");
        }
      });
    } else {
      // Update table BasicInfo
      BasicInfoSchema.update(
        {
          ID: req.body.ID,
          Username: req.body.Username,
          FatherName: req.body.FatherName,
          MobileNumber: req.body.MobileNumber,
          EmailId: req.body.EmailId,
          PanNumber: req.body.PanNumber,
          DOB: req.body.DOB,
          Address: req.body.Address,
          Pincode: req.body.Pincode,
          State: req.body.State,
          City: req.body.City,
          GSTNumber: req.body.GSTNumber,
          MSMENumber: req.body.MSMENumber,
          IsActive: 1,
        },
        { where: { ID: req.body.ID } }
      )
        .then((result) => {
          console.log(result);
          res.status(200).json({
            msg: "update succesfull",
            customerId: req.body.ID,
            error: false,
          });
        })
        .catch((err) => {
          res.status(200).json({ msg: "updation failed", error: true });
        });
    }
  },
  BankInfo: async function (req, res, next) {
    var BankInfoSchema = CustomerDetailsSchema.bankinfo;
    var x;
    await BankInfoSchema.count({ where: { ID: req.body.ID } }).then((count) => {
      if (count != 0) {
        x = false;
      } else {
        x = true;
      }
    });
    if (x === true) {
      //Insert into table bankinfo
      BankInfoSchema.create({
        ID: req.body.ID,
        BankName: req.body.BankName,
        AccountHolderName: req.body.AccountHolderName,
        AccountNumber: req.body.AccountNumber,
        IfscCode: req.body.IfscCode,
        PanNumber: req.body.PanNumber,
        Pincode: req.body.Pincode,
        BranchState: req.body.BranchState,
        BranchAddress: req.body.BranchAddress,
        IsActive: 1,
      }).then(function (result) {
        if (result) {
          res.status(200).json({ msg: result });
        } else {
          res.status(400).send("Error in insert new record");
        }
      });
    } else {
      console.log("dupe........................dupe");
      //Insert into table bankinfo
      BankInfoSchema.update(
        {
          ID: req.body.ID,
          BankName: req.body.BankName,
          AccountHolderName: req.body.AccountHolderName,
          AccountNumber: req.body.AccountNumber,
          IfscCode: req.body.IfscCode,
          PanNumber: req.body.PanNumber,
          Pincode: req.body.Pincode,
          BranchState: req.body.BranchState,
          BranchAddress: req.body.BranchAddress,
          IsActive: 1,
        },
        { where: { ID: req.body.ID } }
      ).then(function (result) {
        if (result) {
          res.status(200).json({"msg":"Update Succesfull",
          "result":result});
        } else {
          res.status(400).send("Error in update new record");
        }
      });
    }
  },
  KycDocuments: async function (req, res, next) {
    await upload(req, res, function (err) {
      if (req.fileValidationError) {
        return res.send({ msg: req.fileValidationError });
      }
      if (err) {
        return res.send(err);
      } else {
        console.log(req.files.Pancard[0].filename);
        var docLink = `${process.env.LOCALHOST}CustomerDetails/KycDocs/${req.body.ID}/`;
        const data = {
          ID: Number(req.body.ID),
          PanCard: docLink + req.files.Pancard[0].filename,
          CancelCheque: docLink + req.files.CancelCheque[0].filename,
          AddressProof: docLink + req.files.AddressProof[0].filename,
          HighestEducation: docLink + req.files.HighestEducation[0].filename,
          PartnerPhoto: docLink + req.files.PartnerPhoto[0].filename,
          MSMECertificate: docLink + req.files.MSMECertificate[0].filename,
          GSTCertificate: docLink + req.files.GSTCertificate[0].filename,
        };
        console.log(data);
        axios
          .post(`${process.env.LOCALHOST}CustomerDetails/KycInfo`, data)
          // Print data
          .then((response) => {
            res.status(200).send({ msg: "saved successfully" });
          })
          // Print error message if occur
          .catch((error) => console.log("Error to fetch data\n" + error));
        return res;
      }
    });
  },
  KycInfo: async function (req, res, next) {
    var KycInfoSchema = CustomerDetailsSchema.kycinfo;
    var x;
    await KycInfoSchema.count({ where: { ID: req.body.ID } }).then((count) => {
      if (count != 0) {
        x = false;
      } else {
        x = true;
      }
    });
    if (x === true) {
      //Insert into table kycinfo
      KycInfoSchema.create({
        ID: req.body.ID,
        PanCard: req.body.PanCard,
        CancelCheque: req.body.CancelCheque,
        AddressProof: req.body.AddressProof,
        HighestEducation: req.body.HighestEducation,
        PartnerPhoto: req.body.PartnerPhoto,
        MSMECertificate: req.body.MSMECertificate,
        GSTCertificate: req.body.GSTCertificate,
        IsActive: 1,
      }).then(function (result) {
        const obj = { result };
        const str = util.inspect(obj);
        if (result) {
          res.status(200).send(str);
        } else {
          res.status(400).send("Error in insert new record");
        }
      });
    } else {
      KycInfoSchema.update(
        {
          ID: req.body.ID,
          PanCard: req.body.PanCard,
          CancelCheque: req.body.CancelCheque,
          AddressProof: req.body.AddressProof,
          HighestEducation: req.body.HighestEducation,
          PartnerPhoto: req.body.PartnerPhoto,
          MSMECertificate: req.body.MSMECertificate,
          GSTCertificate: req.body.GSTCertificate,
          IsActive: 1,
        },
        { where: { ID: req.body.ID } }
      ).then(function (result) {
        if (result) {
          res.status(200).send({"msg":"Update Succesfull",
          "result":result});
        } else {
          res.status(400).send("Error in update new record");
        }
      });
    }
  },
  GetKycDoc: async function (req, res, next) {
    var filepath = `./KycDocs/${req.params.id}/${req.params.docname}`;
    var fileextension = req.params.docname.substr(
      req.params.docname.lastIndexOf(".") + 1
    );
    fs.readFile(filepath, (err, data) => {
      if (err) {
        res.status(500).send({ error: "Error reading file" });
      } else {
        res.contentType(`application/${fileextension}`);
        res.send(data);
      }
    });
  },
};
module.exports = CustomerDetails;
