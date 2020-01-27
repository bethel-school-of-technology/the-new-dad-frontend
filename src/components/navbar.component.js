import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
          <Link to="/" className="navbar-brand">
            The New Dad
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">
                  Blog
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">
                  Post Question
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/user" className="nav-link">
                  Ask Us
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/forum" className="nav-link">
                  Forum
                </Link>
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
      </header>
    );
  }
}
