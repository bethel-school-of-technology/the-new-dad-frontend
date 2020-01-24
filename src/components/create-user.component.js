import React, { Component } from "react";
import axios from "axios";


export default class CreateUsers extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePost = this.onChangePost.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      email: "",
      post: ""
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
    })
  }

  onChangePost(e) {
    this.setState({
      post: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      email: this.state.email,
      post: this.state.post
    };

    axios
      .post("http://localhost:5000/users/add", user)
      .then(res => console.log(res.data));

      //abstraction*

    this.setState({
      username: "",
      email: "",
      post: ""
    });
  }

  render() {
    return (
      <div>
        <h3>Provide Name and Email to Participate</h3>
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
              type="text"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}/>
          </div>
          
          <div className="form-group">
            <label for="exampleTextarea">Post Question:</label>
            <textarea 
              className="form-control" 
              id="post-question" 
              rows="3">
              </textarea>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
