import React from "react";

function Footer({ children }) {
  return (
    <footer className="Site-footer">
      {children}
      <div className="container">
        <div className="row">
          {/* Column 1 */}
          <div className="col-md-4 col-sm-6">
            <h4></h4>
            <ul className="list-unstyled">
              <li></li>
            </ul>
          </div>
          {/* Column 2 */}
          <div className="col-md-4 col-sm-6">
            <h4></h4>
            <ul className="list-unstyled">
              <li></li>
            </ul>
          </div>
          {/* Column 3 */}
          <div className="col-md-4 col-sm-6">
            <h4></h4>
            <ul className="list-unstyled">
              <li></li>
            </ul>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="text-xs-center">
            &copy;{new Date().getFullYear()} The New Dad - All Rights Reserved | Contact Us: thenewdad@email.com
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;