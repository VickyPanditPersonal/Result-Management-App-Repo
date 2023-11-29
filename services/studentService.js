const studentDao = require("../daos/studentDao");

async function createStudent(req, res) {
    try {
        const rollNumber = req.body.rollNumber;
        const existingStudent = await studentDao.getStudentByRollNo(rollNumber);
        if(existingStudent) {
            return res.send("Student with roll number " + rollNumber + " is existing");
        }
    
        const newStudent = await studentDao.createStudent(req.body);
        res.status(200).send("Student with roll number " + rollNumber + " added");
    } catch (error) {
        console.error("Error while creating student: " + error);
        res.status(400).send("Failed to add student");
    }
}

async function getAllStudents(req, res) {
    const students = await studentDao.getAllStudents();
    console.log("service: " + students);
    res.status(200).json(students);
}

// async function getAllStudents(req, res) {
//     return await studentDao.getAllStudents();
// }

function getStudentByRollNo(rollNumber) {
    return studentDao.getStudentByRollNo(rollNumber);
}

function getStudentByNameAndRollNo(rollNumber, name) {
    return studentDao.getStudentByNameAndRollNo(rollNumber, name);
}

function getStudentByEmail(email) {
    return studentDao.getStudentByEmail(email);
}

async function deleteStudentByRollNumber(req, res) {
    try {
        const { rollNumber } = req.params;

        const student = await studentDao.getStudentByRollNo(rollNumber);
        if(!student) {
            return res.status(400).send("Student with roll number " + rollNumber + " do not exist");
        }

        await studentDao.deleteStudent(student);
        return res.status(200).send("Student with roll number " + rollNumber + " removed successfully");
    }
    catch(error) {
        console.error("Error while removing student " + error);
        return res.status(400).send("Failed to remove student");
    }
}

async function updateStudentByRollNumber(req, res) {
    try {
        const updateRequest = req.body;

        if(!updateRequest.rollNumber) {
            return res.status(400).send("Update request must have roll number");
        }

        const existingStudent = await studentDao.getStudentByRollNo(updateRequest.rollNumber);
        if(!existingStudent) {
            return res.status(400).send("Student with roll number " + updateRequest.rollNumber + " do not exist");
        }

        await studentDao.updateStudent(existingStudent, updateRequest);
        return res.status(200).send("Student with roll number " + updateRequest.rollNumber + " updated successfully");
    }
    catch(error) {
        console.error("Error while updating student " + error);
        return res.status(400).send("Failed to update student");
    }
}

module.exports = {
  createStudent,
  getAllStudents,
  getStudentByRollNo,
  getStudentByNameAndRollNo,
  getStudentByEmail,
  deleteStudentByRollNumber,
  updateStudentByRollNumber
};