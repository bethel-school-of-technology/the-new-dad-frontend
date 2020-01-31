import React, { Component } from "react";

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{fontFamily: 'Optima'}}>
                    <a className="navbar-brand" href="/">The New Dad</a>
                    <button className="navbar-toggler collapsed" data-toggle="collapse" data-target="#collapsibleNavbar" type="button" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
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
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
