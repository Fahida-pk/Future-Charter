import React from "react";
import { motion } from "framer-motion";
import "./Dermatology.css";

const Dermatology = () => {
  return (
    <div className="dermatology-section">

      {/* LEFT CONTENT - left side ninn move */}
      <motion.div
        className="dermatology-left"
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <h2 className="dermatology-title">Dermatology Products & Equipment</h2>

        <p className="dermatology-description stand-paragraph">
          We offer a specialized range of dermatology products and equipment
          tailored for clinics, skincare centers, and dermatology professionals.
          Our solutions support accurate skin diagnosis, advanced treatment
          procedures, and patient-focused skincare care. From diagnostic tools
          to therapeutic devices, we ensure high standards, safety, and
          reliability for dermatology practitioners.
        </p>
      </motion.div>

      {/* RIGHT IMAGE - right side ninn move */}
      <motion.div
        className="dermatology-right"
        initial={{ x: 80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/image/dermatology.png"
          alt="Dermatology Equipment"
          className="dermatology-image"
        />
      </motion.div>

    </div>
  );
};

export default Dermatology;
