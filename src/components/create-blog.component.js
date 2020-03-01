import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class CreateBlogs extends Component {
  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: "",
      description: "",
      date: new Date(),
      users: []
    };
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

    const blog = {
      title: this.state.title,
      description: this.state.description,
      date: this.state.date
    };

    axios
      .post("/blogs/add", blog)
      .then(res => {
        if (res.status === 200) {
          console.log('Blog Created!');
          this.props.history.push("/blog");
        }
      })
      .catch(err => alert('Error, blog not created!'));


    this.setState({
      title: "",
      description: "",
      date: new Date()
    });
  }

  render() {
    var documentCookie = document.cookie;
    var token = documentCookie.split("Bearer ");
    console.log(token);
    if (token.length === 2 && token.includes("dadmin=") || token.includes("auth=; dadmin=")) {
      return (
        <div style={{ fontFamily: 'Optima' }} className="m-4">
          <h3>Create New Blog</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Title:</label>
              <input
                type="text"
                required
                className="form-control"
                value={this.state.title}
                onChange={this.onChangeTitle}
              />
            </div>
            <div className="form-group">
              <label>Body:</label>
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
                value="Create Blog"
                className="btn btn-success"
              />
            </div>
          </form>
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