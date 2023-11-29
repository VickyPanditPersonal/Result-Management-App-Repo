const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const { userRegistrationRules, validate } = require("../middlewares/validation-middleware");

router.post(
  "/register",
  [userRegistrationRules(), validate],
  userController.registerUser,
);

module.exports = router;