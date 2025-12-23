import React, { useEffect, useState, useRef } from "react";
import "./WhatWeOffer.css";

const WhatWeOffer = () => {
  const timelineRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const elements = document.querySelectorAll(".offer-container");

    const handleScroll = () => {
      const triggerBottom = window.innerHeight * 0.7;
      let newActive = 0;

      elements.forEach((el, index) => {
        const boxTop = el.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
          newActive = index + 1;
          el.classList.add("active");
        } else {
          el.classList.remove("active");
        }
      });

      setActiveIndex(newActive);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="offer-section">
      <h2 className="section-heading">What We Offer</h2>

      <div className="offer-timeline" ref={timelineRef}>
        <div
          className="offer-line-fill"
          style={{ height: `${(activeIndex / 13) * 100}%` }}
        />

        <div className="offer-container left">
          <div className="offer-content">
            <h3>Safety Solutions & Uniforms</h3>
            <p>
              Providing customized uniforms, personal protective equipment (PPE), and safety equipment that ensure protection and compliance.
            </p>
          </div>
        </div>

        <div className="offer-container right">
          <div className="offer-content">
            <h3>Building Materials</h3>
            <p>
              Offering durable and cost-effective materials for commercial and industrial construction projects.
            </p>
          </div>
        </div>

        <div className="offer-container left">
          <div className="offer-content">
            <h3>Hand & Power Tools</h3>
            <p>
              Supplying high-quality hand and power tools designed for durability, precision, and efficiency across construction, maintenance, and industrial applications.

            </p>
          </div>
        </div>

        <div className="offer-container right">
          <div className="offer-content">
            <h3>Electrical & Plumbing Materials</h3>
            <p>
              Providing certified electrical and plumbing materials that ensure safe installations, reliable performance, and long-term operational efficiency.

            </p>
          </div>
        </div>

        <div className="offer-container left">
          <div className="offer-content">
            <h3>Cleaning Materials</h3>
            <p>
Offering professional-grade cleaning materials that support hygiene, safety, and cleanliness across commercial, industrial, and healthcare environments. </p>
          </div>
        </div>

        <div className="offer-container right">
          <div className="offer-content">
            <h3>Office Stationeries</h3>
            <p>
Supplying a comprehensive range of office stationery products that enhance organization, productivity, and smooth day-to-day business operations.</p>          </div>
        </div>

        <div className="offer-container left">
          <div className="offer-content">
            <h3>Medical Consumables</h3>
            <p>
Providing reliable and high-standard consumable items for clinics, hospitals, and healthcare centers.            </p>
          </div>
        </div>

        <div className="offer-container right">
          <div className="offer-content">
            <h3>Medical Equipment</h3>
            <p>
Supplying advanced medical devices and tools designed to meet the highest healthcare standards.
            </p>
          </div>
        </div>

        <div className="offer-container left">
          <div className="offer-content">
            <h3>Dermatology Products & Equipment</h3>
            <p>
Offering a specialized range of products and equipment tailored for dermatology clinics and professionals.            </p>
          </div>
        </div>

        <div className="offer-container right">
          <div className="offer-content">
            <h3>Cosmetic & Skincare Products</h3>
            <p>
Distributing premium cosmetic and skincare solutions that combine innovation, safety, and effectiveness.
            </p>
          </div>
        </div>

        <div className="offer-container left">
          <div className="offer-content">
            <h3>Equipment Rentals</h3>
            <p>
Supplying a wide range of well-maintained machinery and tools to support construction and industrial operations.            </p>
          </div>
        </div>

        <div className="offer-container right">
          <div className="offer-content">
            <h3>Manpower Supply</h3>
            <p>
Providing skilled, semi-skilled, and unskilled workforce solutions for various industries — ensuring quality, reliability, and efficiency.
            </p>
          </div>
        </div>

        <div className="offer-container left">
          <div className="offer-content">
            <h3>Food Supplies</h3>
            <p>
Delivering fresh, high-quality food products and catering essentials to organizations and institutions.            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
