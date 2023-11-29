const Sequelize = require("sequelize");
const sequelize = new Sequelize(
 'result_mngmnt_app',
 'root',
 'Root@123',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

 module.exports = sequelize;