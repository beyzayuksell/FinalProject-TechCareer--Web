import axios from "axios";

const STUDENT_API_BASE_URL = "http://localhost:8080/api/v1/students";

class StudentService {
  //LISTE: parametresiz return
  getStudents() {
    return axios.get(STUDENT_API_BASE_URL);
  }

  //FIND
  getStudentById(studentId) {
    return axios.get(STUDENT_API_BASE_URL + "/" + studentId);
  }

  //CREATE
  createStudent(student) {
    return axios.post(STUDENT_API_BASE_URL, student);
  }

  //UPDATE
  updateStudent(student, studentId) {
    return axios.put(STUDENT_API_BASE_URL + "/" + studentId, student);
  }
  //DELETE
  deleteStudent(studentId) {
    return axios.delete(STUDENT_API_BASE_URL + "/" + studentId);
  }
}

export default new StudentService();
