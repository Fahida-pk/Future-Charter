import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./visionMissionModel.css";

export default function VisionMissionModel() {
  const [activeTab, setActiveTab] = useState("vision");

  // 🔥 AOS Animation Setup
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section className="vm-tabs-section">
      <div className="container text-center">

        {/* Heading */}
<h2 className="vm-main-title" data-aos="fade-up" data-aos-offset="50" data-aos-duration="900">
          VISION & MISSION
        </h2>

        {/* Tabs */}
        <div className="vm-tabs" data-aos="fade-up">
          <button
            className={activeTab === "vision" ? "vm-tab active" : "vm-tab"}
            onClick={() => setActiveTab("vision")}
          >
            Vision
          </button>

          <button
            className={activeTab === "mission" ? "vm-tab active" : "vm-tab"}
            onClick={() => setActiveTab("mission")}
          >
            Mission
          </button>
        </div>

        {/* CONTENT */}
        <div className="vm-row">

          {/* LEFT — IMAGE */}
          <div className="vm-left" data-aos="zoom-in">
            {activeTab === "vision" ? (
              <img
                src="https://huda.com.sa/wp-content/uploads/2024/10/29886715_4268-ai.webp"
                alt="vision"
                className="vm-img"
              />
            ) : (
              <img
                src="/image/mission.jpg"
                alt="mission"
                className="vm-img"
              />
            )}
          </div>

          {/* RIGHT — TEXT */}
          <div className="vm-right" data-aos="fade-left">
            {activeTab === "vision" ? (
              <p className="vm-text">
                Our vision is to be recognized as a leading, trusted, and forward-thinking
                company in Saudi Arabia—setting new benchmarks in quality, integrity, and
                service excellence across industries. We aim to contribute meaningfully to the
                Kingdom’s development by fostering innovation, partnerships, and continuous
                improvement in all that we do.
              </p>
            ) : (
              <p className="vm-text">
                Our mission is to deliver innovative, reliable, and high-quality solutions that
                empower our clients to achieve their goals efficiently and safely. We strive to
                provide exceptional products and services in every sector we operate—ensuring
                customer satisfaction, operational excellence, and sustainable growth aligned
                with Saudi Vision 2030.
              </p>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
