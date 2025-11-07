import React from "react";
import WhatWeOffer from "../../components/WhatWeOffer/WhatWeOffer";

import "./About.css";

const About = () => {
  return (
    <>
      <section className="about-section">
        {/* 🔹 Top Heading Section with Background Image */}
        <div className="about-hero">
          <div className="about-hero-overlay">
            <h1 className="about-hero-title">ABOUT US</h1>
          </div>
        </div>

        {/* 🔹 Split Section (Image + Text) */}
        <div className="about-split-section">
          <div className="about-image"></div>

          <div className="about-text">
            <h2 className="about-heading">
              We Are Ready To Make Your Dream & Grow Up Your Business.
            </h2>
            <p className="about-description">
              Afdal Itqan Wujudah Company is a dynamic and diversified enterprise
              based in Najran and Riyadh, Saudi Arabia. We are committed to
              delivering high-quality, tailored solutions that meet the evolving
              needs of our clients across multiple sectors.
            </p>
            <p className="about-description">
              Aligned with Saudi Vision 2030, our services and products support
              the Kingdom’s economic and social growth. We specialize in manpower
              supply, equipment rentals, food supplies, building materials,
              uniforms, and safety solutions, as well as medical consumables,
              medical equipment, dermatology products & equipment, and cosmetic &
              skincare products.
            </p>
            <p className="about-description">
              Driven by customer satisfaction, reliability, and innovation, Afdal
              Itqan Wujudah continues to set new standards in service excellence
              and trusted partnerships across Saudi Arabia.
            </p>
          </div>
        </div>
      </section>

      {/* 🔹 “What We Offer” Section (Timeline Style) */}
      <WhatWeOffer />
    </>
  );
};

export default About;
