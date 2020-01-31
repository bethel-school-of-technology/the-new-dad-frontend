import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import PostList from "./components/home.component";
import Edit from "./components/edit.component";
import Create from "./components/create.component";
import CreateUser from "./components/create-user.component";
import BlogList from "./components/blog-list.component";
import Display from "./components/display.component";
import AdminBlogList from "./components/admin-blog-list.component";


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
        <Route path="/blog" component={BlogList} />
        <Route path="/display/:id" component={Display} />
        <Route path="/adminbloglist" component={AdminBlogList} />
      </div>
    </Router>
  );
}

export default App;
