import React, { Component } from "react";
import axios from "axios";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  handleInputChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };
  // onSubmit = event => {
  //   event.preventDefault();
  //   axios
  //     .post("/users/login", {
  //       method: "POST",
  //       body: JSON.stringify(this.state),
  //       headers: {
  //         "Content-Type": "application/json"
  //       }
  //     })
  //     .then(res => {
  //       console.log(res);
  //       if (res.status === 200) {
  //         this.props.history.push("/");
  //       } else {
  //         const error = new Error(res.error);
  //         throw error;
  //       }
  //     })
  //     .catch(err => {
  //       console.error(err);
  //       alert("Error logging in please try again");
  //     });
  // };
  onSubmit = event => {
    event.preventDefault();
    const login = {
      username: this.state.username,
      password: this.state.password
    };
    axios
      .post("/users/login", login)
      .then(response => {
        if (response.data === "Wrong password") {
          console.log(response);
          alert("Invalid password! Please try again.");
        }
        if (response.data !== "Wrong password" && response.status === 200) {
          console.log(response);
          console.log(response.headers.authorization);
          const authCookie = "auth=" + response.headers.authorization;
          document.cookie = authCookie;
          alert("You are logged in!");
          this.props.history.push("/");
        }
      })
      .catch(err => {
        console.error(err);
        alert("Error logging in please try again");
      });
  };
  render() {
    return (
      <div style={{ fontFamily: "optima" }} className="m-4">
        <h3>Login</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <input
              type="text"
              name="username"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              required
              className="form-control"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Login" className="btn btn-success" />
          </div>
        </form>
      </div>
    );
  }
}