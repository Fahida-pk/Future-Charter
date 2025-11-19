import React from "react";
import { motion } from "framer-motion";
import "./cosmetics.css";

const Cosmetics = () => {
  return (
    <div className="cosmetics-section">

      {/* LEFT IMAGE */}
      <motion.div
        className="cosmetics-left"
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/image/cosmetic.jpg"
          alt="cosmetics"
          className="cosmetics_image"
        />
      </motion.div>

      {/* RIGHT CONTENT */}
      <motion.div
        className="cosmetics-right"
        initial={{ x: 80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <h2 className="cosmetics-title">
          Cosmetic & Skincare Products
        </h2>

        <p className="cosmetics-description std-paragraph">
          Distributing premium cosmetic and skincare solutions that combine
          innovation, safety, and effectiveness. Our products are carefully
          curated to enhance beauty while maintaining the highest standards
          of quality and skincare health. We help you deliver trusted,
          modern, and result-driven cosmetic solutions.
        </p>
      </motion.div>

    </div>
  );
};

export default Cosmetics;
