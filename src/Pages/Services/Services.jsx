import React, { useEffect } from "react"; 
import AOS from "aos";
import "aos/dist/aos.css";

import Manpower from "./Manpower.jsx";
import Building from "./building.jsx";
import Hand from "./hand.jsx";
import Electrical from "./electrical.jsx"
import Cleaning from "./Cleaning.jsx"
import Office from "./office.jsx"
import Safety from "./saftey.jsx";
 import Testing from "./testing.jsx";
import Equipment from "./equipment.jsx";
import MedicalConsumable from "./medicalconsumable.jsx";
import MedicalEquipment from "./MedicalEquipment.jsx";
import Dermatology from "./Dermatology.jsx";
import Cosmetics from "./cosmetic.jsx";
import Food from "./food.jsx";
import WhatsAppButton from "../../components/WhatsAppButton/WhatsAppButton"

import "./Services.css";

const Services = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,  // animation speed
      once: false,     // scroll back up cheyyumbolum work cheyyan
    });
  }, []);

  return (
    <>
      <div className="full-banner" data-aos="fade-down">
        <div className="banner-overlay">
          <h1 className="banner-text">OUR SERVICES</h1>
        </div>
      </div>

      <div data-aos="fade-up"><Building /></div>
      <div data-aos="fade-up"><Safety /></div>
      <div data-aos="fade-up"><Hand /></div>
      <div data-aos="fade-up"><Electrical /></div>
      <div data-aos="fade-up"><Cleaning /></div>
      <div data-aos="fade-up"><Office /></div>
      <div data-aos="fade-up"><Testing /></div>
      <div data-aos="fade-up"><MedicalConsumable /></div>
      <div data-aos="fade-up"><MedicalEquipment /></div>
      <div data-aos="fade-up"><Dermatology /></div>
       <div data-aos="fade-up"><Cosmetics /></div>
      <div data-aos="fade-up"><Manpower /></div>
       <div data-aos="fade-up"><Food /></div>
             <div data-aos="fade-up"><Equipment /></div>

                 <WhatsAppButton />

    </>

  );
};

export default Services;
