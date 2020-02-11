import React from "react";
import commentBox from "commentbox.io";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
export default class PageWithComments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        username: "",
        title: "",
        description: "",
        date: new Date()
      }
    };
  }
  componentDidMount() {
    this.removeCommentBox = commentBox("5635818488070144-proj");
    axios
      .get("http://localhost:5000/posts/" + this.props.match.params.id)
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
  componentWillUnmount() {
    this.removeCommentBox();
  }
  render() {
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
        <div className="commentbox" />;
      </div>
    );
  }
}
