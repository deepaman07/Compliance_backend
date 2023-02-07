
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  'PBMC_Api',
  'root',
  'T0day@1234',
    {
      host: 'localhost',
      dialect: 'mysql',
      define: {
        timestamps: false,
        freezeTableName: true
    }
    }
  );
sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});
module.exports=sequelize;