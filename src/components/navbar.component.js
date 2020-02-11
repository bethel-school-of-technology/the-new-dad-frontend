import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
                <a className="nav-link" href="/createblog">
                  Create Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/user">
                  Sign Up
                </a>
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
              <li className="nav-item">
                <a className="nav-link" href="/goods">
                  Recommended Goods
                </a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
              ></input>
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}
