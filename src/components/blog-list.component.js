import React, { Component } from "react";
import axios from "axios";
import DadHold from "../images/dadhold.jpeg";
import GreenLogo from "../images/greenlogo.jpeg";


const Blog = props => (
    
    <div className="card m-5 align-center" style={{ width: '18rem' }}>
        <img className="card-img-top" src={GreenLogo} alt="Card cap"></img>
        <div className="card-body" style={{ fontFamily: 'Optima' }}>
            <h5 className="card-title">{props.blog.title}</h5>
            <p></p>
            <a href={'/displayblog/' + props.blog._id}  className="btn btn-success">Read</a>
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
            .get("/blogs/")
            .then(response => {
                this.setState({ blogs: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    deleteBlog(id) {
        axios
            .delete("/blogs/" + id)
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
            <div style={{ fontFamily: 'Optima' }}>
                <img src={DadHold} className='img-fluid' alt="banner"/>
                <h1 className='text-center mt-5'>THE NEW DAD BLOG</h1>
                <div className="containter">
                    <div className="row ml-5 align-center">
                        {this.blogList()}
                    </div>
                </div >
            </div>
        );
    }
}