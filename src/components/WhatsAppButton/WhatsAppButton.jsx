// src/components/WhatsAppButton/WhatsAppButton.jsx

import React from "react";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  return (
   <a
  href="https://wa.me/966535064375"
  className="whatsapp_float"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
    alt="WhatsApp"
  />
</a>

  );
};

export default WhatsAppButton;
