import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      password: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const login = {
      username: this.state.username,
      password: this.state.password
    };

    axios
      .post("http://localhost:5000/users/login", login)
      .then(response => {
          if (response.data === "Wrong password") {
            console.log(response);
            alert('Invalid password! Please try again.');
          } if (response.data !== "Wrong password" && response.status === 200) {
            console.log(response);
            alert('You are logged in!')
            this.props.history.push("/");
          }
          })
      .catch(error => {
        console.log('Login Error:', error)
        alert('Invalid username or password, please try again!'); 
      })
  } 

  render() {
    return (
      <div style={{ fontFamily: "optima"}}>
        <h3>Login</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              required
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Login" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}