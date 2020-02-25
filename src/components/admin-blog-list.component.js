import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Blog = props => (
  <tr>
    <td>{props.blog.date.substring(0, 10)}</td>
    <td>{props.blog.title}</td>
    <td className="text-center">
      <Link
        to={"/editblog/" + props.blog._id}
        className="btn-sm btn-success text-center"
      >
        edit
      </Link>
     <p></p>
      <a
        href="#"
        onClick={() => {
          props.deleteBlog(props.blog._id);
        }}
        className="btn-sm btn-warning text-center"
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
        <h1 className="m-3">
          Admin Blog List{" "}
          <a href="/createblog" className="m-3 btn btn-success">
            Create New Blog
          </a>
          <a href="/adminforumlist" className="m-3 btn btn-success">
            Admin Forum List
          </a>
        </h1>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>{this.blogList()}</tbody>
        </table>
      </div>
    );
  }
}
