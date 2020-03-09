import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class AdminLogout extends Component {
  componentDidMount() {
    document.cookie = "dadmin=";
    axios.get("/users/logout").then(res => console.log(res));
  }
  render() {
    return (
      <div style={{ fontFamily: "optima" }} className="m-4">
        <h3>You Are Now Logged Out</h3>
        <Link to="/login" className="btn btn-success center">
          Log Back In!
        </Link>
      </div>
    );
  }
}