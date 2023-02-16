module.exports = (sequelize, DataTypes) => {
  const BasicInfo = sequelize.define("basicinfos", {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    Username: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    FatherName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    MobileNumber: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    EmailId: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    PanNumber: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    DOB: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    Address: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    Pincode: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    State: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    City: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    GSTNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    MSMENumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  const BankInfo = sequelize.define("bankinfos", {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    CustomerID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    BankName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    AccountHolderName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    AccountNumber: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    IfscCode: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    PanNumber: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    Pincode: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    BranchState: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    BranchAddress: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  });
  const KycInfo = sequelize.define("kycinfos", {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    CustomerID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    PanCard: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    CancelCheque: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    AddressProof: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    HighestEducation: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    PartnerPhoto: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    MSMECertificate: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    GSTCertificate: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  });
  return { BasicInfo, BankInfo, KycInfo };
};
