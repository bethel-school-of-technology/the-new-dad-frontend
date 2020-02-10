import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class CreateBlogs extends Component {
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

  componentDidMount() {
    axios.get("http://localhost:5000/users/").then(response => {
      if (response.data.length > 0) {
        this.setState({
          users: response.data.map(user => user.username)
        });
      }
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

    const blog = {
      username: this.state.username,
      title: this.state.title,
      description: this.state.description,
      date: this.state.date
    };

    axios
      .post("http://localhost:5000/blogs/add", blog)
      .then(res => {
        if (res.status === 200) {
          console.log('Blog Created!');
        this.props.history.push("/blog");
      }})
      .catch(err => alert('Error, blog not created!'));


    this.setState({
      username: "",
      title: "",
      description: "",
      date: new Date()
    });
  }


  render() {
    return (
      <div style={{ fontFamily: 'Optima' }}>
        <h3>Create New Blog</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name: </label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            >
              {this.state.users.map(function(user) {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>
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
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}