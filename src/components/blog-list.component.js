import React, { Component } from "react";
import axios from "axios";
import DadHold from "../images/dadhold.jpeg";
import TheNewDad from "../images/TheNewDad.jpeg";


const Blog = props => (
    
    <div className="card m-4 align-center" style={{ width: '18rem' }}>
        <img className="card-img-top" src={TheNewDad} alt="Card cap"></img>
        <div className="card-body" style={{ fontFamily: 'Optima' }}>
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
            .get("http://localhost:5000/blogs/")
            .then(response => {
                this.setState({ blogs: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    deleteBlog(id) {
        axios
            .delete("http://localhost:5000/blogs/" + id)
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
                <img src={DadHold} className='img-fluid' alt="banner"/>
                <h1 className='text-center mt-5' style={{ fontFamily: 'Optima' }}>BLOG POSTS</h1>
                <div className="containter ">
                    <div className="row ml-5 align-center">
                        {this.blogList()}
                    </div>
                </div >
            </div>
        );
    }
}
