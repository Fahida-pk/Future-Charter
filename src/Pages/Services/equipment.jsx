import React from "react";
import { motion } from "framer-motion";
import "./equipment.css";

const Equipment = () => {
  return (
    <div className="equipment-section">

      {/* LEFT CONTENT (TEXT ONLY) */}
      <motion.div
        className="equipment-left"
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="equipment-title">Equipment Rentals</h2>

        <p className="equipment-description">
          We supply a wide range of well-maintained machinery and tools to
          support construction and industrial operations. Our equipment is
          reliable, efficient, and ready to handle demanding project
          requirements. We ensure every machine is inspected and maintained
          for top performance, helping you complete tasks safely and on time.
        </p>
      </motion.div>

      {/* RIGHT CONTENT (IMAGE IN PARAGRAPH PLACE) */}
      <motion.div
        className="equipment-right"
        initial={{ x: 80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/image/eguipments.jpeg"
          alt="Equipment Rentals"
          className="equipment_image"
        />
      </motion.div>

    </div>
  );
};

export default Equipment;
