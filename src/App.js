import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import Home from "./components/home.component";
import Edit from "./components/edit.component";
import Create from "./components/create.component";
import CreateUser from "./components/create-user.component";
import Footer from "./components/footer.component";
import Forum from "./components/forum.component";
import Reply from "./components/reply.component";

import "./index.css";

function App() {
  return (
    <Router>
      <div className="container content-style">
        <Navbar />
        <div className="content">
          <br />
          <Route path="/" exact component={Home} />
          <Route path="/edit/:id" component={Edit} />
          <Route path="/create" exact component={Create} />
          <Route path="/user" component={CreateUser} />
          <Route path="/forum" component={Forum} />
          <Route path="/reply/:id" component={Reply} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
