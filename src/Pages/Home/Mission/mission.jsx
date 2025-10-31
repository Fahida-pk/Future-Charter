import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import AOS from "aos";
import "aos/dist/aos.css";
import "./mission.css";

export default function VisionMissionSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); // animation on scroll + refresh
  }, []);

  return (
    <section className="mission-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          {/* OUR VISION */}
          <div className="col-md-5 mb-4" data-aos="fade-up">
            <div className="vm-card vm-up">
              <h3 className="vm-heading" data-aos="zoom-in">
                OUR VISION
              </h3>
              <p>
                To be the leading service provider in manpower, equipment rental,
                and essential goods supply, recognized for reliability, quality,
                and commitment to sustainable growth in alignment with Vision 2030.
                Our goal is to empower industries across Saudi Arabia by facilitating
                efficient and cost-effective solutions that meet the demands of
                today’s evolving business landscape.
              </p>
              {/* ✅ Link instead of button */}
              <Link to="/services" className="vm-btn">
                KNOW MORE
              </Link>
            </div>
          </div>

          {/* OUR MISSION */}
          <div
            className="col-md-5 mb-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="vm-card vm-down">
              <h3 className="vm-heading" data-aos="zoom-in">
                OUR MISSION
              </h3>
              <p>
                We aim to support the operational success of our clients through
                unparalleled service quality, timely delivery, and exceptional
                customer support. Future Charter Trading Company is dedicated to
                developing long-term partnerships with clients by offering efficient,
                innovative, and adaptable solutions that enhance productivity,
                safety, and sustainability in every sector we serve.
              </p>
              {/* ✅ Link instead of button */}
              <Link to="/services" className="vm-btn">
                KNOW MORE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
