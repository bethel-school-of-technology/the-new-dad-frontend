import React, { Component } from "react";
import axios from "axios";

export default class CreateUsers extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      email: "",
      password: "",
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };

    axios
      .post("/users/add", user)
      .then(res => {
        if (res.status === 200) {
          console.log('User Created!');
        this.props.history.push("/usercreated");
      }})
      .catch(err => alert('User and/or email already exists! Please try again.'));

    this.setState({
      username: "",
      email: "",
      post: "",
      password: ""
    });
  }

  render() {

    return (
      <div style={{ fontFamily: 'Optima' }}  className="m-4">
        <h3>Create an Account</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
            <label>Email:</label>
            <input
              type="email"
              placeholder="ex: user@email.com"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
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
            <input type="submit" value="Submit" className="btn btn-success" />
          </div>
        </form>
      </div>
    );
    }
  }