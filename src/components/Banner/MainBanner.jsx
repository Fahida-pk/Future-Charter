import React from "react";
import { motion } from "framer-motion";
import "./MainBanner.css";

const MainBanner = () => {
  return (
    <section className="hero-section d-flex align-items-center justify-content-start">
      <div className="container">
        <div className="hero-content p-4 rounded">
          {/* 🌀 Animated Heading */}
          <motion.h1
            className="fw-bold mb-3 cursive-text"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 15,
              duration: 1,
            }}
            viewport={{ once: false, amount: 0.4 }}
          >
           <b>Welcome To  Company </b>  <br /><b>Afdal Itqan Wujudah</b>
          </motion.h1>

          {/* 📝 Animated Subtext */}
          <motion.p
            className="banner-subtext"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            viewport={{ once: false }}
          >
            Empowering Saudi Arabia’s growth with reliable Safety Solutions & Uniforms, Building Materials,Hand Tools & Power Tools, Electrical & Plumbing Materials, Cleaning Materials, Office Stationeries
,Medical Consumables and Equipment, Dermatology Products & Equipment, Cosmetic and Skincare solutions, Manpower Supply, Equipment Rentals, Food supplies and much more customized to your specific requirements and proudly aligned with Vision 2030.
          </motion.p>

          {/* 📩 Animated Button */}
          <motion.a
            href="/contact"
            className="btn btn-light px-4 py-2 fw-semibold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            viewport={{ once: false }}
          >
            CONTACT US
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
