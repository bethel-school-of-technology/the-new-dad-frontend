import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import Login from './components/login.component';
import Logout from './components/logout.component';
import EditPost from "./components/edit-post.component";
import CreateBlogs from "./components/create-blog.component";
import CreatePosts from "./components/create-posts.component";
import CreateUsers from "./components/create-user.component";
import BlogList from "./components/blog-list.component";
import Display from "./components/display.component";
import AdminBlogList from "./components/admin-blog-list.component";
import Home from "./components/home.component";
import UserCreated from "./components/user-created.component";

import Footer from "./components/footer.component";
import Forum from "./components/forum.component";
import Reply from "./components/reply.component";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="container content-style">
        <Navbar />
        <br />
        <Route path="/" exact component={Home} />
        <Route path="/editpost/:id" component={EditPost} />
        <Route path="/createblog" exact component={CreateBlogs} />
        <Route path="/user" component={CreateUsers} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/blog" component={BlogList} />
        <Route path="/display/:id" component={Display} />
        <Route path="/adminbloglist" component={AdminBlogList} />
        <Route path="/createposts" exact component={CreatePosts} />
        <Route path="/forum" component={Forum} />
        <Route path="/reply/:id" component={Reply} />
        <Route path="/usercreated" component={UserCreated} />
        <Footer />
      </div>
    </Router>
  );
}
export default App;
