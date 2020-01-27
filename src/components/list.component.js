import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import HomeImage from "../images/newdadhome.jpeg";
import FamImage from "../images/happyfam.jpeg";

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
        <img src={HomeImage} className='img-fluid' />
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

                <div className="card" style={{ width: '18rem' }}>
                  <img className="card-img-top" src={FamImage} alt="Card image cap"></img>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>

                <div className="card" style={{ width: '18rem' }}>
                  <img className="card-img-top" src={FamImage} alt="Card image cap"></img>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
                {this.postList()}
          </tbody>
        </table>
      </div >
    );
  }
}
