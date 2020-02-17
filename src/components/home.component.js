import React, { Component } from "react";
import axios from "axios";
import HomeImage from "../images/newdadhome.jpeg";
import AnkleHangImage from "../images/anklehang.jpeg";
<<<<<<< HEAD

=======
>>>>>>> nathansbranch

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { posts: [] };
  }

  componentDidMount() {
    axios
      .get("/posts/")
      .then(response => {
        this.setState({ posts: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <img src={HomeImage} className="img-fluid" alt="banner" />
        <h1 className="text-center mt-5" style={{ fontFamily: "Optima" }}>
          THE NEW DAD BLOG
        </h1>
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
                  <div className="card-body" style={{ fontFamily: "Optima" }}>
                    <h5 className="card-title text-center">
                      Learn everything about{" "}
                    </h5>
                    <p className="card-text text-center">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <div className="col text-center">
                      <a href="/blog" className="btn btn-primary center">
                        Take me to the blogs!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </tbody>
        </table>
<<<<<<< HEAD
      </div >
=======
      </div>
>>>>>>> nathansbranch
    );
  }
}