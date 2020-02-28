import React from "react";
import Twitter from "../images/twitter.png";
import Facebook from "../images/facebook.png";
import Insta from "../images/insta.png";
function Footer({ children }) {
  return (
    <footer style={{ fontFamily: "Optima" }} className="Site-footer">
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p className="text-xs-center">
          &copy;{new Date().getFullYear()} The New Dad - All Rights Reserved |
          Contact us at <a href="mailto:thenewdad@gmail.com">thenewdad@gmail.com</a>
        </p>
        <div className="nav justify-content-center">
          <a
            style={{ display: "table-cell" }}
            href="https://www.facebook.com/bethelschooloftechnology/"
            target="_blank"
          >
            <img src={Facebook} className="icons" />
          </a>
          <a
            style={{ display: "table-cell" }}
            href="https://twitter.com/betheltech_?lang=en"
            target="_blank"
          >
            <img src={Twitter} className="icons" />
          </a>
          <a
            style={{ display: "table-cell" }}
            href="https://www.instagram.com/betheltech/?hl=en"
            target="_blank"
          >
            <img src={Insta} className="icons" />
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;