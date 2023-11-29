// const {Sequelize, DataTypes} = require("sequelize");
const {Sequelize} = require("sequelize");
const sequelize = require("../util/db");

const Student = sequelize.define("Student", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    rollNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    dateOfBirth: {
        type: Sequelize.DATEONLY,
        allowNull: false,
    },
    score: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
    },
});

 module.exports = Student;