import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faEnvelope,
  faLock,
  faUndo,
} from "@fortawesome/free-solid-svg-icons";
import { authenticateUser } from "../../services";

const Login = (props) => {
  const [error, setError] = useState();
  const [show, setShow] = useState(true);

  const initialState = {
    email: "",
    password: "",
  };

  const [user, setUser] = useState(initialState);

  const credentialChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const dispatch = useDispatch();

  const validateUser = () => {
    dispatch(authenticateUser(user.email, user.password))
      .then((response) => {
        console.log(response.data);
        return props.history.push("/home");
      })
      .catch((error) => {
        console.log(error.message);
        setShow(true);
        resetLoginForm();
        setError("Invalid email and password");
      });
  };

  const resetLoginForm = () => {
    setUser(initialState);
  };

  return (
    <div>
      <br />
      {show && props.message && (
        <Alert variant="success" onClose={() => setShow(false)} dismissible>
          {props.message}
        </Alert>
      )}
      {show && error && (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          {error}
        </Alert>
      )}
      <div
        className={
          "border border-dark bg-dark text-white card col-md-6 offset-md-3 offset-md-3"
        }
      >
        <Card className={"border border-dark bg-dark text-white"}>
          <Card.Header>
            <FontAwesomeIcon icon={faSignInAlt} /> Giriş
          </Card.Header>
          <Card.Body>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                {" "}
                <FontAwesomeIcon icon={faEnvelope} /> Mail
              </Form.Label>
              <Form.Control
                required
                autoComplete="off"
                type="text"
                name="email"
                value={user.email}
                onChange={credentialChange}
                placeholder=" Mail Adresi Giriniz"
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
                onChange={credentialChange}
                placeholder="Şifre Giriniz"
              />
            </Form.Group>
          </Card.Body>
          <Card.Footer style={{ textAlign: "right" }}>
            <Button
              size="sm"
              type="button"
              variant="success"
              onClick={validateUser}
              disabled={user.email.length === 0 || user.password.length === 0}
            >
              <FontAwesomeIcon icon={faSignInAlt} /> Giriş Yap
            </Button>{" "}
            <Button
              size="sm"
              type="button"
              variant="info"
              onClick={resetLoginForm}
              disabled={user.email.length === 0 && user.password.length === 0}
            >
              <FontAwesomeIcon icon={faUndo} /> Temizle
            </Button>
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
};

export default Login;

/*
  return (
    <div>
      <Card
        className={
          "border border-dark bg-dark text-white card col-md-6 offset-md-3 offset-md-3"
        }
      >
        <Card.Header>
          <FontAwesomeIcon icon={faSignInAlt} /> Giriş
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                {" "}
                <FontAwesomeIcon icon={faEnvelope} /> Email Adresi
              </Form.Label>
              <Form.Control 
              type="email" 
              placeholder="Email Adresi Giriniz" 
                
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                {" "}
                <FontAwesomeIcon icon={faLock} /> Şifre
              </Form.Label>
              <Form.Control type="password" placeholder=" Şifre Giriniz" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Beni Hatırla" />
            </Form.Group>
          </Form>
        </Card.Body>
        <Card.Footer style={{ textAlign: "right" }}>
          <Button size="sm" type="button" variant="success">
            <FontAwesomeIcon icon={faSignInAlt} /> Giriş Yap
          </Button>{" "}
          <Button size="sm" type="button" variant="info">
            <FontAwesomeIcon icon={faUndo} /> Temizle
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Login;
*/
