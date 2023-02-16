module.exports = (sequelize, DataTypes) => {
  const user_token = sequelize.define(
    "userTokens",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      CustomerID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      MobileNumber: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      Otp: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Token: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      IsActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      CreatedOn: {
        type: DataTypes.DATE(),
      },
      UpdatedOn: {
        type: DataTypes.DATE(),
      },
    },
    {
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    }
  );
  return user_token;
};
