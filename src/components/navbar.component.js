import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-dark"
          style={{ fontFamily: "Optima" }}
        >
          <a className="navbar-brand" href="/">
            The New Dad
          </a>
          <button
            className="navbar-toggler collapsed"
            data-toggle="collapse"
            type="button"
            data-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/blog">
                  Blog
                </a>
              </li>
              <li className="nav-item">
<<<<<<< HEAD
                <a className="nav-link" href="/createblog">Create Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/user">Create Account</a>
=======
                <a className="nav-link" href="/createblog">
                  Create Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/user">
                  Create Account
                </a>
>>>>>>> nathansbranch
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/logout">
                  Logout
                </a>
              </li>
              <li className="navbar-item">
                <Link to="/createposts" className="nav-link">
                  Post Question
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/forum" className="nav-link">
                  Forum
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}