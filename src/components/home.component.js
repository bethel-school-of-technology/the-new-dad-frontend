import React, { Component } from "react";
import axios from "axios";
import HomeImage from "../images/newdadhome.jpeg";
import AnkleHangImage from "../images/anklehang.jpeg";
import Questions from "../images/questions.jpeg";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { posts: [] };
  }

  // componentDidMount() {
  //   axios
  //     .get("/posts/")
  //     .then(response => {
  //       this.setState({ posts: response.data });
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

  render() {
    return (
      <div style={{ fontFamily: "Optima" }}>
        <img src={HomeImage} className="img-fluid" alt="banner" />
        <h1 className="text-center mt-5">THE FORUM - Q & A</h1>
        <table className="table">
          <thead className="thead-light"></thead>
          <tbody>
            <div className="container">
              <div className="row">
                <div className="card m-4 align-center">
                  <img
                    className="card-top img-fluid"
                    src={Questions}
                    alt="Card-cap"
                  ></img>
                  <div className="card-body">
                    <h5 className="card-title text-center">Got Questions? </h5>
                    <p className="card-text text-center">
                      Check out commonly asked questions from new dads and ask
                      your own!
                    </p>
                    <div className="col text-center">
                      <a href="/forum" className="btn btn-success center">
                        Let's Go!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </tbody>
        </table>
        <h1 className="text-center mt-5">THE NEW DAD BLOG</h1>
        <table className="table">
          <thead className="thead-light"></thead>
          <tbody>
            <div className="container">
              <div className="row">
                <div className="card m-4 align-center">
                  <img
                    className="card-top img-fluid"
                    src={AnkleHangImage}
                    alt="Card-cap"
                  ></img>
                  <div className="card-body">
                    <h5 className="card-title text-center">
                      Learn about the new dad life!
                    </h5>
                    <p className="card-text text-center">
                      Learn the things you need to know and some you maybe
                      don't.
                    </p>
                    <div className="col text-center">
                      <a href="/blog" className="btn btn-success center">
                        Let's Go!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </tbody>
        </table>
      </div>
    );
  }
}
