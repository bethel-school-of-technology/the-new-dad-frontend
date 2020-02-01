import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import HomeImage from "../images/newdadhome.jpeg";

import AnkleHangImage from "../images/anklehang.jpeg";

const Post = props => (
  <tr>
    <td>{props.post.username}</td>
    <td>{props.post.title}</td>
    <td>{props.post.description}</td>
    <td>{props.post.date.substring(0, 10)}</td>
    <td>
      <Link to={'/edit/' + props.post._id}>edit</Link> | <a href='#' onClick={() => { props.deletePost(props.post._id) }}>delete</a>
    </td>
  </tr>
)

export default class blogList extends Component {
  constructor(props) {
    super(props);

    this.deletePost = this.deletePost.bind(this);

    this.state = { posts: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/posts/")
      .then(response => {
        this.setState({ posts: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  deletePost(id) {
    axios
      .delete("http://localhost:5000/posts/" + id)
      .then(res => console.log(res.data));

    this.setState({
      posts: this.state.posts.filter(el => el._id !== id)
    });
  }

  blogList() {
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
    return (
      <div style={{ fontFamily: "optima"}}>
        <h1>Admin Blog List</h1>
        <table className="table">
          <thead className="thead-light">
          <th>Name</th>
          <th>Title</th>
          <th>Body</th>
          <th>Date</th>
          <th></th>
          </thead>
          <tbody>
              {this.blogList()}
          </tbody>
        </table>
      </div >
    );
  }
}
