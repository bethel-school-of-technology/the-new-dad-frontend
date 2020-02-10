import React, { Component } from "react";
import axios from "axios";

export default class Logout extends Component {

    onSubmit(e) {
        e.preventDefault();
        axios
          .post("http://localhost:5000/users/logout")
          .then(res => console.log(res));
      }

    render() { 
        return ( 
            <div style={{ fontFamily: "optima"}}>
                <h3>You Are Now Logged Out</h3>
                <a href="/login" className="btn btn-primary center">Log Back In!</a>
            </div>
         );
    }
}
 
