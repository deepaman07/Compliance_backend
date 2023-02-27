const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();
const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.USER_NAME,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    operatorsAliases: false,

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("connected...");
  })
  .catch((err) => {
    console.log("Error" + err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.userToken = require("./usertokens")(sequelize, DataTypes);
db.customerDetails = require("./CustomerDetailsSchema")(sequelize, DataTypes);
db.stateList = require("./statecityschema")(sequelize, DataTypes);
db.product = require("./productSchema")(sequelize, DataTypes);
db.employmenttypes = require("./EmploymentTypeSchema")(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log("Yes re-sync done!");
});

module.exports = db;
