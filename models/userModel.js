// const { DataTypes } = require("sequelize");
const { Sequelize } = require("sequelize");
const sequelize = require("../util/db");
const ROLE = require("../constants/user-constants");

const User = sequelize.define("User", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  userType: {
    type: Sequelize.ENUM(ROLE.TEACHER, ROLE.STUDENT),
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
});

module.exports = User;