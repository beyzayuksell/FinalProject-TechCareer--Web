import React, { Component } from "react";
import StudentService from "../services/StudentService";

class ListStudentComponent extends Component {
  //constructro
  constructor(props) {
    //kalıtımladığımızda
    super(props);

    //durum degiskeni
    this.state = {
      students: [],
    };

    //bind
    this.addStudent = this.addStudent.bind(this);
    this.deleteeStudent = this.deleteeStudent.bind(this);
    this.updateNewStudent = this.updateNewStudent.bind(this);
  }

  //BUTON Add Router Link
  addStudent() {
    this.props.history.push("/add-student/_add");
  }

  //View Sayfasına gidecek
  viewStudent(id) {
    this.props.history.push(`/view-student/${id}`);
  }

  //Güncelleme Sayfasına gidecek
  updateNewStudent(id) {
    this.props.history.push(`/update-student/${id}`);
  }

  //Delete
  deleteeStudent(id) {
    StudentService.deleteStudent(id).then((res) => {
      this.setState({
        students: this.state.students.filter(
          (student) => student.studentId !== id
        ),
      });
    });
  }

  //didmount
  //cdm ==>TAB :service hazırlamak için
  componentDidMount() {
    console.log("did mount çalıştı");
    StudentService.getStudents().then((res) => {
      this.setState({ students: res.data });
    });
  }

  render() {
    return (
      <div>
        <h3 className="text-danger"> Öğrenci Listesi</h3>
        <div className="container">
          <div className="row mb-3">
            <button
              className="btn btn-primary btn-dm"
              onClick={this.addStudent}
            >
              Ekleme
            </button>
          </div>

          <div className="row mb-3">
            <table className="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th>Öğrenci Adı</th>
                  <th>Öğrenci Soyadı</th>
                  <th>Öğrenci Email</th>
                  <th>İşlemler</th>
                </tr>
              </thead>
              <tbody>
                {this.state.students.map((student) => (
                  <tr key={student.id}>
                    <td>{student.studentName}</td>
                    <td>{student.studentSurname}</td>
                    <td>{student.studentEmail}</td>

                    <td>
                      <button
                        onClick={() => this.updateNewStudent(student.studentId)}
                        className="btn btn-success"
                      >
                        Güncelle
                      </button>
                      <button
                        onClick={() => this.viewStudent(student.studentId)}
                        style={{ marginLeft: "10px" }}
                        className="btn btn-primary"
                      >
                        Göster
                      </button>
                      <button
                        onClick={() => this.deleteeStudent(student.studentId)}
                        className="btn btn-danger"
                        style={{ marginLeft: "10px" }}
                      >
                        Sil
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default ListStudentComponent;
