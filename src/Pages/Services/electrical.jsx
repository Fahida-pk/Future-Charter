import React from "react";
import { motion } from "framer-motion";
import "./electrical.css";

const Electrical = () => {
  return (
    <motion.div
      className="electrical-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >

      {/* LEFT CONTENT */}
      <motion.div
        className="electrical-left"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <h2 className="electrical-title">
          Electrical & Plumbing Materials
        </h2>

        <p className="electrical-description">
          Delivering premium-grade electrical and plumbing materials engineered
          for safety, efficiency, and reliability. Our solutions support smooth
          installations, consistent performance, and long-term durability across
          residential, commercial, and industrial applications—ensuring every
          project meets quality and compliance standards.
        </p>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        className="electrical-right"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/image/electricalplumb.jpeg"
          alt="Electrical and Plumbing Materials"
          className="electrical-image"
        />
      </motion.div>

    </motion.div>
  );
};

export default Electrical;
