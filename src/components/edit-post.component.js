import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Reply = props => (
  <tr>
    <td>{props.reply.reply}</td>
      <br></br>
      <a
        href="#"
        onClick={() => {
          props.deleteReply(props.reply._id);
        }}
        className="btn-sm btn-warning"
      >
        delete
      </a>
  </tr>
);

export default class EditPost extends Component {
  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    // this.onChangeReplies = this.onChangeReplies.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.deleteReply = this.deleteReply.bind(this);

    this.state = {
      title: "",
      name: "",
      date: new Date(),
      replies: []
    };
  }

  componentDidMount() {
    console.log(process.env);

    axios
      .get("/posts/" + this.props.match.params.id)
      .then(response => {
        console.log(response.data);
        this.setState({
          title: response.data.title,
          name: response.data.name,
          date: new Date(response.data.date),
          replies: response.data.replies
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  deleteReply(id) {
    axios
      .post("/posts/" + id)
      .then(res => console.log(res.data));

    this.setState({
      posts: this.state.replies.filter(el => el._id !== id)
    });
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      name: this.state.name,
      date: this.state.date,
      replies: this.state.replies
    };

    console.log(post);

    axios
      .post("/posts/update/" + this.props.match.params.id, post)
      .then(response => {
        console.log(response);
        this.props.history.push("/adminforumlist");
      })
      .catch(err => {
        console.error(err);
        alert('Something is bogus');
      });
  }

  // deleteReply(id) {
  //   axios.delete("/posts/" + id).then(res => console.log(res.data));

  //   this.setState({
  //     replies: this.state.replies.filter(el => el._id !== id)
  //   });
  // }

  replyList() {
    return this.state.replies.map((reply, index) => {
      return (
          <Reply
            reply={reply}
            deleteReply={this.deleteReply}
            key={reply._id}
          />
      );
    });
  }


  render() {
    var documentCookie = document.cookie;
    var token = documentCookie.split("Bearer ");
    console.log(token);
    if (token.length === 2 && token.includes("dadmin=") || token.includes("auth=; dadmin=")) {
    return (
      <div className="m-3">
        <h3>Edit Post</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Title:</label>
            <textarea
              type="text"
              required
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}
            />
          </div>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label>Date:</label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>
          <table className="table">
            <label>Replies:</label>
            <tbody>{this.replyList()}</tbody>
          </table>
          <div className="form-group">
            <input
              type="submit"
              value="Edit Question"
              className="btn btn-success"
            />
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <div style={{ fontFamily: "Optima" }} className="m-3">
        <h3>Oops! You do not have access!</h3>
        <a href="/login" className="btn btn-success center">
          Login
        </a>
      </div>
    );
  }
  }
}