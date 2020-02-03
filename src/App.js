import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import Login from './components/login'
import Edit from "./components/edit.component";
import CreateBlog from "./components/create-blog.component";
import CreateUsers from "./components/create-user";
import BlogList from "./components/blog-list.component";
import Display from "./components/display.component";
import AdminBlogList from "./components/admin-blog-list.component";
import Home from "./components/home.component";


function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={Home} />
        <Route path="/edit/:id" component={Edit} />
        <Route path="/createblog" exact component={CreateBlog} />
        <Route path="/user" component={CreateUsers} />
        <Route path="/login" component={Login} />
        <Route path="/blog" component={BlogList} />
        <Route path="/display/:id" component={Display} />
        <Route path="/adminbloglist" component={AdminBlogList} />
      </div>
    </Router>
  );
}

export default App;
