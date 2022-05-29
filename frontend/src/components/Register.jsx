import React, { Component } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faEnvelope,
  faLock,
  faUndo,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default class Register extends Component {
  render() {
    return (
      <div>
        <Card className={"border border-dark bg-dark text-white"}>
          <Card.Header>
            <FontAwesomeIcon icon={faSignInAlt} /> Kayıt Formu
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                  {" "}
                  <FontAwesomeIcon icon={faUser} /> Ad
                </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Adnızı Giriniz"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                  {" "}
                  <FontAwesomeIcon icon={faEnvelope} /> Email Adresi
                </Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Email Adresi Giriniz"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                  {" "}
                  <FontAwesomeIcon icon={faPhone} /> Telefon
                </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Telefon Numarası Giriniz"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>
                  {" "}
                  <FontAwesomeIcon icon={faLock} /> Şifre
                </Form.Label>
                <Form.Control
                  equired
                  type="password"
                  placeholder=" Şifre Giriniz"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Beni Hatırla" />
              </Form.Group>
            </Form>
          </Card.Body>
          <Card.Footer style={{ textAlign: "right" }}>
            <Button size="sm" type="button" variant="success">
              <FontAwesomeIcon icon={faSignInAlt} /> Kayıt Ol
            </Button>{" "}
            <Button size="sm" type="button" variant="info">
              <FontAwesomeIcon icon={faUndo} /> Temizle
            </Button>
          </Card.Footer>
        </Card>
      </div>
    );
  }
}
