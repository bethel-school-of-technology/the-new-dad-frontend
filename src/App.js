import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
<<<<<<< HEAD
import Login from './components/login'
import Edit from "./components/edit.component";
import Create from "./components/create.component";
import CreateUsers from "./components/create-user";
import BlogList from "./components/blog-list.component";
import Display from "./components/display.component";
import AdminBlogList from "./components/admin-blog-list.component";
import Home from "./components/home.component";

=======
<<<<<<< HEAD
import Home from "./components/home.component";
=======
import PostList from "./components/list.component";
>>>>>>> 004661b297ff2d5cd524ba1641c3057da7712228
import Edit from "./components/edit.component";
import Create from "./components/create.component";
import CreateUser from "./components/create-user.component";
import Footer from "./components/footer.component";
import Forum from "./components/forum.component";
<<<<<<< HEAD
import Reply from "./components/reply.component";
=======
>>>>>>> 004661b297ff2d5cd524ba1641c3057da7712228

import "./index.css";
>>>>>>> nathansbranch

function App() {
  return (
    <Router>
      <div className="container content-style">
        <Navbar />
<<<<<<< HEAD
        <br />
        <Route path="/" exact component={Home} />
        <Route path="/edit/:id" component={Edit} />
        <Route path="/create" exact component={Create} />
        <Route path="/user" component={CreateUsers} />
        <Route path="/login" component={Login} />
        <Route path="/blog" component={BlogList} />
        <Route path="/display/:id" component={Display} />
        <Route path="/adminbloglist" component={AdminBlogList} />
=======
        <div className="content">
          <br />
<<<<<<< HEAD
          <Route path="/" exact component={Home} />
=======
          <Route path="/" exact component={PostList} />
>>>>>>> 004661b297ff2d5cd524ba1641c3057da7712228
          <Route path="/edit/:id" component={Edit} />
          <Route path="/create" exact component={Create} />
          <Route path="/user" component={CreateUser} />
          <Route path="/forum" component={Forum} />
<<<<<<< HEAD
          <Route path="/reply/:id" component={Reply} />
=======
>>>>>>> 004661b297ff2d5cd524ba1641c3057da7712228
        </div>
        <Footer />
>>>>>>> nathansbranch
      </div>
    </Router>
  );
}

export default App;
