import React, { Component } from "react";
import StudentService from "../../services/StudentService";

export default class ViewStudentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //gelen id almak
      id: this.props.match.params.id,
      student: {},
    };
  }

  //cdm
  componentDidMount() {
    StudentService.getStudentById(this.state.id).then((res) => {
      this.setState({ student: res.data });
    });
  }

  cancel() {
    this.props.history.push("/students");
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center"> Öğrenci Detay Sayfası </h3>
          <div className="card-body">
            <div className="row">
              <label> Öğrenci Adı: </label>
              <div> {this.state.student.studentName}</div>
            </div>
            <div className="row">
              <label> Öğrenci Soyadı: </label>
              <div> {this.state.student.studentSurname}</div>
            </div>
            <div className="row">
              <label> Öğrenci Email : </label>
              <div> {this.state.student.studentEmail}</div>
            </div>
            <button
              className="btn btn-danger"
              onClick={this.cancel.bind(this)}
              style={{ marginLeft: "10px" }}
            >
              Geri
            </button>
          </div>
        </div>
      </div>
    );
  }
}
