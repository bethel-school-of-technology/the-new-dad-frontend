import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="/">The New Dad</a>
                    <button className="navbar-toggler navbar-toggle collapsed" data-toggle="collapse" data-target="#collapsibleNavbar" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/create">Ask Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/user">Sign In</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search"></input>
                            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>

                        </form>
                    </div>
                </nav>
    </div>
    );
  }
}
