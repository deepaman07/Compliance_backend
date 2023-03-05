module.exports = function (sequelize, DataTypes) {
  const Products = sequelize.define(
    "products",
    {
      Id: {
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
      },
      ProductName: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      Icon: {
        type: DataTypes.STRING(191),
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
      tableName: "products",
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
  const SubProduct = sequelize.define(
    "subproducts",
    {
      Id: {
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
      },
      SubProductName: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },
      ProductId: {
        type: DataTypes.INTEGER,
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
      tableName: "subproducts",
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
  const LeadDetails = sequelize.define(
    "leaddetails",
    {
      Id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      Name: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      SubProductId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      CustomerMobile: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      CityId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      LoanAmount: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      NetMonthlyIncome: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      EmploymentType: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      FINCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      GrossSales: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      IsPresent: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0,
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
      tableName: "leaddetails",
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
  return { Products, SubProduct, LeadDetails };
};
