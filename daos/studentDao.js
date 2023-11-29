const Student = require("../models/studentModel");

function createStudent(req) {
  return Student.create(req);
}

function getAllStudents() {
  return Student.findAll({
    attributes: [ 'rollNumber', 'name', 'dateOfBirth', 'score', 'email' ]
  });
}

function getStudentByRollNo(rollNumber) {
  return Student.findOne({
    where: { rollNumber },
  });
}

function getStudentByNameAndRollNo(rollNumber, name) {
  return Student.findOne({
    where: { rollNumber, name },
    raw: true,
  });
}

function getStudentByEmail(email) {
  return Student.findOne({
    where: { email },
  });
}

function deleteStudent(student) {
  return student.destroy();
}

function updateStudent(student, req) {
  return student.update(req);
}

module.exports = {
  createStudent,
  getAllStudents,
  getStudentByRollNo,
  getStudentByNameAndRollNo,
  getStudentByEmail,
  deleteStudent,
  updateStudent
};