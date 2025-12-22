import React from "react";
import "./brand.css";

const images = [
  "/image/logo_1.png",
  "/image/logo_2.png",
  "/image/logo_3.png",
  "/image/logo_4.png",
  "/image/logo_5.png",
  "/image/logo_6.png",
  "/image/logo_7.png",
  "/image/logo_8.png",
  "/image/kestrel-instruments-logo.webp",
  "/image/logo_10.png",
  "/image/logo_11.png",
  "/image/logo_12.png",
  "/image/logo_13.png",
];

export default function Brand() {
  return (
    <section className="brand-wrapper">
      <h2 className="brand-heading">Our Brands</h2>

      <div className="brand-marquee">
        <div className="brand-track">
          {[...images, ...images].map((img, i) => (
            <div className="brand-item" key={i}>
              <img src={img} alt="brand logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
