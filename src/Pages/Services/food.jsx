import React from "react";
import { motion } from "framer-motion";
import "./food.css";

const Food = () => {
  return (
    <div className="food-section">

      {/* LEFT IMAGE */}
      <motion.div
        className="food-left"
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/image/foodservice.png"
          alt="food service"
          className="food_image"
        />
      </motion.div>

      {/* RIGHT CONTENT */}
      <motion.div
        className="food-right"
        initial={{ x: 80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <h2 className="food-title">
          Food Supply & Distribution
        </h2>

        <p className="food-description std-paragraph">
          Delivering high-quality, reliable food supply solutions for businesses
          across Saudi Arabia. We ensure consistent delivery of fresh, safe,
          and compliant food products that meet industry standards. Our services
          support hotels, restaurants, camps, and institutions with efficient,
          on-time food distribution.
        </p>
      </motion.div>

    </div>
  );
};

export default Food;
