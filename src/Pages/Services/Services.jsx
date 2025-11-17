import React from "react";
import Manpower from "./Manpower.jsx";
import "./Services.css";

const Services = () => {
  return (
    <>
      <div className="full-banner">
        <img
          src="/image/service banner.png"
          alt="service banner"
          className="full-banner-img"
        />
        <div className="banner-overlay">
          <h1 className="banner-text">Our Services</h1>
        </div>
      </div>

      <Manpower />
    </>
  );
};

export default Services;
