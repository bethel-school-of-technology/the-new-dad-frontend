import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class UserCreated extends Component {
    state = {}
    render() {
        return (
            <div style={{ fontFamily: 'Optima' }} className="m-3">
                <h3>User Successfully Created!</h3>
                <Link to="/login" className="btn btn-success center">Login</Link>
            </div>
        );
    }
}