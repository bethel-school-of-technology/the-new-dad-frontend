import React, { Component } from "react";
import HomeImage from "../images/newdadhome.jpeg";

export default class Goods extends Component {
  render() {
    return (
      <div>
        <img src={HomeImage} className="img-fluid" alt="banner" />
        <h2 className="text-center mt-5" style={{ fontFamily: "Optima" }}>
          Recommended Goods for The New Dad
        </h2>

        <h5 className="text-center mt-4" style={{ fontFamily: "Optima" }}>
          Best Diapers in the Business!
        </h5>

        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link active" href="https://www.honest.com/">
              Honest Diapers
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://www.huggies.com/en-us#expecting-mom"
            >
              Huggies
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://www.pampers.com/en-us">
              Pampers
            </a>
          </li>
        </ul>
        <br></br>
        <h5 className="text-center mt-4" style={{ fontFamily: "Optima" }}>
          Be The Boss of Playtime!
        </h5>

        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a
              class="nav-link active"
              href="https://www.kids2.com/brands/baby-einstein//"
            >
              Baby Einstein
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://www.littletikes.com/">
              Little Tikes
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://www.fisher-price.com/en-us">
              Fisher-Price
            </a>
          </li>
        </ul>

        <br></br>
        <h5 className="text-center mt-4" style={{ fontFamily: "Optima" }}>
          Dress that Baby for Success!
        </h5>

        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a
              class="nav-link active"
              href="https://www.carters.com/home?id=carters/"
            >
              Carters
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://www.target.com/c/baby-clothing-kids/-/N-564pl"
            >
              Target
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://www.gerberchildrenswear.com/">
              Gerber
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
