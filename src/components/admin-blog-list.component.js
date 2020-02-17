import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Blog = props => (
  <tr>
    <td>{props.blog.title}</td>
    <td>{props.blog.description}</td>
    <td>{props.blog.date.substring(0, 10)}</td>
    <td>
<<<<<<< HEAD
      <Link to={'/editblog/' + props.blog._id}>edit</Link> | <a href='#' onClick={() => { props.deleteBlog(props.blog._id) }}>delete</a>
    </td>
  </tr>
)
=======
      <Link to={"/editblog/" + props.blog._id}>edit</Link> |{" "}
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
>>>>>>> nathansbranch

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
<<<<<<< HEAD
    axios
      .delete("/blogs/" + id)
      .then(res => console.log(res.data));
=======
    axios.delete("/blogs/" + id).then(res => console.log(res.data));
>>>>>>> nathansbranch

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
<<<<<<< HEAD
      <div style={{ fontFamily: "optima"}}>
        <h1>Admin Blog List</h1>
        <table className="table">
          <thead className="thead-light">
          <th>Title</th>
          <th>Body</th>
          <th>Date</th>
          <th></th>
=======
      <div style={{ fontFamily: "optima" }}>
        <h1>Admin Blog List</h1>
        <table className="table">
          <thead className="thead-light">
            <th>Title</th>
            <th>Body</th>
            <th>Date</th>
            <th></th>
>>>>>>> nathansbranch
          </thead>
          <tbody>{this.blogList()}</tbody>
        </table>
      </div>
    );
  }
}