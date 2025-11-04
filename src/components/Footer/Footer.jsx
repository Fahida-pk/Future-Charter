import React from "react";
import TruckSection from "../../Pages/Home/TruckSection/TruckSection";



const Footer = () => {
  return (
    <>
    <TruckSection />
      {/* Truck animation just above footer */}
      
      <footer className="bg-dark text-white py-4 mt-0">
        <div className="container text-center">
          <p className="mb-1">
            

            © {new Date().getFullYear()} Future Charter Trading Company
          </p>
          <small>All Rights Reserved • Riyadh, Saudi Arabia</small>
        </div>
      </footer>
    </>
  );
};

export default Footer;
