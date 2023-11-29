const studentService = require("../services/studentService");
const STATUS_CODES = require("../constants/status-codes");
const Student = require("../models/studentModel");

function addStudent(req, res) {
    return studentService.createStudent(req, res);
}

function removeStudent(req, res) {
    return studentService.deleteStudentByRollNumber(req, res);
}

function updateStudent(req, res) {
    return studentService.updateStudentByRollNumber(req, res);
}

function getStudents(req, res) {
    return studentService.getAllStudents(req, res);
}

module.exports = { addStudent, removeStudent, updateStudent, getStudents };