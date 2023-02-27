module.exports = (sequelize, DataTypes) => {
  const BasicInfo = sequelize.define(
    "basicinfos",
    {
      Id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      CustomerName: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      FatherName: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      MobileNumber: {
        type: DataTypes.BIGINT,
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
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      City: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      GSTNumber: {
        type: DataTypes.TINYINT,
        allowNull: false,
      },
      MSMENumber: {
        type: DataTypes.TINYINT,
        allowNull: false,
      },
      IsActive: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1,
      },
      CreatedAt: {
        type: DataTypes.DATE(),
        allowNull: false,
        defaultValue: sequelize.Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      UpdatedAt: {
        type: DataTypes.DATE(),
        allowNull: false,
        defaultValue: sequelize.Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    },
    {
      sequelize,
      tableName: "basicinfos",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "Id" }],
        },
      ],
    }
  );
  const BankInfo = sequelize.define(
    "bankinfos",
    {
      Id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      CustomerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      BankName: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      AccountHolderName: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      AccountNumber: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      IfscCode: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      PanNumber: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      Pincode: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      BranchState: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      BranchAddress: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      IsActive: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1,
      },
      CreatedAt: {
        type: DataTypes.DATE(),
        allowNull: false,
        defaultValue: sequelize.Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      UpdatedAt: {
        type: DataTypes.DATE(),
        allowNull: false,
        defaultValue: sequelize.Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    },
    {
      sequelize,
      tableName: "bankinfos",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "Id" }, { name: "CustomerId" }],
        },
      ],
    }
  );
  const KycInfo = sequelize.define(
    "kycinfos",
    {
      Id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      CustomerId: {
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
      IsActive: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1,
      },
      CreatedAt: {
        type: DataTypes.DATE(),
        allowNull: false,
        defaultValue: sequelize.Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      UpdatedAt: {
        type: DataTypes.DATE(),
        allowNull: false,
        defaultValue: sequelize.Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    },
    {
      sequelize,
      tableName: "kycinfos",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "Id" }, { name: "CustomerId" }],
        },
      ],
    }
  );
  return { BasicInfo, BankInfo, KycInfo };
};
