import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faSignInAlt,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { logoutUser } from "../services/index";

const Header = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutUser());
  };

  const guestLinks = (
    <>
      <div className="me-auto"></div>
      <Nav className="navbar-right">
        <Link to={"/register"} className="nav-link">
          <FontAwesomeIcon icon={faUserPlus} /> Kayıt Ol
        </Link>
        <Link to={"/login"} className="nav-link">
          <FontAwesomeIcon icon={faSignInAlt} /> Giriş Yap
        </Link>
      </Nav>
    </>
  );

  const userLinks = (
    <>
      <Nav className="me-auto">
        <Link to={"/books"} className="nav-link">
          <i className="fa-solid fa-list"></i> Kitap Listesi
        </Link>

        <Link to={"/add-book/_add"} className="nav-link">
          <i className="fa-solid fa-add"></i> Kitap Ekle
        </Link>
      </Nav>
      <Nav className="navbar-right">
        <Link to={"logout"} className="nav-link" onClick={logout}>
          <FontAwesomeIcon icon={faSignOutAlt} /> Çıkış Yap
        </Link>
      </Nav>
    </>
  );

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link to={auth.isLoggedIn ? "home" : ""} className="navbar-brand">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Book_icon_1.png"
            width="50"
            height="50"
            alt="brand"
          />{" "}
          Kütüphane Sistemi
        </Link>
        {auth.isLoggedIn ? userLinks : guestLinks}
      </Container>
    </Navbar>
  );
};

export default Header;

/*
// <Link> ve <Nav.Link> Farkı
//<Nav.Link></Nav.Link>
// Bu tag ler kullanarak path(ex: href="/books") verip proje çalıştırıldığında yeni sayfaya gidiyor. Yeni sayfaya gitmeden
// "Siteden çıkılsın mı diye uyarı veriyor." Ve sayfadan çıkıyor. Login - Register sayfasına gidiyor. Ama gitmemesi lazım.
//Bunun için link teg ini kullanıyoruz.

// <Link> </Link>
// Bu tag ler kullanarak path(href="/register") verip proje çalıştırıldığında aynı sayfada kalıyor.Aynı sayfada kalıyor.  
// Sistemden çıkış yapmıyor.



  const guestLinks = (
      <Nav className="me-auto">
      </Nav>
      <Nav className="navbar-right">
        <Nav.Link href="/register">
          <FontAwesomeIcon icon={faUserPlus} /> Kayıt Ol
        </Nav.Link>
        <Nav.Link href="/login">
          <FontAwesomeIcon icon={faSignInAlt} /> Giriş Yap
        </Nav.Link>
      </Nav>
 
  );



  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link
            to={auth.isLoggedIn ? "books" : "anasayfa"}
            className="navbar-brand"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Book_icon_1.png"
              width="50"
              height="50"
              alt="brand"
            />{" "}
            Kütüphane Sistemi
          </Link>
          {auth.isLoggedIn ? userLinks : guestLinks}
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

/*

return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Book_icon_1.png"
              width="50"
              height="50"
              alt="brand"
            />
            Kütüphane Sistemi
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/"></Nav.Link>
            <Nav.Link href="/anasayfa">
              <i className="fa-solid fa-home"></i> Anasayfa
            </Nav.Link>
            <Nav.Link href="/">
              <i className="fa-solid fa-list"></i> Kitap Listesi
            </Nav.Link>
            <Nav.Link href="/add-book/_add">
              <i className="fa-solid fa-add"></i> Kitap Ekle
            </Nav.Link>
          </Nav>

          <Nav className="navbar-right">
            <Nav.Link href="/kayıt">
              <FontAwesomeIcon icon={faUserPlus} /> Kayıt Ol
            </Nav.Link>
            <Nav.Link href="/giriş">
              <FontAwesomeIcon icon={faSignInAlt} /> Giriş Yap
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );



*/
