import React from "react";
import { motion } from "framer-motion";
import "./Cleaning.css";
const Cleaning = () => {
  return (
    <div className="cleaning-section">

      {/* LEFT IMAGE */}
      <motion.div
        className="cleaning-left"
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/image/cleaning.jpeg"
          alt="cleaning"
          className="cleaning_image"
        />
      </motion.div>

      {/* RIGHT CONTENT */}
      <motion.div
        className="cleaning-right"
        initial={{ x: 80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <h2 className="cleaning-title">Cleaning Solutions</h2>

        <p className="cleaning-description std-paragraph">
           provide professional-grade cleaning materials designed to ensure effective hygiene, safety, and long-lasting cleanliness across workplaces, commercial facilities, and healthcare environments. Our products are carefully selected for performance, reliability, and ease of use, helping you maintain spotless spaces while meeting the highest standards of cleanliness and health.
        </p>
      </motion.div>

    </div>
  );
};

export default Cleaning;
