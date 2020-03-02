import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class CreatePosts extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      title: "",
      name: "",
      date: new Date(),
      users: []
    };
  }

  // onChangeUsername(e) {
  //   this.setState({
  //     username: e.target.value
  //   });
  // }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
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
      title: this.state.title,
      name: this.state.name,
      date: this.state.date
    };
    axios
      .post("/posts/add", post, {})
      .then(res => {
        if (res.status === 200) {
          console.log("Post Created!");
          this.props.history.push("/forum");
        }
      })
      .catch(err => {
        console.log(err);
        alert("Oops! Something went wrong, please try again!")
      });
  }

  render() {
    var documentCookie = document.cookie;
    var token = documentCookie.split("Bearer ");
    console.log(token);
    if (token.length === 2) {
      return (
        <div style={{ fontFamily: "Optima" }} className="m-4">
          <h3>Ask a Question!</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Your Question:</label>
              <input
                placeholder="Please be concise and direct"
                type="text"
                required
                className="form-control"
                value={this.state.title}
                onChange={this.onChangeTitle}
              />
            </div>
            <div className="form-group">
              <label>Your Name:</label>
              <input
                className="form-control"
                placeholder="Please enter your name"
                type="text"
                required
                value={this.state.name}
                onChange={this.onChangeName}
              />
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
                className="btn btn-success"
              />
            </div>
          </form>
        </div>
      )
    } else {
      return (
        <div style={{ fontFamily: "Optima" }} className="m-3">
          <h3>Please log in to ask a question!</h3>
          <a href="/login" className="btn btn-success center">
          Login
        </a>
        </div>
      );
    }
  }
}