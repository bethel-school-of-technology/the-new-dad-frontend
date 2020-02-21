import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default class CreatePosts extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      username: "",
      title: "",
      description: "",
      date: new Date(),
      users: []
    };
  }
  // componentDidMount() {
  //   console.log(document.cookie);
  //   axios.get("/posts").then(response => {
  //     if (response.data.length > 0) {
  //       this.setState({
  //         users: response.data.map(user => user.username)
  //       });
  //     }
  //   });
  // }
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
      // username: this.state.username,
      title: this.state.title,
      description: this.state.description,
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
        alert("Oops! Something went wrong, please try again!")});
  }
  render() {
    // var documentCookie = document.cookie;
    // var token = documentCookie.split("Bearer ");
    // console.log(token);
    // if (token.length === 2) {
      return (
        <div style={{ fontFamily: "Optima" }} className="m-4">
          <h3>Ask a Question!</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Your Name and Question:</label>
              <input
                placeholder=" Your question here - your name"
                type="text"
                required
                className="form-control"
                value={this.state.title}
                onChange={this.onChangeTitle}
              />
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
                className="btn btn-success"
              />
            </div>
          </form>
        </div>
      )};
    //   );
    // } else {
    //   return (
    //     <div>
    //       <h3>Not logged in</h3>
    //     </div>
    //   );

    }
