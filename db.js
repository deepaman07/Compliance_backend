
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.USER_NAME,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    define: {
      timestamps: false,
      freezeTableName: true,
    },
  }
  );
sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});
module.exports=sequelize;