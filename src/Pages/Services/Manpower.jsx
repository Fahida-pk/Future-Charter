import React from "react";
import { motion } from "framer-motion";
import "./Manpower.css";

const Manpower = () => {
  return (
    <div className="manpower-section">

      {/* LEFT CONTENT - left side ninn move */}
      <motion.div
        className="manpower-left"
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <h2 className="manpower-title">Manpower Supply</h2>

        <p className="manpower-description standard-paragraph">
          Our manpower solutions are tailored to meet the staffing needs of diverse industries,
          including construction, logistics, hospitality, and more. We supply skilled,
          semi-skilled, and unskilled workers who support our clients in enhancing operational
          efficiency and achieving their project goals. Through a rigorous recruitment process,
          we ensure that every individual meets our clients’ standards, delivering consistent,
          high-quality work and optimal productivity.
        </p>
      </motion.div>

      {/* RIGHT IMAGE - right side ninn move */}
      <motion.div
        className="manpower-right"
        initial={{ x: 80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/image/manpower.png"
          alt="Manpower Supply"
          className="manpower-image"
        />
      </motion.div>

    </div>
  );
};

export default Manpower;
