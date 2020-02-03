import React, { Component } from "react";

export default class Navbar extends Component {

  render() {
    return (
<<<<<<< HEAD
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ fontFamily: 'Optima' }}>
          <a className="navbar-brand" href="/">The New Dad</a>
          <button className="navbar-toggler collapsed" data-toggle="collapse" type="button" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/blog">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/create">Post</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/user">Sign In</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
=======
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
>>>>>>> nathansbranch
    );
  }
}
