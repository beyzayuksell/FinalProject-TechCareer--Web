import React, { Component } from "react";
import StudentService from "../services/StudentService";

class UpdateStudentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      studentName: "",
      studentSurname: "",
      studentEmail: "",
    };
    this.changeStudentNameHandler = this.changeStudentNameHandler.bind(this);
    this.changeStudentSurnameHandler =
      this.changeStudentSurnameHandler.bind(this);
    this.changeStudentEmailHandler = this.changeStudentEmailHandler.bind(this);
    this.updateThisStudent = this.updateThisStudent.bind(this);
  }

  componentDidMount() {
    StudentService.getStudentById(this.state.id).then((res) => {
      let student = res.data;
      this.setState({
        studentName: student.studentName,
        studentSurname: student.studentSurname,
        studentEmail: student.studentEmail,
      });
    });
  }

  updateThisStudent = (e) => {
    e.preventDefault();
    let student = {
      studentName: this.state.studentName,
      studentSurname: this.state.studentSurname,
      studentEmail: this.state.studentEmail,
    };
    console.log("student => " + JSON.stringify(student));
    console.log("id => " + JSON.stringify(this.state.id));
    StudentService.updateStudent(student, this.state.id).then((res) => {
      this.props.history.push("/students");
    });
  };

  changeStudentNameHandler = (event) => {
    this.setState({ studentName: event.target.value });
  };

  changeStudentSurnameHandler = (event) => {
    this.setState({ studentSurname: event.target.value });
  };

  changeStudentEmailHandler = (event) => {
    this.setState({ studentEmail: event.target.value });
  };

  cancel() {
    this.props.history.push("/students");
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Öğrenci Güncelleme Sayfası</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Öğrenci Adı: </label>
                    <input
                      placeholder="Öğrenci Adı"
                      name="studentName"
                      className="form-control"
                      value={this.state.studentName}
                      onChange={this.changeStudentNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Öğrenci Soyadı: </label>
                    <input
                      placeholder="Öğrenci Soyadı"
                      name="studentSurname"
                      className="form-control"
                      value={this.state.studentSurname}
                      onChange={this.changeStudentSurnameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Öğrenci Email : </label>
                    <input
                      placeholder="Öğrenci Email"
                      name="studentEmail"
                      className="form-control"
                      value={this.state.studentEmail}
                      onChange={this.changeStudentEmailHandler}
                    />
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={this.updateThisStudent}
                  >
                    Kaydet
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Geri
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateStudentComponent;
