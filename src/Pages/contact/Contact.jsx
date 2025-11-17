import React, { useEffect } from "react";
import ContactSection from "../Home/ContactSection/ContactSection.jsx";
import "./Contact.css";

export default function Contact() {

  const introText = `
   Afdal Itqan Wujudah Company is a forward-thinking Saudi enterprise delivering reliable, high-quality solutions for businesses and communities. From manpower and equipment to food supplies, uniforms, safety products, medical consumables, and skincare technology, we provide services that make work safer, easier, and more efficient. Guided by integrity and aligned with Saudi Vision 2030, we focus on long-term partnerships and real value across every sector we serve.
  `;

  /* Scroll Animation */
  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="contact-page-wrapper">

      {/* BANNER */}
      <div className="contact-top-banner">
        <img src="/image/contact.jpg" alt="Contact Us" className="contact-top-img" />
        <h2 className="contact-heading">CONTACT US</h2>
      </div>

      {/* ⭐ GET IN TOUCH + PARAGRAPH SAME BACKGROUND */}
      <div className="get-in-touch-bg scroll-animate">

        <div className="get-in-touch-wrapper">
          <h2 class="get-in-touch-title">
GET IN <span class="touch-highlight">TOUCH</span>
</h2>

        </div>

        <div className="contact-intro-wrapper">
          <p className="contact-intro-text">{introText}</p>
        </div>

      </div>

      {/* ⭐ SECTION 2 — MAP + FORM */}
      <section className="contact-layout">

        {/* MAP */}
        <div className="location-box scroll-animate">
          <div className="location-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53366.25447782867!2d39.08169367310984!3d21.54285286225861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d06fb04a8a0b%3A0xead5bb18b07ecdc2!2sJeddah!5e0!3m2!1sen!2ssa!4v1697040000000!5m2!1sen!2ssa"
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>

        {/* FORM */}
        <div className="contact-form-side scroll-animate">
          <ContactSection />
        </div>

      </section>

    </div>
  );
}
