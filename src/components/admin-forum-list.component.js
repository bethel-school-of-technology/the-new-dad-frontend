import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Post = props => (
  <tr>
    <td>{props.post.date.substring(0, 10)}</td>
    <td>{props.post.title}</td>
    <td>
      <Link to={"/editpost/" + props.post._id} className="btn-sm btn-success btn-block text-center">edit</Link>{" "}
      <br></br>
      <a
        href="#"
        onClick={() => {
          props.deletePost(props.post._id);
        }}
        className="btn-sm btn-block btn-warning"
      >
        delete
      </a>
    </td>
  </tr>
);

export default class AdminForumList extends Component {
  constructor(props) {
    super(props);

    this.deletePost = this.deletePost.bind(this);

    this.state = { posts: [] };
  }

  componentDidMount() {
    console.log(process.env);

    axios
      .get("/posts/")
      .then(response => {
        this.setState({ posts: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  deletePost(id) {
    axios.delete("/posts/" + id).then(res => console.log(res.data));

    this.setState({
      posts: this.state.posts.filter(el => el._id !== id)
    });
  }

  postList() {
    return this.state.posts.map(currentpost => {
      return (
        <Post
          post={currentpost}
          deletePost={this.deletePost}
          key={currentpost._id}
        />
      );
    });
  }

  render() {
    var documentCookie = document.cookie;
    var token = documentCookie.split("Bearer ");
    console.log(token);
    if (token.length === 2 && token.includes("dadmin=") || token.includes("auth=; dadmin=")) {
      return (
        <div style={{ fontFamily: 'Optima' }}>
          <h1 className="m-3">
            Admin Forum List{" "}
            <a href="/adminbloglist" className="m-3 btn btn-success">Admin Blog List</a>
            <a href="/adminlogout" className="m-3 btn btn-warning">Logout</a>
          </h1>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>Date</th>
                <th>Question</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>{this.postList()}</tbody>
          </table>
        </div>
      );
    } else {
      return (
        <div style={{ fontFamily: "Optima" }} className="m-3">
          <h3>Oops! You do not have access!</h3>
          <a href="/login" className="btn btn-success center">
            Login
          </a>
        </div>
      );
    }
  }
}
