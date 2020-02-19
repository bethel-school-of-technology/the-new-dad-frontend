import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component";
import Login from "./components/login.component";
import Logout from "./components/logout.component";
import EditPost from "./components/edit-post.component";
import EditBlog from "./components/edit-blog.component";
import CreateBlogs from "./components/create-blog.component";
import CreatePosts from "./components/create-posts.component";
import CreateUsers from "./components/create-user.component";
import BlogList from "./components/blog-list.component";
import DisplayBlog from "./components/display-blog.component";
import AdminBlogList from "./components/admin-blog-list.component";
import Home from "./components/home.component";
import UserCreated from "./components/user-created.component";
import Goods from "./components/goods.component";
import AdminForumList from "./components/admin-forumlist.component";
import Spiritual from "./components/spiritual.component";

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
        <Route path="/adminforumlist" component={AdminForumList} />
        <Route path="/" exact component={Home} />
        <Route path="/editpost/:id" component={EditPost} />
        <Route path="/editblog/:id" component={EditBlog} />
        <Route path="/createblog" exact component={CreateBlogs} />
        <Route path="/user" component={CreateUsers} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/blog" component={BlogList} />
        <Route path="/displayblog/:id" component={DisplayBlog} />
        <Route path="/adminbloglist" component={AdminBlogList} />
        <Route path="/createposts" exact component={CreatePosts} />
        <Route path="/forum" component={Forum} />
        <Route path="/reply/:id" component={Reply} />
        <Route path="/usercreated" component={UserCreated} />
        <Route path="/goods" component={Goods} />
        <Route path="/spiritual" component={Spiritual} />
        <Footer />
      </div>
    </Router>
  );
}
export default App;

// import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

// import Navbar from "./components/navbar.component";
// import Login from "./components/login.component";
// import Edit from "./components/edit.component";
// import CreateBlog from "./components/create-blog.component";
// import CreatePosts from "./components/create-post.component";
// import CreateUsers from "./components/create-user.component";
// import BlogList from "./components/blog-list.component";
// import Display from "./components/display.component";
// import AdminBlogList from "./components/admin-blog-list.component";
// import Home from "./components/home.component";
// import Logout from "./components/logout.component";
// import Goods from './components/goods.component'
// import Footer from "./components/footer.component";
// import Forum from "./components/forum.component";
// import PageWithComments from "./components/reply.component";
// import "./index.css";

// function App() {
//   return (
//     <Router>
//       <div className="container content-style">
//         <Navbar />
//         <br />
//         <Route path="/" exact component={Home} />
//         <Route path="/edit/:id" component={Edit} />
//         <Route path="/createblog" exact component={CreateBlog} />
//         <Route path="/user" component={CreateUsers} />
//         <Route path="/login" component={Login} />
//         <Route path="/blog" component={BlogList} />
//         <Route path="/display/:id" component={Display} />
//         <Route path="/adminbloglist" component={AdminBlogList} />
//         <Route path="/edit/:id" component={Edit} />
//         <Route path="/createposts" exact component={CreatePosts} />
//         <Route path="/forum" component={Forum} />
//         <Route path="/reply/:id" component={PageWithComments} />
//         <Route path="/logout" component={Logout} />
//         <Route path ="/goods" component = {Goods}/>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;
