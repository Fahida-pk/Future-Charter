import React from "react";
import { motion } from "framer-motion";
import "./MedicalConsumable.css";

const MedicalConsumable = () => {
  return (
    <motion.div 
      className="medical-consumable-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >

      {/* LEFT CONTENT */}
      <motion.div
        className="medical-consumable-left"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <h2 className="medical-consumable-title">Medical Consumables</h2>

        <p className="medical-consumable-description stand-paragraph">
          We provide high-quality medical consumables designed to support hospitals,
          clinics, laboratories, and healthcare facilities. Our supplies ensure
          reliability, hygiene, and safety across all medical operations.
          From disposable gloves and masks to diagnostic and surgical essentials,
          our products meet strict healthcare standards and deliver trusted
          performance for everyday use.
        </p>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        className="medical-consumable-right"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/image/Medical Consumables.jpg"
          alt="Medical Consumables"
          className="medical-consumable-image"
        />
      </motion.div>

    </motion.div>
  );
};

export default MedicalConsumable;
