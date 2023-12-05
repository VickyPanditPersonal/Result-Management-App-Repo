const express = require("express");
const router = express.Router();

const { authenticateToken } = require("../middlewares/authorization");
const { checkUserRole } = require("../middlewares/user-middleware");

const ROLE = require("../constants/user-constants");
const studentController = require("../controllers/studentController");

router.post(
  "/search",
  [authenticateToken, checkUserRole(ROLE.STUDENT)],
  studentController.getStudentByNameAndRollNo,
);

module.exports = router;