const {Joi} =require("celebrate");
const CustomerDetailsValidator ={
    insertBasicInfo_POST_Schema: Joi.object().keys({
        Username: Joi.string().required(),
        FatherName: Joi.string().required(),
        MobileNumber:Joi.string().required(),
        EmailId: Joi.string().required(),
        PanNumber: Joi.string().required(),
        DOB: Joi.alternatives([
            Joi.string().allow(""),
            Joi.string().regex(/^[0-3]{0,1}[0-9]{1}\/[0-1]{0,1}[0-9]{1}\/[0-9]{4}$/)]),
        Address: Joi.string().required(),
        Pincode:Joi.number().required(),
        State: Joi.string().required(),
        City: Joi.string().required(),
        GSTNumber: Joi.number().required().allow(0, 1, "0", "1"),
        MSMENumber: Joi.number().required().allow(0, 1, "0", "1")
    }),
    insertBankInfo_POST_Schema:Joi.object().keys({
        BankName: Joi.string().required(),
        AccountHolderName: Joi.string().required(),   
        AccountNumber: Joi.string().required(),   
        IfscCode: Joi.string().required(),   
        PanNumber: Joi.string().required(),   
        Pincode: Joi.string().required(),   
        BranchState: Joi.string().required(),   
        BranchAddress: Joi.string().required()
    }),
    insertKycInfo_POST_Schema:Joi.object().keys({
        PanCard: Joi.string().required(),
        CancelCheque: Joi.string().required(),
        AddressProof: Joi.string().required(),
        HighestEducation: Joi.string().required(),
        PartnerPhoto: Joi.string().required(),
        MSMECertificate: Joi.string().required(),
        GSTCertificate: Joi.string().required() 
    })
}
module.exports=CustomerDetailsValidator;