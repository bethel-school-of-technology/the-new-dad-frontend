import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Blog = props => (
  <tr>
    <td>{props.blog.username}</td>
    <td>{props.blog.title}</td>
    <td>{props.blog.description}</td>
    <td>{props.blog.date.substring(0, 10)}</td>
    <td>
      <Link to={"/edit/" + props.blog._id}>edit</Link> |{" "}
      <a
        href="#"
        onClick={() => {
          props.deleteBlog(props.blog._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);
export default class blogList extends Component {
  constructor(props) {
    super(props);
    this.deleteBlog = this.deleteBlog.bind(this);
    this.state = { blogs: [] };
  }
  componentDidMount() {
    console.log(process.env);
    axios
      .get("/blogs/")
      .then(response => {
        this.setState({ blogs: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  deleteBlog(id) {
    axios.delete("/blogs/" + id).then(res => console.log(res.data));
    this.setState({
      blogs: this.state.blogs.filter(el => el._id !== id)
    });
  }
  blogList() {
    return this.state.blogs.map(currentblog => {
      return (
        <Blog
          blog={currentblog}
          deleteBlog={this.deleteBlog}
          key={currentblog._id}
        />
      );
    });
  }
  render() {
    return (
      <div style={{ fontFamily: "optima" }}>
        <h1>Admin Blog List</h1>
        <table className="table">
          <thead className="thead-light">
            <th>Name</th>
            <th>Title</th>
            <th>Body</th>
            <th>Date</th>
            <th></th>
          </thead>
          <tbody>{this.blogList()}</tbody>
        </table>
      </div>
    );
  }
}
