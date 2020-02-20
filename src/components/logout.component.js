import React, { Component } from "react";
import axios from "axios";

export default class Logout extends Component {
  componentDidMount() {
    document.cookie = "auth=";
    axios.get("/users/logout").then(res => console.log(res));
  }
  render() {
    return (
      <div style={{ fontFamily: "optima" }}>
        <h3>You Are Now Logged Out</h3>
        <a href="/login" className="btn btn-primary center">
          Log Back In!
        </a>
      </div>
    );
  }
}