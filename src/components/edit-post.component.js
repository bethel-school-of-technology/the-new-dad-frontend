import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Reply = props => (
  <tr>
    <td>{props.Array}</td>
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

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    // this.onChangeReplies = this.onChangeReplies.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.deleteReply = this.deleteReply.bind(this);

    this.state = {
      username: "",
      title: "",
      description: "",
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
          username: response.data.username,
          title: response.data.title,
          description: response.data.description,
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
      .delete("/posts/" + this.props.match.params.id)
      .then(res => console.log(res.data));

    this.setState({
      posts: this.state.replies.filter(el => el._id !== id)
    });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date
    });
  }

  // onChangeReplies(e) {
  //   this.setState({
  //     replies: e.target.value
  //   });
  // }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      username: this.state.username,
      title: this.state.title,
      description: this.state.description,
      date: this.state.date,
      replies: this.state.replies
    };

    console.log(post);

    axios
      .post("/posts/update/" + this.props.match.params.id, post)
      .then(response => {
        console.log(response);
        this.props.history.push("/forum");
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
    // const replyList = this.state.replies.map((reply, index) => (
    //   <li key={index}>{reply.reply}<br></br><em>-{reply.username}</em></li>
    // ));

    // const replyList = this.state.replies.map((reply, index) => (
    //   <li key={index}>{reply.reply}<br></br><em>-{reply.username}</em>
    //    <br></br> <a
    //       href="#"
    //       onClick={() => {
    //         deleteReply(reply._id);
    //       }}
    //       className="btn-sm btn-warning"
    //     >
    //       delete
    //     </a>
    //   </li>
    // ));

    return (
      <div>
        <h3>Edit Post</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <input
              ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}
            />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
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

            {/* <tbody>{replyList}</tbody> */}
            <tbody>{this.replyList()}</tbody>
          </table>
          <div className="form-group">
            <input
              type="submit"
              value="Edit Question"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}