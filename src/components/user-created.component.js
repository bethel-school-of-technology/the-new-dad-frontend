import React, { Component } from "react";

export default class UserCreated extends Component {
    state = {}
    render() {
        return (
            <div style={{ fontFamily: 'Optima' }} className="m-3">
                <h3>User Successfully Created!</h3>
                <a href="/login" className="btn btn-success center">Login</a>
            </div>
        );
    }
}
