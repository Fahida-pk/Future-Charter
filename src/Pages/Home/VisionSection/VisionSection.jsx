import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./WhyChooseUs.css";

export default function WhyChooseUs() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const points = [
    {
      title: "RELIABLE AND HIGH-QUALITY SERVICES",
      desc: "We deliver dependable and exceptional service standards that meet and exceed client expectations.",
    },
    {
      title: "EXPERIENCED AND SKILLED WORKFORCE",
      desc: "Our skilled manpower solutions offer flexibility and expertise across various sectors.",
    },
    {
      title: "COMMITMENT TO SAFETY",
      desc: "We prioritize safety by providing high-quality equipment and personal protective gear.",
    },
    {
      title: "SUSTAINABLE GROWTH AND VISION 2030 ALIGNMENT",
      desc: "Our operations reflect a commitment to sustainable growth and align with Saudi Arabia’s long-term goals.",
    },
    {
      title: "CUSTOMER-CENTRIC APPROACH",
      desc: "We build long-lasting relationships based on trust, transparency, and mutual respect, ensuring our clients’ complete satisfaction.",
    },
  ];

  return (
    <section
      className="whychooseus-section text-white d-flex align-items-center"
      style={{
        backgroundImage: "url('/image/blur.jpeg')", // 🔹 use your high-quality image
      }}
    >
      <div className="container py-5 text-center">
        <h2 className="fw-bold display-6 mb-4 text-white" data-aos="fade-up">
          WHY CHOOSE US
        </h2>

        <p
          className="text-light mb-5"
          style={{ maxWidth: "800px", margin: "0 auto" }}
          data-aos="fade-up"
        >
          At AFDAL ITQAN WUJUDAH, we are committed to providing
          exceptional services that contribute to the Kingdom’s Vision 2030.
          Our values are rooted in reliability, safety, and customer
          satisfaction, making us a trusted partner for organizations across
          multiple industries.
        </p>

        <div className="row justify-content-center text-start g-4">
          {points.map((item, index) => (
            <div
              key={index}
              className="col-md-6 col-lg-5"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <div className="why-box p-4 h-100">
                <div className="d-flex align-items-start gap-3 mb-2">
                  <FaCheckCircle className="text-warning fs-4" />
                  <h5 className="fw-bold text-white mb-0">{item.title}</h5>
                </div>
                <p className="text-light small mb-0">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ CONTACT US Button */}
        <div data-aos="fade-up" className="mt-5">
          <Link
            to="/contact"
            className="btn btn-light px-4 py-2 fw-semibold rounded-3"
          >
            CONTACT NOW
          </Link>
        </div>
      </div>
    </section>
  );
}
