import axios from "axios";

const BOOK_API_BASE_URL = "http://localhost:8080/api/v1/books";

class BookService {
  //LISTE: parametresiz return
  getBooks() {
    return axios.get(BOOK_API_BASE_URL);
  }

  //FIND
  getBookById(bookId) {
    return axios.get(BOOK_API_BASE_URL + "/" + bookId);
  }

  //CREATE
  createBook(book) {
    return axios.post(BOOK_API_BASE_URL, book);
  }

  //UPDATE
  updateBook(book, bookId) {
    return axios.put(BOOK_API_BASE_URL + "/" + bookId, book);
  }
  //DELETE
  deleteBook(bookId) {
    return axios.Delete(BOOK_API_BASE_URL + "/" + bookId);
  }
}

export default new BookService();
