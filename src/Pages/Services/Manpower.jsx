import React from "react";
import { motion } from "framer-motion";
import "./Manpower.css";

const Manpower = () => {
  return (
    <div className="manpower-section">

      {/* LEFT CONTENT */}
      <div className="manpower-left">
        <h2 className="manpower-title">Manpower Supply</h2>

        <p className="manpower-description standard-paragraph">
          Our manpower solutions are tailored to meet the staffing needs of diverse industries,
          including construction, logistics, hospitality, and more. We supply skilled,
          semi-skilled, and unskilled workers who support our clients in enhancing operational
          efficiency and achieving their project goals. Through a rigorous recruitment process,
          we ensure that every individual meets our clients’ standards, delivering consistent,
          high-quality work and optimal productivity.
        </p>

        {/* CONTACT BUTTON */}
        <motion.a
          href="/contact"
          className="manpower-btn"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          CONTACT US
        </motion.a>

      </div>

      {/* RIGHT IMAGE */}
      <div className="manpower-right">
        <img
          src="/image/manpower.png"
          alt="Manpower Supply"
          className="manpower-image"
        />
      </div>

    </div>
  );
};

export default Manpower;
