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
              <a href="mailto:info@futurecharterksa.com">
                info@futurecharterksa.com
              </a>
            </p>
            <p>
              <a href="tel:+966535064375">+966 53 506 4375</a>
            </p>
          </div>

          {/* Right: Vision 2030 logo (bigger, no title/border) */}
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
