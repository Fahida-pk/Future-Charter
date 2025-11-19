import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactSection.css";

export default function ContactSection() {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");
  const [msgColor, setMsgColor] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const phoneValue = form.current.phone.value;

    // --- PHONE VALIDATION (10 digits only) ---
    if (!/^[0-9]{10}$/.test(phoneValue)) {
      setMsgColor("error");
      setStatusMessage("Please enter a valid 10-digit phone number!");
      return;
    }
const emailValue = form.current.email.value;

// Email validation
if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
  setMsgColor("error");
  setStatusMessage("Please enter a valid email address!");
  return;
}

    // --- EMAILJS SEND ---
    emailjs
      .sendForm(
        "service_cx55wqk",      // ⭐ Your EmailJS Service ID
        "template_ku08t6d",     // ⭐ Your Template ID
        form.current,
        "e4gCmQY44CTS_vD9E"     // ⭐ Public API Key
      )
      .then(() => {
        setMsgColor("success");
        setStatusMessage("Thank you for contacting us. We will reach you soon!");

        form.current.reset(); // Reset form
      })
      .catch((error) => {
        setMsgColor("error");
        setStatusMessage("Failed to send: " + error.text);
      });
  };

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

          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="text" name="phone" placeholder="Your Phone Number" required />
            <textarea name="message" rows="4" placeholder="Your Message" required />
            <button type="submit">SEND MESSAGE</button>
          </form>

        {statusMessage && (
  <p style={{ 
    marginTop: "10px",
    fontSize: "15px",
    color: msgColor === "success" ? "blue" : "red",
    textAlign: "center"
  }}>
    {statusMessage}
  </p>
)}

        </div>
      </div>
    </section>
  );
}
