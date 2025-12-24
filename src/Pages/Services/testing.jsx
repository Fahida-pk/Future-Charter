import React from "react";
import { motion } from "framer-motion";
import "./testing.css";

const Testing = () => {
  return (
    <motion.div
      className="testing-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      {/* LEFT IMAGE */}
      <motion.div
        className="testing-left"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/image/testing.jpeg"
          alt="Electrical Testing Devices"
          className="testing-image"
        />
      </motion.div>

      {/* RIGHT CONTENT */}
      <motion.div
        className="testing-right"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <h2 className="testing-title">
          Electrical Testing Devices
        </h2>

        <p className="testing-description">
         Supplying advanced and dependable electrical testing devices engineered for precise measurement, enhanced safety, and regulatory compliance. Our solutions support efficient fault detection, system verification, and preventive maintenance across industrial, commercial, and technical service environments.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Testing;
