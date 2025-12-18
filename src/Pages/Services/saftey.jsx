import React from "react";
import { motion } from "framer-motion";
import "./Safety.css";

const Safety = () => {
  return (
    <motion.div
      className="safety-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >

      {/* LEFT CONTENT - left side ninn slide */}
      <motion.div
        className="safety-left"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <h2 className="safety-title">Safety Solutions & Uniforms</h2>

        <p className="safety-description standard-paragraph">
          Supplying customized uniforms, PPE, and safety equipment that ensure protection and compliance.
          We provide high-quality safety solutions tailored to meet industry-specific standards, helping organizations maintain a safe working environment. Our products are designed for durability, comfort, and full regulatory compliance, ensuring workers stay protected while performing their duties efficiently.
        </p>
      </motion.div>

      {/* RIGHT IMAGE - right side ninn slide */}
      <motion.div
        className="safety-right"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/image/Uniforms & Safety Solutions.png"
          alt="Uniforms and Safety Solutions"
          className="safety-image"
        />
      </motion.div>

    </motion.div>
  );
};

export default Safety;
