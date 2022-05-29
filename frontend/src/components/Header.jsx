import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faSignInAlt } from "@fortawesome/free-solid-svg-icons";

export default class Header extends Component {
  render() {
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
              <Nav.Link href="/">Kitap Listesi</Nav.Link>
              <Nav.Link href="/add-book/_add">Kitap Ekle</Nav.Link>
            </Nav>

            <Nav className="navbar-right">
              <Link to={"kayıt"} className="nav-link">
                <FontAwesomeIcon icon={faUserPlus} /> Kayıt
              </Link>
              <Link to={"giriş"} className="nav-link">
                <FontAwesomeIcon icon={faSignInAlt} /> Giriş
              </Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

Header.defaultProps = {
  content: "FinalProject",
  icon: "fa-solid fa-book",
};
