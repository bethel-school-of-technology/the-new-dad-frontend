import React, { Component } from "react";
import axios from "axios";
import DadHold from "../images/dadhold.jpeg";
import Blog from "../images/blog.jpeg";



export default class DisplayBlog extends Component {

    constructor(props) {
      super(props);

      this.state = {
        blog: {
          title: "",
          description: "",
          date: new Date()
        }
      };
  }

  componentDidMount() {
    axios
      .get("/blogs/" + this.props.match.params.id)
      .then(response => {
        this.setState({ blog: {
            title: response.data.title,
            description: response.data.description,
            date: new Date(response.data.date)
          }
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div style={{ fontFamily: 'Optima' }}>
        <img src={Blog} className='img-fluid' alt="banner" />
        <p></p>
        <div className="m-4">
        <h1>{this.state.blog.title}</h1>
        <br></br>
        <p>
          {this.state.blog.description}
          </p>
          </div>
      </div>
    );
  }

}