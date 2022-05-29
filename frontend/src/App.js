import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import ListBook from "./components/ListBook";
import CreateBook from "./components/CreateBook";
import ViewBook from "./components/ViewBook";
import UpdateBook from "./components/UpdateBook";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";

// non-stateless:durumsuz yani bir yere değer döndermeyen:void
function App() {
  return (
    <div>
      <Router>
        <Header />
        <br />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListBook}></Route>
            <Route path="/books" component={ListBook}></Route>
            <Route path="/add-book/:id" component={CreateBook}></Route>
            <Route path="/view-book/:id" component={ViewBook}></Route>
            <Route path="/update-book/:id" component={UpdateBook}></Route>
            <Route path="/kayıt" component={Register}></Route>
            <Route path="/giriş" component={Login}></Route>
          </Switch>
        </div>
        <br />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
