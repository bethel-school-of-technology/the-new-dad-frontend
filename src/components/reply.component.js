// import React from "react";
// import commentBox from "commentbox.io";
// import "react-datepicker/dist/react-datepicker.css";
// import axios from "axios";

// export default class PageWithComments extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       post: {
//         username: "",
//         title: "",
//         description: "",
//         date: new Date()
//       }
//     };
//   }
//   componentDidMount() {
//     this.removeCommentBox = commentBox("5635818488070144-proj");
//     axios
//       .get("http://localhost:5000/posts/" + this.props.match.params.id)
//       .then(response => {
//         this.setState({
//           post: {
//             username: response.data.username,
//             title: response.data.title,
//             description: response.data.description,
//             date: new Date(response.data.date),
//             replies: response.data.replies
//           }
//         });
//       })
//       .catch(function(error) {
//         console.log(error);
//       });
//   }

//   componentWillUnmount() {
//     this.removeCommentBox();
//   }

//   render() {
//     return (
//       <div>
//         <h1>Reply to the Question!</h1>
//         <br />
//         <h3>
//           Posted By:{" "}
//           <em style={{ color: "blue" }}>{this.state.post.username}</em>
//         </h3>
//         <h3>
//           Title: <em style={{ color: "blue" }}>{this.state.post.title}</em>
//         </h3>
//         <h3>
//           Original Question:{" "}
//           <em style={{ color: "blue" }}>{this.state.post.description}</em>
//         </h3>
//         <div className="commentbox" />;
//       </div>
//     );
//   }
// }

// starts here//

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
  onSubmit(e) {
    e.preventDefault();
    const post = {
      replies: this.state.replies
    };
    console.log(post);

    axios
      .put("/posts/updatepost/" + this.props.match.params.id, post)
      .then(res => console.log(res.data));
  }

  render() {
    const replyList = this.state.post.replies.map((reply, index) => (
      <li key={index}>{reply}</li>
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
          {/* <p style={{ color: "blue" }}>{this.state.post.replies}</p> */}
        </div>
      </div>
    );
  }
}
