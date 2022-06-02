import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Form, Button } from "react-bootstrap";
import {
  faSignInAlt,
  faEnvelope,
  faLock,
  faUndo,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { registerUser } from "../../services/index";
import MyToast from "../MyToast";

const Register = (props) => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  const initialState = {
    name: "",
    email: "",
    password: "",
    mobile: "",
  };

  const [user, setUser] = useState(initialState);

  const userChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const dispatch = useDispatch();

  const saveUser = () => {
    dispatch(registerUser(user))
      .then((response) => {
        setShow(true);
        setMessage(response.message);
        resetRegisterForm();
        setTimeout(() => {
          setShow(false);
          props.history.push("/login");
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const resetRegisterForm = () => {
    setUser(initialState);
  };

  return (
    <div>
      <div style={{ display: show ? "block" : "none" }}>
        <MyToast show={show} message={message} type={"success"} />
      </div>
      <br />
      <Card className={"border border-dark bg-dark text-white"}>
        <Card.Header>
          <FontAwesomeIcon icon={faSignInAlt} /> Kayıt Formu
        </Card.Header>
        <Card.Body>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              {" "}
              <FontAwesomeIcon icon={faUser} /> Ad
            </Form.Label>
            <Form.Control
              required
              autoComplete="off"
              type="text"
              name="name"
              value={user.name}
              onChange={userChange}
              placeholder="Ad Giriniz"
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              {" "}
              <FontAwesomeIcon icon={faEnvelope} /> Mail Adresi
            </Form.Label>
            <Form.Control
              required
              autoComplete="off"
              type="text"
              name="email"
              value={user.email}
              onChange={userChange}
              placeholder="Mail Adresi Giriniz"
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
              {" "}
              <FontAwesomeIcon icon={faLock} /> Şifre
            </Form.Label>
            <Form.Control
              required
              autoComplete="off"
              type="password"
              name="password"
              value={user.password}
              onChange={userChange}
              placeholder="Şifre Giriniz"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              {" "}
              <FontAwesomeIcon icon={faPhone} /> Telefon
            </Form.Label>
            <Form.Control
              required
              autoComplete="off"
              type="text"
              name="mobile"
              value={user.mobile}
              onChange={userChange}
              placeholder="Telefon Numarası Giriniz"
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Beni Hatırla" />
          </Form.Group>
          <div style={{ textAlign: "right" }}>
            <Button
              size="sm"
              type="button"
              variant="success"
              onClick={saveUser}
              disabled={user.email.length === 0 || user.password.length === 0}
            >
              <FontAwesomeIcon icon={faSignInAlt} /> Kayıt Ol
            </Button>{" "}
            <Button
              size="sm"
              type="button"
              variant="info"
              onClick={resetRegisterForm}
            >
              <FontAwesomeIcon icon={faUndo} /> Temizle
            </Button>
          </div>
        </Card.Body>
      </Card>
      <br />
    </div>
  );
};

export default Register;

/* 
    return (
      <div>
        <Card
          className={
            "border border-dark bg-dark text-white col-md-6 offset-md-3 offset-md-3"
          }
        >
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
            <Button size="md" type="button" variant="success">
              <FontAwesomeIcon icon={faSignInAlt} /> Kayıt Ol
            </Button>{" "}
            <Button size="md" type="button" variant="info">
              <FontAwesomeIcon icon={faUndo} /> Temizle
            </Button>
          </Card.Footer>
        </Card>
      </div>
    );
  }

*/
