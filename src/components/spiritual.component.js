import React, { Component } from "react";
import ReactPlayer from "react-player";
import Clouds from "../images/clouds.jpeg";
import Hosting from "../images/hosting.jpeg";
import Christiandad from "../images/christiandad.jpeg";
import Good from "../images/good.jpeg";
import Killers from "../images/killers.jpeg";
import Loveon from "../images/loveon.jpeg";
import Bethel from "../images/bethel.png";
export default class Spiritual extends Component {
  render() {
    return (
      <div className="spiritual">
        <img src={Clouds} className="img-fluid" alt="banner" />
        <h2 className="text-center mt-5" style={{ fontFamily: "Optima" }}>
          Recommended Books for Dads!
        </h2>
        <div className="container">
          <div className="row align-center">
            <a
              style={{ display: "table-cell" }}
              href="https://www.amazon.com/Hosting-Presence-Unveiling-Heavens-Agenda/dp/0768441293"
              target="_blank"
            >
              <img src={Hosting} className="book" />
              <p>Hosting the Presence</p>
              <p>by</p>
              <p>Bill Johnson</p>
            </a>
            <a
              style={{ display: "table-cell" }}
              href="https://www.amazon.com/Christian-Dads-Answer-Book/dp/0781433649"
              target="_blank"
            >
              <img src={Christiandad} className="book" />
              <p>The Christian Dad's Answer Book</p>
              <p>by</p>
              <p>Mike Yorkey</p>
            </a>
            <a
              style={{ display: "table-cell" }}
              href="https://www.amazon.com/God-Good-Better-Than-Think/dp/0768417422/ref=sr_1_2?crid=2NJDE349770XM&keywords=god+is+good+bill+johnson&qid=1582149044&s=books&sprefix=god+is+good+b%2Cstripbooks%2C257&sr=1-2"
              target="_blank"
            >
              <img src={Good} className="book" />
              <p>God is Good</p>
              <p>by</p>
              <p>Bill Johnson</p>
            </a>
            <a
              style={{ display: "table-cell" }}
              href="https://www.amazon.com/Raising-Giant-Killers-Releasing-Intentional-Parenting/dp/0800799232/ref=sr_1_1?keywords=raising+giant+killers&qid=1582149069&s=books&sr=1-1"
              target="_blank"
            >
              <img src={Killers} className="book" />
              <p>Raising Giant Killers</p>
              <p>by</p>
              <p>Bill Johnson</p>
            </a>
            <a
              style={{ display: "table-cell" }}
              href="https://www.amazon.com/Keep-Your-Love-Connection-Communication/dp/1942306067/ref=sr_1_1?keywords=keep+your+love+on&qid=1582149089&s=books&sr=1-1"
              target="_blank"
            >
              <img src={Loveon} className="book" />
              <p>Keep Your Love On</p>
              <p>by</p>
              <p>Danny Silk</p>
            </a>
          </div>
        </div>
        <br />
        <br />
        <div className="video-container">
          <h2 className="text-center mt-4" style={{ fontFamily: "Optima" }}>
            Top Worship Songs!
          </h2>
          <div>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=lNULNxlqJUU"
              controls={true}
              width="100%"
              height="100%"
            />
            <br />
            <ReactPlayer
              url="https://www.youtube.com/watch?v=EI22G5YpVds"
              controls={true}
              width="100%"
              height="100%"
            />
            <br />
            <ReactPlayer
              url="https://www.youtube.com/watch?v=FBJJJkiRukY"
              controls={true}
              width="100%"
              height="100%"
            />
            <br />
            <ReactPlayer
              url="https://www.youtube.com/watch?v=C9ujBoud26k"
              controls={true}
              width="100%"
              height="100%"
            />
          </div>
          <div className="topsource">
            <h2 className="text-center mt-4" style={{ fontFamily: "Optima" }}>
              Top source for online Sermons and inspiration!
            </h2>
            <a
              className="bethelpic"
              href="https://www.bethel.com/"
              target="_blank"
            >
              <br />
              <img src={Bethel} className="bethel" />
              <br />
              <p>
                Based in Redding, California, this organization is the best
                place to
              </p>
              <p>
                watch sermons and find other resources regarding the Christian
                faith.
              </p>
            </a>
          </div>
        </div>
      </div>
    );
  }
}