import React, { useEffect } from "react";
import "./AboutSection.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // speed of animation
      once: false,     // true = only once, false = animates every scroll
      mirror: true     // ensures animation happens when scrolling up too
    });
  }, []);

  return (
    <section className="about-section py-5">
      <div className="container">
        {/* 🔹 Heading */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold text-dark about-heading">
            ABOUT <span className="highlight">AFDAL ITQAN WUJUDAH</span>
          </h2>
          <h6 className="text-secondary">
            Empowering Industries Across Saudi Arabia
          </h6>
          <div className="heading-line mx-auto"></div>
        </div>

        {/* 🔹 Image + Text with animations */}
        <div className="row align-items-stretch">
          {/* Left - Image */}
          <div className="col-lg-6" data-aos="fade-right">
            <div className="about-image h-100">
              <img
                src="/image/about.jpeg"
                alt="Future Charter Meeting"
                className="img-fluid rounded shadow h-100 w-100 object-cover"
              />
            </div>
          </div>

          {/* Right - Text */}
          <div
            className="col-lg-6 d-flex flex-column justify-content-center about-text"
            data-aos="fade-left"
          >
            <div>
              <p>
                <strong>Afdal Itqan Wujudah</strong> is a dynamic and
                diversified enterprise based in Jeddah & Riyadh, Saudi Arabia.
                Since our inception, we have been committed to providing
                high-quality, tailored solutions across various sectors to
                support the diverse needs of our clients.
              </p>

              <p>
                Our expertise spans{" "}
                <strong>
                  manpower supply, equipment rentals, foodstuff distribution,
                </strong>{" "}
                and <strong>safety solutions</strong>, empowering organizations
                to operate efficiently and sustainably. Through innovative
                approaches and a commitment to excellence, we continue to build
                long-term partnerships founded on trust, reliability, and
                customer satisfaction.
              </p>

              <p>
                At Afdal Itqan Wujudah, we align our operations and services with{" "}
                <strong>Saudi Arabia’s Vision 2030</strong>, supporting the
                Kingdom’s transformation toward a diversified and
                knowledge-based economy. Driven by our mission to deliver
                reliable, efficient, and customer-centric solutions, Afdal Itqan Wujudah  continues to set new benchmarks in service standards
                across the Kingdom. From manpower to machinery, we aim to be
                your trusted partner in building a stronger and more sustainable
                future for Saudi Arabia.
              </p>

              <p>
                We take pride in fostering a culture of innovation, safety, and
                continuous improvement, ensuring that every service we provide
                reflects our core values of integrity, accountability, and
                excellence. Our professional team of experts works tirelessly to
                meet and exceed expectations—helping clients achieve their
                business goals while contributing to the nation’s economic and
                social progress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
