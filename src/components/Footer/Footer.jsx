import React from "react";
import "./Footer.css"; // create this new CSS file

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4 mt-5">
      <div className="marquee">
        <div className="marquee-content">
          <img src="/image/lory.jpeg" alt="Lorry 1" />
          <img src="/image/lory.jpeg" alt="Lorry 2" />
        </div>
      </div>

      <div className="container text-center mt-3">
        <p className="mb-1">© {new Date().getFullYear()} Future Charter Trading Company</p>
        <small>All Rights Reserved • Riyadh, Saudi Arabia</small>
      </div>
    </footer>
  );
};

export default Footer;
