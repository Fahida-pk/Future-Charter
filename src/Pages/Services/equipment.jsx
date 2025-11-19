import React from "react";
import { motion } from "framer-motion";
import "./equipment.css";

const Equipment = () => {
  return (
    <div className="equipment-section">

      {/* LEFT IMAGE - left side ninn slide */}
      <motion.div
        className="equipment-left"
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/image/equipment.png"
          alt="equipment"
          className="equipment_image"
        />
      </motion.div>

      {/* RIGHT CONTENT - right side ninn slide */}
      <motion.div
        className="equipment-right"
        initial={{ x: 80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <h2 className="equipment-title">Equipment Rentals</h2>

        <p className="equipment-description std-paragraph">
          We supply a wide range of well-maintained machinery and tools to
          support construction and industrial operations. Our equipment is
          reliable, efficient, and ready to handle demanding project
          requirements. We ensure every machine is inspected and maintained
          for top performance, helping you complete tasks safely and on time.
        </p>
      </motion.div>

    </div>
  );
};

export default Equipment;
