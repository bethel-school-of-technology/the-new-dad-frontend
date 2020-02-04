import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class Reply extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        username: "",
        description: "",
        date: new Date()
      }
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/posts/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          post: {
            username: response.data.username,
            description: response.data.description,
            date: new Date(response.data.date)
          }
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
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

    const reply = {
      username: this.state.username,
      description: this.state.description,
      date: this.state.date
    };

    console.log(reply);

    axios
      .post("http://localhost:5000/replies/add", reply)
      .then(res => console.log(res.data));

    window.location = "/forum";
  }
  render() {
    return (
      <div>
        <p>
          <h3>Posted By:</h3>
        </p>
        <h2>{this.state.post.username}</h2>
        <br></br>
        <p>
          <h3>Original Question</h3>
          <em>
            <h2>{this.state.post.description}</h2>
          </em>
          <br />
        </p>
        <h3>Reply:</h3> <textarea></textarea>
      </div>
    );
  }
}