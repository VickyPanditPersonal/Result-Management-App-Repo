const express = require("express");
const router = express.Router();
const validateController = require("../controllers/ValidateController");

router.post("/name", (req, res) => {
  validateController.validateName(req, res);
});

module.exports = router;