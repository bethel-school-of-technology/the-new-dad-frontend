import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ fontFamily: 'Optima' }}>
          <Link className="navbar-brand" to="/">The New Dad</Link>
          <button className="navbar-toggler collapsed" data-toggle="collapse" type="button" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/blog">Blog</Link>
              </li>
              <li className="navbar-item">
                <Link to="/forum" className="nav-link">
                  Forum
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/spiritual">
                  Spiritual
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/goods">
                  DadGoods
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/user">Sign Up</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/logout">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}