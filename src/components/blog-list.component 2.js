import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import HomeImage from "../images/newdadhome.jpeg";
import FamImage from "../images/happyfam.jpeg";
import LegoImage from "../images/legos.JPG";
import RocksImage from "../images/rocks.jpeg";
import BackpackImage from "../images/backpack.JPG";
import TheNewDadImage from "../images/TheNewDad.jpeg";


const Blog = props => (
    
    <div className="card m-4" style={{ width: '18rem' }}>
        <img className="card-img-top" src={TheNewDadImage} alt="Card image cap"></img>
        <div className="card-body">
            <h5 className="card-title">{props.blog.title}</h5>
            <em className="card-text">By: {props.blog.username}</em><br></br>
            <p></p>
            <a href={'/display/' + props.blog._id}  className="btn btn-primary">Read</a>
        </div>
    </div>

)

export default class BlogList extends Component {
    constructor(props) {
        super(props);

        this.deleteBlog = this.deleteBlog.bind(this);

        this.state = { blogs: [] };
    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/posts/")
            .then(response => {
                this.setState({ blogs: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    deleteBlog(id) {
        axios
            .delete("http://localhost:5000/posts/" + id)
            .then(res => console.log(res.data));

        this.setState({
            blogs: this.state.blogs.filter(el => el._id !== id),
        });
    }

    blogList() {
        return this.state.blogs.map(currentblog => {
            return (
                <Blog
                    blog={currentblog}
                    deleteBlog={this.deleteBlog}
                    key={currentblog._id}
                />
            );
        });
    }

    render() {
        
        return (
            <div>
                <img src={HomeImage} className='img-fluid' />
                <h3 className='text-center mt-5'>BLOG POSTS</h3>
                <div className="containter">
                    <div className="row ml-5">
                        {this.blogList()}
                    </div>
                </div >
            </div>
        );
    }
}
