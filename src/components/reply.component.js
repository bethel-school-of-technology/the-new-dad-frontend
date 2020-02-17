import React, { Component } from "react";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

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
        username: "",
        title: "",
        description: "",
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
            username: response.data.username,
            title: response.data.title,
            description: response.data.description,
            date: new Date(response.data.date),
            replies: response.data.replies
          }
        });
      })
      .catch(function(error) {
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
      username: this.state.username,
      replies: this.state.replies
    };
    console.log(post);

    axios
      .post("/posts/update/" + this.props.match.params.id, post)
      .then(res => {
        if (res.status === 200) {
          console.log("Reply Created!");
          this.props.history.push("/reply");
        }
      })
      .catch(err => alert("Oops! Something went wrong, please try again!"));
  }
  render() {
    const replyList = this.state.post.replies.map((reply, index) => (
      <li key={index}>
        "{reply.reply}"<br></br>-<em>{reply.username}</em>
      </li>
    ));
    return (
      <div>
        <h1>Reply to the Question!</h1>
        <br />
        <h3>
          Posted By:{" "}
          <em style={{ color: "blue" }}>{this.state.post.username}</em>
        </h3>
        <h3>
          Title: <em style={{ color: "blue" }}>{this.state.post.title}</em>
        </h3>
        <h3>
          Original Question:{" "}
          <em style={{ color: "blue" }}>{this.state.post.description}</em>
        </h3>
        <h3>Reply:</h3>{" "}
        <form className="btn btn-primary" onSubmit={this.onSubmit}>
          <textarea
            name="text"
            onChange={this.onChangeReplies}
            cols="50"
            rows="3"
            maxLength="280"
            placeholder="Start typing here!"
          ></textarea>
          <br />
          <input type="submit" value="Submit!" className="btn btn-success" />
        </form>
        <ColoredLine color="black" />
        <div>
          <ul>{replyList}</ul>
        </div>
      </div>
    );
  }
}