const express = require("express");
const router = express.Router();
const teacherController = require("../controllers/teacherController");


const ROLE = require("../constants/user-constants");
const { authenticateToken } = require("../middlewares/authorization");
const { checkUserRole } = require("../middlewares/user-middleware");
const { studentValidationRules, validate } = require("../middlewares/validation-middleware");


/**
 * Addition of student
 */
router.post("/add-student", [authenticateToken, checkUserRole(ROLE.TEACHER), studentValidationRules()], (req, res) => {
    teacherController.addStudent(req, res);
});

// Alternate way of calling
// router.post("/add-student", teacherController.addStudent);

/**
 * Removal of student
 */
router.delete("/remove-student/:rollNumber", [authenticateToken, checkUserRole(ROLE.TEACHER)], (req, res) => {
    teacherController.removeStudent(req, res);
});


/**
 * Updating student info based on roll number
 */
router.put("/update-student", [authenticateToken, checkUserRole(ROLE.TEACHER)], (req, res) => {
    teacherController.updateStudent(req, res);
});


/**
 * Get all students
 */
router.get("/students", [authenticateToken, checkUserRole(ROLE.TEACHER)], (req, res) => {
    teacherController.getStudents(req, res);
});

module.exports = router;