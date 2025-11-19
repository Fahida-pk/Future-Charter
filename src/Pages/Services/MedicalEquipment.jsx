import React from "react";
import { motion } from "framer-motion";
import "./MedicalEquipment.css";

const MedicalEquipment = () => {
  return (
    <motion.div 
      className="medical-equipment-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >

      {/* LEFT IMAGE - left side ninn slide */}
      <motion.div
        className="medical-equipment-left"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/image/medical-equipment-image.jpg"
          alt="Medical Equipment"
          className="medical-equipment-image"
        />
      </motion.div>

      {/* RIGHT CONTENT - right side ninn slide */}
      <motion.div
        className="medical-equipment-right"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <h2 className="medical-equipment-title">Medical Equipment</h2>

        <p className="medical-equipment-description std-paragraph">
          Supplying advanced medical devices and tools engineered to meet the highest healthcare standards. Our products are selected for precision, safety, and long-term reliability, supporting hospitals, clinics, and healthcare professionals in delivering accurate diagnostics and effective patient care.
        </p>
      </motion.div>

    </motion.div>
  );
};

export default MedicalEquipment;
