import React, { Component } from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import axios from "axios";

const Post = props => (
  <tr>
    <td>{props.post.username}</td>
    <td>{props.post.description}</td>
    <td>{props.post.date.substring(0, 10)}</td>
    <td>
      <Link to={"/edit/" + props.post._id}>edit</Link> |{" "}
      <a
        href="#"
        onClick={() => {
          props.deletePost(props.post._id);
        }}
      >
        delete
      </a>
      | {""}
      <a href={"/reply/" + props.post._id} className="btn btn-primary">
        Reply
      </a>
    </td>
  </tr>
);

function refreshPage() {
  window.location.reload();
}

export default class PostList extends Component {
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
    return (
      <div>
        <h1>
          Posted Questions {""}
          <button type="button" onClick={refreshPage}>
            <span>Refresh</span>
          </button>
        </h1>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.postList()}</tbody>
        </table>
=======
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class CreatePosts extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      description: "",
      date: new Date(),
      users: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/users/").then(response => {
      if (response.data.length > 0) {
        this.setState({
          users: response.data.map(user => user.username)
        });
      }
    });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      username: this.state.username,
      description: this.state.description,
      date: this.state.date
    };

    console.log(post);

    axios
      .post("http://localhost:5000/posts/add", post)
      .then(res => console.log(res.data));

    window.location = "/forum";
  }

  render() {
    return (
      <div>
        <h3>Ask a Question!</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            >
              {this.state.users.map(function(user) {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label>Description:</label>
            <textarea
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            ></textarea>
          </div>
          <div className="form-group">
            <label>Date:</label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Ask Your Question!"
              className="btn btn-primary"
            />
          </div>
        </form>
>>>>>>> 004661b297ff2d5cd524ba1641c3057da7712228
      </div>
    );
  }
}
