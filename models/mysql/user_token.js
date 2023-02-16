const db = require("../../db");
const Sequelize = require("sequelize");
const user_token = db.define(
  "userTokens",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    otp: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    token: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    isactive: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    createdOn: {
      type: Sequelize.DATE(),
    },
    updatedOn: {
      type: Sequelize.DATE(),
    },
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);
module.exports = user_token;
