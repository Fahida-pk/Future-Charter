import React from "react";

const Contact = () => {
  return (
    <section className="container py-5">
      <h2 className="text-center fw-bold mb-4">Get in Touch</h2>
      <p className="text-center mb-4">Contact us for trade partnerships, inquiries, or project collaborations.</p>

      <form className="mx-auto" style={{ maxWidth: 700 }}>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Your Name" required />
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Your Email" required />
        </div>
        <div className="mb-3">
          <textarea className="form-control" rows="5" placeholder="Your Message" required></textarea>
        </div>
        <button className="btn btn-primary w-100">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
