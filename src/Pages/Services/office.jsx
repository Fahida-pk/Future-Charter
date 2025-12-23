import React from "react";
import { motion } from "framer-motion";
import "./office.css";

const Office = () => {
  return (
    <motion.div
      className="office-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      {/* LEFT CONTENT */}
      <motion.div
        className="office-left"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <h2 className="office-title">
          Office Stationery & Supplies
        </h2>

        <p className="office-description">
          Supplying a complete range of high-quality office stationery and
          workplace essentials designed to enhance productivity and
          organization. From files, notebooks, pens, and desk accessories to
          daily office consumables, our solutions ensure a professional,
          efficient, and well-equipped working environment for corporate,
          commercial, and institutional needs.
        </p>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        className="office-right"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/image/officeitems..png"
          alt="Office Stationery Supplies"
          className="office-image"
        />
      </motion.div>
    </motion.div>
  );
};

export default Office;
