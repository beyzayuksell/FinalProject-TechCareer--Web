import React, { Component } from "react";

import BookService from "../../services/BookService";
import { Table, Button, ButtonGroup, Form, FormControl } from "react-bootstrap";

class ListBook extends Component {
  // constructor
  constructor(props) {
    super(props);
    // durum degiskeni
    this.state = {
      books: [],
    };

    // bind
    this.addBook = this.addBook.bind(this);
    this.updateBook = this.updateBook.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
  }

  // BUTON Add Router Link
  addBook() {
    this.props.history.push("/add-book/_add");
  }

  // View Sayfasına gidecek
  viewBook(id) {
    this.props.history.push(`/view-book/${id}`);
  }

  // Güncelleme Sayfasına gidecek
  updateBook(id) {
    this.props.history.push(`/update-book/${id}`);
  }
  // Delete
  deleteBook(id) {
    BookService.deleteBook(id).then((res) => {
      this.setState({
        books: this.state.books.filter((book) => book.bookId !== id),
      });
    });
  }

  //didmount
  //cdm ==>TAB :service hazırlamak için
  componentDidMount() {
    console.log("did mount çalıştı");
    BookService.getBooks().then((res) => {
      this.setState({ books: res.data });
    });
  }

  render() {
    return (
      <div>
        <br />
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th># ID</th>
              <th>Kitap Adı</th>
              <th>Kitap Yazarı</th>
              <th>Kitap Yayın Yılı</th>
              <th class="text-center"> Kitap İşlemleri</th>
            </tr>
          </thead>
          <tbody>
            {this.state.books.map((book) => (
              <tr key={book.bookId}>
                <td>{book.bookId}</td>
                <td>{book.bookTitle}</td>
                <td>{book.bookAuthor}</td>
                <td>{book.bookPublishedYear}</td>

                <td>
                  <div className="d-grid gap-2">
                    <ButtonGroup className="mb-2">
                      <Button
                        onClick={() => this.updateBook(book.bookId)}
                        variant="btn btn-success"
                      >
                        Güncelle
                      </Button>{" "}
                      <Button
                        onClick={() => this.viewBook(book.bookId)}
                        variant="btn btn-primary"
                      >
                        Göster
                      </Button>{" "}
                      <Button
                        onClick={() => this.deleteBook(book.bookId)}
                        variant="btn btn-danger"
                      >
                        Sil
                      </Button>{" "}
                    </ButtonGroup>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="d-grid gap-2">
          <Button variant="primary" size="lg" onClick={this.addBook}>
            Kitap Ekle
          </Button>
        </div>
        <br /> <br /> <br /> <br />
      </div>
    );
  }
}

export default ListBook;
