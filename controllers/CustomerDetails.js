var CustomerDetailsSchema=require("../models/mysql/CustomerDetailsSchema")
var CustomerDetails={
    BasicInfo: async function (req, res, next) {
        var BasicInfoSchema=CustomerDetailsSchema.BasicInfo;
        BasicInfoSchema.create({
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
        MSMENumber: req.body.MSMENumber
        }).then(function (result) {
            if (result) {
                res.status(200).json({"msg":result});
            } else {
                res.status(400).send('Error in insert new record');
            }
        });
    },
    BankInfo: async function(req,res,next) {
        var BankInfoSchema=CustomerDetailsSchema.bankinfo;
        BankInfoSchema.create({
            BankName: req.body.BankName,
            AccountHolderName: req.body.AccountHolderName,
            AccountNumber: req.body.AccountNumber,
            IfscCode: req.body.IfscCode,
            PanNumber: req.body.PanNumber,
            Pincode: req.body.Pincode,
            BranchState: req.body.BranchState,
            BranchAddress: req.body.BranchAddress
            }).then(function (result) {
                if (result) {
                    res.status(200).json({"msg":result});
                } else {
                    res.status(400).send('Error in insert new record');
                }
            });
    },
    KycInfo: async function(req,res,next) {
        var KycInfoSchema=CustomerDetailsSchema.kycinfo;
        KycInfoSchema.create({
            PanCard: req.body.PanCard,
            CancelCheque: req.body.CancelCheque,
            AddressProof: req.body.AddressProof,
            HighestEducation: req.body.HighestEducation,
            PartnerPhoto: req.body.PartnerPhoto,
            MSMECertificate: req.body.MSMECertificate,
            GSTCertificate: req.body.GSTCertificate
        }).then(function (result) {
            if (result) {
                res.status(200).json({"msg":result});
            } else {
                res.status(400).send('Error in insert new record');
            }
        });
    } 
}
module.exports=CustomerDetails;