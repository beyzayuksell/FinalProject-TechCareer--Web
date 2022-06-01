import React, { Component } from "react";
import StudentService from "../services/StudentService";

class CreateStudentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // step 2
      id: this.props.match.params.id,
      /* studentID: this.props.match.params.studentId, */
      studentName: "",
      studentSurname: "",
      studentEmail: "",
    };

    /*  this.changeStudentIDHandler = this.changeStudentIDHandler.bind(this); */
    this.changeStudentNameHandler = this.changeStudentNameHandler.bind(this);
    this.changeStudentSurnameHandler =
      this.changeStudentSurnameHandler.bind(this);
    this.changeStudentEmailHandler = this.changeStudentEmailHandler.bind(this);
    this.saveStudent = this.saveStudent.bind(this);
  }

  // step 3
  componentDidMount() {
    // step 4
    if (this.state.id === "_add") {
      return;
    }
  }
  saveStudent = (e) => {
    e.preventDefault();
    let student = {
      studentName: this.state.studentName,
      studentSurname: this.state.studentSurname,
      studentEmail: this.state.studentEmail,
    };
    console.log("student => " + JSON.stringify(student));

    // step 5

    StudentService.createStudent(student).then((res) => {
      this.props.history.push("/students");
    });
  };

  /*   changeStudentIDHandler = (event) => {
        this.setState({ studentId: event.target.value });
    } */

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
              {<h3 className="text-center">Öğrenci Ekleme Sayfası</h3>}
              <div className="card-body">
                <form>
                  {/*    <div className="form-group">
                                        <label> Student ID: </label>
                                        <input placeholder="Student ID" name="studentId" className="form-control"
                                            value={this.state.studentId} onChange={this.changeStudentIDHandler} />
                                    </div> */}
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
                    onClick={this.saveStudent}
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

export default CreateStudentComponent;
