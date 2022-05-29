import React, { Component } from "react";
import BookService from "../services/BookService";

export default class ViewBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // gelen id almak
      id: this.props.match.params.id,
      book: {},
    };
  }

  //cdm
  componentDidMount() {
    BookService.getBookById(this.state.id).then((res) => {
      this.setState({ book: res.data });
    });
  }

  cancel() {
    this.props.history.push("/books");
  }

  render() {
    return (
      <>
        <div
          className={
            "card text-center border border-dark bg-dark text-white card col-md-6 offset-md-3 offset-md-3"
          }
        >
          <div className="card-header">
            <i className="fa-solid fa-book-bookmark"></i> Kitap Hakkında
            Bilgiler
          </div>
          <div className="card-body">
            <p className="card-text ">
              <i className="fa-solid fa-book text-primary"></i>{" "}
              {this.state.book.bookTitle}
            </p>

            <p className="card-text ">
              <i className="fa-solid fa-user text-primary"></i>{" "}
              {this.state.book.bookAuthor}
            </p>

            <p className="card-text ">
              <i className="fa-solid fa-calendar-days text-primary"></i>{" "}
              {this.state.book.bookPublishedYear}
            </p>

            <p
              className="card-text text-capitalize"
              style={{ textAlign: "justify" }}
            >
              Rodya Romanoviç Raskolnikov yoksul bir gençtir; Petesburg
              Üniversitesi'ndeki hukuk öğrenimini yarıda bırakır. Aklı Batı'dan
              gelen siyasi ve felsefi düşüncelerle karmakarışıktır. Nefret
              edilen, kötü bir tefeciyi öldürecektir. Böylece finansal
              problemlerini çözerken aynı zamanda dünya kötü, değersiz bir
              parazitten temizlenecektir. Raskolnikov, daha yüksek bir amaca
              hizmet eden bir cinayetin kabul edilebilir olduğuna inanır. Bir
              sürü hesap kitaptan sonra harekete geçer ve kadının evine giderek
              onu baltayla vahşice öldürür. O anda, Alonya ile birlikte yaşayan
              ve kimseye bir zararı dokunmayan üvey kız kardeşi beklenmedik
              biçimde içeri girdiğinden, Raskolnikov onu da öldürmek zorunda
              kalır. Müşterilerin rehin için bıraktıkları birkaç küçük süs
              eşyasını alır ve kimseye görünmeden oradan ayrılır.{" "}
            </p>

            <a href="/" class="btn btn-primary">
              Detaylı Bilgi İçin Tıklayınız
            </a>
            <button
              className="btn btn-danger"
              onClick={this.cancel.bind(this)}
              style={{ marginLeft: "10px" }}
            >
              Geri
            </button>
          </div>
        </div>
        <br />
        <br />
        <br />
      </>
    );
  }
}
