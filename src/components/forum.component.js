import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Logo from "../images/newdadhome.jpeg";

const Post = props => (
  <tr>
    <td>{props.post.username}</td>
    <td>{props.post.description}</td>
    <td>{props.post.date.substring(0, 10)}</td>
    <td>
      <Link to={'/edit/' + props.post._id}>edit</Link> | <a href='#' onClick={() => { props.deletePost(props.post._id) }}>delete</a>
    </td>
  </tr>
)

export default class postList extends Component {
  constructor(props) {
    super(props);

    this.deletePost = this.deletePost.bind(this);

    this.state = { posts: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/posts/")
      .then(response => {
        this.setState({ posts: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  deletePost(id) {
    axios
      .delete("http://localhost:5000/posts/" + id)
      .then(res => console.log(res.data));

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
      <div>
        <img src={Logo} className='img-fluid' />
        <h3>Posts</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <h3 className="card-header">Card header</h3>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
            </div>
            <img></img>
            <div className="card-body">
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
            <div className="card-body">
              <a href="#" className="card-link">Card link</a>
              <a href="#" className="card-link">Another link</a>
            </div>
            <div className="card-footer text-muted">
              2 days ago
            </div>

          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Card title</h4>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="card-link">Card link</a>
              <a href="#" className="card-link">Another link</a>
            </div>
          {this.postList()}</div>
          </tbody>
        </table>
      </div >
    );
  }
}
