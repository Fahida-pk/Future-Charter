import React from "react";
import { motion } from "framer-motion";
import "./building.css";

const Building = () => {
  return (
    <div className="building-section">

      {/* LEFT IMAGE - left side ninn move */}
      <motion.div
        className="building-left"
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/image/building.png"
          alt="building"
          className="building_image"
        />
      </motion.div>

      {/* RIGHT CONTENT - right side ninn move */}
      <motion.div
        className="building-right"
        initial={{ x: 80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <h2 className="building-title">Building Materials</h2>

        <p className="building-description std-paragraph">
          We supply durable and cost-effective building materials suitable for
          commercial and industrial projects. Our products are carefully
          selected for strength, reliability, and long-term performance,
          helping you complete projects efficiently and within budget.
          With timely delivery and trusted quality, we provide the
          materials you need for successful construction.
        </p>
      </motion.div>

    </div>
  );
};

export default Building;
