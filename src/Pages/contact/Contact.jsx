import React, { useEffect } from "react";
import ContactSection from "../Home/ContactSection/ContactSection.jsx";
import "./Contact.css";

export default function Contact() {
  // Use IntersectionObserver for scroll/refresh animation
  useEffect(() => {
    const els = document.querySelectorAll(".scroll-animate");

    if ("IntersectionObserver" in window) {
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("show");
            }
          });
        },
        { threshold: 0.15 }
      );

      els.forEach((el) => obs.observe(el));
      return () => obs.disconnect();
    } else {
      // fallback to scroll listener (older browsers)
      const handleScroll = () => {
        els.forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight - 80) el.classList.add("show");
        });
      };
      window.addEventListener("scroll", handleScroll);
      handleScroll(); // run on load/refresh
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const introText = `Afdal Itqan Wujudah Company is a dynamic, forward-thinking enterprise dedicated to delivering innovative, reliable, and high-quality solutions across multiple sectors in Saudi Arabia. Guided by our mission to empower clients with efficient, safe, and exceptional services—and aligned with our vision of setting new benchmarks in quality, integrity, and service excellence—we support the Kingdom’s progress under Saudi Vision 2030. From manpower supply, equipment rentals, food and building materials, uniforms and safety solutions, to medical consumables, advanced equipment, dermatology technologies, and premium skincare products, we provide tailored services built on accuracy, trust, and operational excellence. With a commitment to customer satisfaction, continuous improvement, and long-term partnership, we strive to deliver solutions that enhance efficiency, strengthen performance, and create meaningful value across every industry we serve.`;

  return (
    <div className="contact-page-wrapper">

      {/* TOP BANNER */}
      <div className="contact-top-banner">
        <img src="/image/contact.jpg" alt="Contact Us" className="contact-top-img" />
        <h2 className="contact-heading">CONTACT US</h2>
      </div>

      {/* INTRO — animate this block on scroll/refresh */}
      <div className="contact-intro-wrapper scroll-animate">
        <p className="contact-intro-text">{introText}</p>
      </div>

      {/* MAIN LAYOUT */}
      <div className="contact-layout">

        {/* LEFT – MAP BOX */}
        <div className="location-box scroll-animate">
          <div className="location-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53366.25447782867!2d39.08169367310984!3d21.54285286225861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d06fb04a8a0b%3A0xead5bb18b07ecdc2!2sJeddah!5e0!3m2!1sen!2ssa!4v1697040000000!5m2!1sen!2ssa"
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>

        {/* RIGHT – FORM BOX */}
        <div className="contact-form-side scroll-animate">
          <ContactSection />
        </div>

      </div>
    </div>
  );
}
