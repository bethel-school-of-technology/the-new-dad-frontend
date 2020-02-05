import React, { Component } from "react";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

export default class Reply extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        username: "",
        title: "",
        description: "",
        date: new Date()
      }
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/posts/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          post: {
            username: response.data.username,
            title: response.data.title,
            description: response.data.description,
            date: new Date(response.data.date)
          }
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }
  onChangeTitle(e) {
    this.setState({
      title: e.target.value
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
      title: this.state.title,
      description: this.state.description,
      date: this.state.date
    };
    console.log(post);
    axios
      .post("http://localhost:5000/replies/add", post)
      .then(res => console.log(res.data));
    window.location = "/forum";
  }
  render() {
    return (
      <div>
        <p>
          <h1>Reply to the Question!</h1>
          <br />
          <h3>
            Posted By:{" "}
            <em style={{ color: "blue" }}>{this.state.post.username}</em>
          </h3>
        </p>
        <p>
          <h3>
            Title: <em style={{ color: "blue" }}>{this.state.post.title}</em>
          </h3>
        </p>
        <p>
          <h3>
            Original Question:{" "}
            <em style={{ color: "blue" }}>{this.state.post.description}</em>
          </h3>
        </p>
        <h3>Reply:</h3>{" "}
        <form className="textArea" onSubmit={this.onSubmit}>
          <textarea
            name="text"
            cols="50"
            rows="3"
            maxlength="280"
            placeholder="Start typing here!"
            onKeyDown={this.onEnterPress}
          ></textarea>
          <br />
          <input type="submit" value="Submit!" className="btn btn-primary" />
        </form>
      </div>
    );
  }
}