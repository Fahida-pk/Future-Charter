import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container text-center">
        <p className="mb-1">© {new Date().getFullYear()} Future Charter Trading Company</p>
        <small>All Rights Reserved • Riyadh, Saudi Arabia</small>
      </div>
    </footer>
  );
};

export default Footer;
