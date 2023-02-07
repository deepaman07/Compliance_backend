const db = require("../../db");
const Sequelize=require("sequelize")
const CustomerDetails ={

  BasicInfo:db.define("BasicInfo",{
    ID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Username: {
      type: Sequelize.STRING,
      allowNull: false
    },
    FatherName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    MobileNumber: {
      type: Sequelize.STRING,
      allowNull: false
    },
    EmailId: {
      type: Sequelize.STRING,
      allowNull: false
    },
    PanNumber: {
      type: Sequelize.STRING,
      allowNull: false
    },
    DOB: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Address: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Pincode: {
      type: Sequelize.STRING,
      allowNull: false
    },
    State: {
      type: Sequelize.STRING,
      allowNull: false
    },
    City: {
      type: Sequelize.STRING,
      allowNull: false
    },
    GSTNumber: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    MSMENumber: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  }),
  bankinfo:db.define("bankinfo",{
    ID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    BankName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    AccountHolderName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    AccountNumber: {
      type: Sequelize.STRING,
      allowNull: false
    },
    IfscCode: {
      type: Sequelize.STRING,
      allowNull: false
    },
    PanNumber: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Pincode: {
      type: Sequelize.STRING,
      allowNull: false
    },
    BranchState: {
      type: Sequelize.STRING,
      allowNull: false
    },
    BranchAddress: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }),
  kycinfo:db.define("kycinfo",{
    ID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    PanCard: {
      type: Sequelize.STRING,
      allowNull: false
    },
    CancelCheque: {
      type: Sequelize.STRING,
      allowNull: false
    },
    AddressProof: {
      type: Sequelize.STRING,
      allowNull: false
    },
    HighestEducation: {
      type: Sequelize.STRING,
      allowNull: false
    },
    PartnerPhoto: {
      type: Sequelize.STRING,
      allowNull: false
    },
    MSMECertificate: {
      type: Sequelize.STRING,
      allowNull: false
    },
    GSTCertificate: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })


};
module.exports=CustomerDetails;