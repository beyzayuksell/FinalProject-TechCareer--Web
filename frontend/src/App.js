import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import Header from "./components/Header";
import Home from "./components/Home";
import ListBook from "./components/ListBook";
import CreateBook from "./components/CreateBook";
import ViewBook from "./components/ViewBook";
import UpdateBook from "./components/UpdateBook";
import Footer from "./components/Footer";

import CreateStudentComponent from "./components/CreateStudentComponent";
import ListStudentComponent from "./components/ListStudentComponent";
import ViewStudentComponent from "./components/ViewStudentComponent";
import UpdateStudentComponent from "./components/UpdateStudentComponent";

import Login from "./components/User/Login";
import Register from "./components/User/Register";
import UserList from "./components/User/UserList";

// non-stateless:durumsuz yani bir yere değer döndermeyen:void
const App = () => {
  window.onbeforeunload = (event) => {
    const e = event || window.event;
    e.preventDefault();
    if (e) {
      e.returnValue = "";
    }
    return "";
  };

  return (
    <Router>
      <Header />
      <br />
      <Container>
        <Row>
          <Col lg={12} className={"margin-top"}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/home" exact component={Home} />
              <Route path="/students" component={ListStudentComponent}></Route>
              <Route
                path="/view-student/:id"
                component={ViewStudentComponent}
              ></Route>
              <Route
                path="/add-student/_add"
                component={CreateStudentComponent}
              ></Route>
              <Route
                path="/update-student/:id"
                component={UpdateStudentComponent}
              ></Route>

              <Route path="/books" component={ListBook}></Route>
              <Route path="/add-book/:id" component={CreateBook}></Route>
              <Route path="/view-book/:id" component={ViewBook}></Route>
              <Route path="/update-book/:id" component={UpdateBook}></Route>

              <Route path="/register" exact component={Register} />
              <Route path="/login" exact component={Login} />
              <Route
                path="/logout"
                exact
                component={() => <Login message="Başarıyla Çıkış Yaptınız." />}
              />
            </Switch>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <Footer />
    </Router>
  );
};

export default App;

/* 

  return (
    <div>
      <Router>
        <Header />
        <br />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/home" exact component={Home}></Route>
            <Route path="/books" component={ListBook}></Route>
            <Route path="/add-book/:id" component={CreateBook}></Route>
            <Route path="/view-book/:id" component={ViewBook}></Route>
            <Route path="/update-book/:id" component={UpdateBook}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/users" exact component={UserList} />
            <Route path="/login" component={Login}></Route>
            <Route
              path="/logout"
              exact
              component={() => (
                <Login message="User Logged Out Successfully." />
              )}
            />
          </Switch>
        </div>
        <br />
        <Footer />
      </Router>
    </div>
  );
};

export default App;


            <Route path="/kayıt" component={Register}></Route>
            <Route path="/giriş" component={Login}></Route>


*/
