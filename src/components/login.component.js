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

<<<<<<< HEAD:src/components/login.component.js
  handleInputChange = (event) => {
=======
  handleInputChange = event => {
>>>>>>> nathansbranch:src/components/login.component.js
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
<<<<<<< HEAD:src/components/login.component.js
  }

  onSubmit = (event) => {
=======
  };

  onSubmit = event => {
>>>>>>> nathansbranch:src/components/login.component.js
    event.preventDefault();
    const login = {
      username: this.state.username,
      password: this.state.password
    };
    axios
<<<<<<< HEAD:src/components/login.component.js
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
=======
      .post("/users/login", login)
      .then(res => {
        if (res.status === 200) {
          console.log(res);
          alert("You are logged in!");
          this.props.history.push("/");
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch(err => {
        console.error(err);
        alert("Error logging in please try again");
      });
  };
>>>>>>> nathansbranch:src/components/login.component.js

  render() {
    return (
      <div style={{ fontFamily: "optima" }}>
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