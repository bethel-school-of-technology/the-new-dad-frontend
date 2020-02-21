import React, { Component } from "react";
import DadGoods from "../images/dadgoods.jpeg";

export default class Goods extends Component {
  render() {
    return (
      <div style={{ fontFamily: "Optima" }}>
        <img src={DadGoods} className="img-fluid" alt="banner" />
        <h2 className="text-center mt-5">RECOMMENDED GOODS FOR THE NEW DAD</h2>

        <h5 className="text-center mt-4">Best Diapers in the Business!</h5>

        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a
              className="nav-link active"
              href="https://www.honest.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Honest Diapers
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.huggies.com/en-us#expecting-mom"
              target="_blank"
              rel="noopener noreferrer"
            >
              Huggies
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.pampers.com/en-us"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pampers
            </a>
          </li>
        </ul>
        <br></br>
        <h5 className="text-center mt-4">Be The Boss of Playtime!</h5>

        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a
              className="nav-link active"
              href="https://www.kids2.com/brands/baby-einstein//"
              target="_blank"
              rel="noopener noreferrer"
            >
              Baby Einstein
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.littletikes.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Little Tikes
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.fisher-price.com/en-us"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fisher-Price
            </a>
          </li>
        </ul>

        <br></br>
        <h5 className="text-center mt-4">Dress that Baby for Success!</h5>

        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a
              className="nav-link active"
              href="https://www.carters.com/home?id=carters/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Carters
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.target.com/c/baby-clothing-kids/-/N-564pl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Target
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.gerberchildrenswear.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gerber
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
