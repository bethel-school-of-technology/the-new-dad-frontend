import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Forum from "../images/forum.jpeg";

const Post = props => (
  <tr>
    <td>{props.post.date.substring(0, 10)}</td>
    <td>{props.post.title}</td>
    <td>
      <a href={"/reply/" + props.post._id} className="btn-sm btn-success">
        View
      </a>
    </td>
  </tr>
);

export default class PostList extends Component {
  constructor(props) {
    super(props);

    this.deletePost = this.deletePost.bind(this);

    this.state = { posts: [] };
  }

  componentDidMount() {
    console.log(process.env);

    axios
      .get("/posts/")
      .then(response => {
        this.setState({ posts: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  deletePost(id) {
    axios.delete("/posts/" + id).then(res => console.log(res.data));

    this.setState({
      posts: this.state.posts.filter(el => el._id !== id)
    });
  }

  postList() {
    return this.state.posts.map(currentpost => {
      return (
        <Post
          post={currentpost}
          deletePost={this.deletePost}
          key={currentpost._id}
        />
      );
    });
  }

  render() {
    return (
      <div style={{ fontFamily: 'Optima' }}>
      <img src={Forum} className='img-fluid' alt="banner" />
        <table className="table " >
          <thead className="thead-light">
            <tr>
              <th>Date</th>
              <th>Question List | <Link to="/createposts" className="btn-sm btn-success">
            Ask Us A Question!
          </Link></th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>{this.postList()}</tbody>
        </table>
      </div>
    );
  }
}
