import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
    
    // this.onChangeUsername = this.onChangeUsername.bind(this);
    // this.onChangePassword = this.onChangePassword.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);

    
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    const login = {
      username: this.state.username,
      password: this.state.password
    };
    axios
        .post("/users/login", login)
    .then(res => {
      if (res.status === 200) {
        console.log(res);
        alert('You are logged in!');
        this.props.history.push('/');
      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      alert('Error logging in please try again');
    });
  }

  // onChangeUsername(e) {
  //   this.setState({
  //     username: e.target.value
  //   });
  // }

  // onChangePassword(e) {
  //   this.setState({
  //     password: e.target.value
  //   });
  // }

  // onSubmit(e) {
  //   e.preventDefault();
  //   alert('Authentication coming soon!');

    // const login = {
    //   username: this.state.username,
    //   password: this.state.password
    // };

  //   // axios
  //   //   .post("/users/login", login)
  //   //   .then(response => {
  //   //       if (response.data === "Wrong password") {
  //   //         console.log(response);
  //   //         alert('Invalid password! Please try again.');
  //   //       } if (response.data !== "Wrong password" && response.status === 200) {
  //   //         console.log(response);
  //   //         alert('You are logged in!')
  //   //         this.props.history.push("/");
  //   //       }
  //   //       })
  //   //   .catch(error => {
  //   //     console.log('Login Error:', error)
  //   //     alert('Invalid username or password, please try again!'); 
  //   //   })
  // } 

  render() {
    return (
      <div style={{ fontFamily: "optima"}}>
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
            <input type="submit" value="Login" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}