import React from "react";
import { motion } from "framer-motion";
import "./hand.css";

const Hand = () => {
  return (
    <div className="hand-section">

      {/* LEFT IMAGE */}
      <motion.div
        className="hand-left"
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/image/power.jpeg"
          alt="Hands and Power Tools"
          className="hand_image"
        />
      </motion.div>

      {/* RIGHT CONTENT */}
      <motion.div
        className="hand-right"
        initial={{ x: 80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <h2 className="hand-title">Hands & Power Tools</h2>

        <p className="hand-description">
          We supply a comprehensive range of high-quality hand tools and power
          tools designed for professional, industrial, and commercial use.
          Our products ensure precision, durability, and safety, helping
          you complete tasks efficiently with reliable performance
          across all working environments.
        </p>
      </motion.div>

    </div>
  );
};

export default Hand;
