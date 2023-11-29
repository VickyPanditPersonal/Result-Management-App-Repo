const User = require("../models/userModel");

const createUser = (req) => {
  return User.create(req);
};

const findUserByUsername = (username) => {
  return User.findOne({ where: { username } });
};

module.exports = { createUser, findUserByUsername };