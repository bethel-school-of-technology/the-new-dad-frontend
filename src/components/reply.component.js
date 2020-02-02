import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class DisplayBlog extends Component {
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
  render() {
    console.log(this.state.post.description);
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
