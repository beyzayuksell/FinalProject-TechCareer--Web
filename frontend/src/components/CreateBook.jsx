import React, { Component } from "react";
import BookService from "../services/BookService";

class UpdateBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      bookTitle: "",
      bookAuthor: "",
      bookPublishedYear: "",
    };

    this.changeBookTitleHandler = this.changeBookTitleHandler.bind(this);
    this.changeBookAuthorHandler = this.changeBookAuthorHandler.bind(this);
    this.saveOrUpdateBook = this.saveOrUpdateBook.bind(this);
  }

  // step 3
  componentDidMount() {
    // step 4
    if (this.state.id === "_add") {
      return;
    } else {
      BookService.getBookById(this.state.id).then((res) => {
        let book = res.data;
        this.setState({
          bookTitle: book.bookTitle,
          bookAuthor: book.bookAuthor,
          bookPublishedYear: book.bookPublishedYear,
        });
      });
    }
  }

  saveOrUpdateBook = (e) => {
    e.preventDefault();
    let book = {
      bookTitle: this.state.bookTitle,
      bookAuthor: this.state.bookAuthor,
      bookPublishedYear: this.state.bookPublishedYear,
    };
    console.log("book => " + JSON.stringify(book));

    if (this.state.id === "_add") {
      BookService.createBook(book).then((res) => {
        this.props.history.push("/books");
      });
    } else {
      BookService.saveOrUpdateBook(book, this.state.bookId).then((res) => {
        this.props.history.push("/books");
      });
    }
  };

  changeBookTitleHandler = (event) => {
    this.setState({ bookTitle: event.target.value });
  };

  changeBookAuthorHandler = (event) => {
    this.setState({ bookAuthor: event.target.value });
  };

  changeBookPublishedYearHandler = (event) => {
    this.setState({ bookPublishedYear: event.target.value });
  };

  cancel() {
    this.props.history.push("/books");
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <div className={"border border-dark bg-dark text-white"}>
              <br />
              <h3 className="text-center">
                <i className="fa-solid fa-plus"></i> Kitap Ekle
              </h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <i className="fa-solid fa-book"></i>{" "}
                    <label> Kitap Adı: </label>
                    <input
                      placeholder="Kitap Adı Giriniz"
                      name="bookTitle"
                      className="form-control"
                      value={this.state.bookTitle}
                      onChange={this.changeBookTitleHandler}
                    />
                  </div>
                  <div className="form-group">
                    <i className="fa-solid fa-user"></i> <label> Yazar: </label>
                    <input
                      placeholder="Yazarı Giriniz"
                      name="bookAuthor"
                      className="form-control"
                      value={this.state.bookAuthor}
                      onChange={this.changeBookAuthorHandler}
                    />
                  </div>
                  <div className="form-group">
                    <i className="fa-solid fa-calendar"></i>{" "}
                    <label> Yayın Yılı: </label>
                    <input
                      placeholder="Yayın Yılını Giriniz"
                      name="bookPublishedYear"
                      className="form-control"
                      value={this.state.bookPublishedYear}
                      onChange={this.changeBookPublishedYearHandler}
                    />
                  </div>
                  <br />

                  <div class="d-flex justify-content-center">
                    <button
                      className="btn btn-success"
                      onClick={this.saveOrUpdateBook}
                    >
                      Kaydet
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={this.cancel.bind(this)}
                      style={{ marginLeft: "10px" }}
                    >
                      {" "}
                      Geri
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateBook;
