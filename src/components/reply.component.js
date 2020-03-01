import React, { Component } from "react";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import Forum from "../images/forum.jpeg";

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 5
    }}
  />
);

export default class Reply extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);

    this.onChangeReplies = this.onChangeReplies.bind(this);

    this.state = {
      post: {
        title: "",
        name: "",
        date: new Date(),
        replies: []
      }
    };
  }
  componentDidMount() {
    axios
      .get("/posts/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          post: {
            title: response.data.title,
            name: response.data.name,
            date: new Date(response.data.date),
            replies: response.data.replies
          }
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onChangeReplies(e) {
    this.setState({
      replies: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const post = {
      replies: this.state.replies
    };
    console.log(post);

    axios
      .post(
        "/posts/reply/" + this.props.match.params.id,
        post
      )
      .then(res => console.log(res.data));
    this.props.history.push("/forum");
  }

  render() {
    const replyList = this.state.post.replies.map((reply, index) => (
      <li key={index}>{reply.reply}</li>
    ));
    var documentCookie = document.cookie;
    var token = documentCookie.split("Bearer ");
    console.log(token);
    if (token.length === 2) {
      return (
        <div style={{ fontFamily: "optima" }}>
          <img src={Forum} className='img-fluid' alt="banner" />
          <div className="m-3">
            <p></p>
            <h3>
              <em style={{ color: "green" }}>"{this.state.post.title}"</em>
            </h3>
            <h5 style={{ color: "green" }}>
              <em>-{" "}</em>
              <em >{this.state.post.name}</em>
            </h5>
            <br></br>
            <table className="table">
              <thead className="thead-light">
                <h4>Replies:</h4>
              </thead>
              <tbody><td>{replyList}</td></tbody>
            </table>
            <h5>Join the Conversation:</h5>{" "}
            <form className="btn btn-success" onSubmit={this.onSubmit}>
              <textarea
                name="text"
                onChange={this.onChangeReplies}
                cols="50"
                rows="3"
                maxLength="280"
                placeholder="Write a response and leave your name!"
              ></textarea>
              <br />
              <input type="submit" value="Submit!" className="btn btn-success" />
            </form>
            <ColoredLine color="black" />
          </div>
        </div>
      )
    } else {
      return (
        <div style={{ fontFamily: "Optima" }} className="m-3">
          <h3>Please log in to view!</h3>
          <a href="/login" className="btn btn-success center">
            Login
        </a>
        </div>
      );
    }
  }
}