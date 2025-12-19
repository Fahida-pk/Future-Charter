import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./ContactSection.css";

export default function ContactSection() {
  const form = useRef();
  const [phone, setPhone] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [msgColor, setMsgColor] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    // 🌍 INTERNATIONAL PHONE VALIDATION (10–15 digits)
    if (!/^[0-9]{10,15}$/.test(phone)) {
      setMsgColor("error");
      setStatusMessage(
        "Please enter a valid phone number with country code"
      );
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
        "service_cx55wqk",
        "template_ku08t6d",
        form.current,
        "e4gCmQY44CTS_vD9E"
      )
      .then(() => {
        setMsgColor("success");
        setStatusMessage(
          "Thank you for contacting us. We will reach you soon!"
        );

        form.current.reset();
        setPhone("");
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
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />

            {/* 🌍 PHONE INPUT WITH COUNTRY CODE */}
            <PhoneInput
  country={"sa"}          // 🇸🇦 Saudi Arabia default
  value={phone}
  onChange={(value) => setPhone(value)}
  inputClass="phone-input"
  buttonClass="phone-flag-dropdown"
  dropdownClass="phone-dropdown"
  inputProps={{
    name: "phone",
    required: true,
  }}
/>


            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit">SEND MESSAGE</button>
          </form>

          {statusMessage && (
            <p
              style={{
                marginTop: "10px",
                fontSize: "15px",
                color: msgColor === "success" ? "blue" : "red",
                textAlign: "center",
              }}
            >
              {statusMessage}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
