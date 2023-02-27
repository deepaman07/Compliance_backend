module.exports = (sequelize, DataTypes) => {
  const UserToken = sequelize.define(
    "userTokens",
    {
      Id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      FINCode: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      MobileNumber: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      Token: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      IsActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 1,
      },
      CreatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      UpdatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    },
    {
      sequelize,
      tableName: "usertokens",
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
  return UserToken;
};
