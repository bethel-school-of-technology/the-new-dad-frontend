import React from "react";

function Footer({ children }) {
  return (
    <footer className="Site-footer">
      
        <div className="footer-bottom">
          <p className="text-xs-center">
            &copy;{new Date().getFullYear()} The New Dad - All Rights Reserved
          </p>
        </div>
      
    </footer>
  );
}

export default Footer;
