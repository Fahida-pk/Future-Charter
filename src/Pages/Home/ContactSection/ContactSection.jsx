import React from "react";
import "./ContactSection.css";

export default function ContactSection() {
  return (
    <section className="contact-section py-5" id="contact">
      <div className="container text-center">
        <h2>Contact Us</h2>
        <p>We’d love to hear from you! Reach out for any inquiries.</p>
        <form className="contact-form mx-auto" style={{ maxWidth: "500px" }}>
          <input type="text" className="form-control mb-3" placeholder="Your Name" required />
          <input type="email" className="form-control mb-3" placeholder="Your Email" required />
          <textarea className="form-control mb-3" rows="4" placeholder="Your Message" required />
          <button className="btn btn-warning w-100 fw-semibold">Send Message</button>
        </form>
      </div>
    </section>
  );
}
