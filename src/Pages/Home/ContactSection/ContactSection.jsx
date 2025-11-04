import React from "react";
import "./ContactSection.css";

export default function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-image">
        <img
          src="https://complextradingco.com/img/about.png"
          alt="Contact"
        />
        <div className="contact-form-container">
          <h2>Contact Us</h2>
          <p>We’d love to hear from you! Reach out for any inquiries.</p>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="4" placeholder="Your Message" required />
            <button type="submit">SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </section>
  );
}
