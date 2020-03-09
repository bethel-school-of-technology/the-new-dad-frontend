import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DadHold from "../images/dadhold.jpeg";
import GreenLogo from "../images/greenlogo.jpeg";

const Blog = props => (

  <div className="card m-5 align-center" style={{ width: '17rem' }}>
    <img className="card-img-top" src={GreenLogo} alt="Card cap"></img>
    <div className="card-body">
      <h5 className="card-title">{props.blog.title}</h5>
      <p></p>
      <Link to={'/displayblog/' + props.blog._id} className="btn btn-success">Read</Link>
    </div>
  </div>
)

export default class BlogList extends Component {
  constructor(props) {
    super(props);

    this.state = { blogs: [] };
  }

  componentDidMount() {
    axios
      .get("/blogs/")
      .then(response => {
        this.setState({ blogs: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  blogList() {
    return this.state.blogs.map(currentblog => {
      return (
        <Blog
          blog={currentblog}
          key={currentblog._id}
        />
      );
    });
  }

  render() {
    return (
      <div style={{ fontFamily: 'Optima' }}>
        <img src={DadHold} className='img-fluid' alt="banner" />
        <h1 className='text-center mt-5'>THE NEW DAD BLOG</h1>
        <div className="container">
          <div className="row ml-3 align-center">
            {this.blogList()}
          </div>
        </div >
      </div>
    );
  }
}