import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import PostList from "./components/list.component";
import Edit from "./components/edit";
import Create from "./components/create-post";
import CreateUser from "./components/create-user";
import Login from './components/login'

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={PostList} />
        <Route path="/edit/:id" component={Edit} />
        <Route path="/create" exact component={Create} />
        <Route path="/user" component={CreateUser} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
