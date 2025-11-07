import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-top">
        <div className="footer-content">
          {/* Left: Contact info */}
          <div className="footer-info">
            <p>
              <a href="mailto:info@afdalitqanksa.com">
                info@afdalitqanksa.com
              </a>
            </p>
            <p>
              <a href="tel:+966545810399">+966545810399</a>
            </p>
          </div>

          {/* Right: Vision 2030 logo */}
          <div className="vision-box">
            <img
              src="/image/vision2030-white.png" // Update if path differs
              alt="Vision 2030"
              className="vision-logo"
            />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Afdal Itqan Wujudah Company. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
