import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Logo from "../images/newdadhome.jpeg";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { posts: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/posts/")
      .then(response => {
        this.setState({ posts: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <img src={Logo} className="img-fluid" />
        <h3>Logged Posts</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}
