import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component";
import Login from "./components/login.components";
import EditPost from "./components/editpost.component";
import CreateBlog from "./components/create-blog.component";
import CreatePosts from "./components/create-post.component";
import CreateUsers from "./components/create-user.components";
import BlogList from "./components/blog-list.component";
import Display from "./components/display.component";
import AdminBlogList from "./components/admin-blog-list.component";
import Home from "./components/home.component";
import Footer from "./components/footer.component";
import Forum from "./components/forum.component";
import PageWithComments from "./components/reply.component";

import "./index.css";

function App() {
  return (
    <Router>
      <div className="container content-style">
        <Navbar />
        <br />
        <Route path="/" exact component={Home} />
        <Route path="/edit-post/:id" component={EditPost} />
        <Route path="/createblog" exact component={CreateBlog} />
        <Route path="/user" component={CreateUsers} />
        <Route path="/login" component={Login} />
        <Route path="/blog" component={BlogList} />
        <Route path="/display/:id" component={Display} />
        <Route path="/adminbloglist" component={AdminBlogList} />
        <Route path="/" exact component={Home} />
        <Route path="/edit/:id" component={EditPost} />
        <Route path="/createpost" exact component={CreatePosts} />
        <Route path="/forum" component={Forum} />
        <Route path="/reply/:id" component={PageWithComments} />

        <Footer />
      </div>
    </Router>
  );
}
export default App;
