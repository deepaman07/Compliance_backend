const db = require("../../db");
const Sequelize = require("sequelize");
const OtpSchema = db.define(
  "OtpSchema",
  {
      MobileNumber: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
      },
      otp: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdOn: {
        type: Sequelize.STRING
      },
      updatedOn: {
        type: Sequelize.STRING
      }
  }
);
module.exports=OtpSchema;