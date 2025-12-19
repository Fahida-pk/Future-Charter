import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ServicesSection.css";

export default function ServicesSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  const services = [
    {
      title: "Building Materials ",
      image: "/image/building.jpg",
      description: `Offering durable and cost-effective materials for commercial and industrial construction projects.`,
      animation: "fade-right",
    },
    {
      title: "SAFETY SOLUTIONS & UNIFORMS",
      image: "/image/saftey.jpeg",
      description: `Our safety solutions division offers a 
comprehensive selection of PPE, safety 
gear, and trading items that meet 
international safety standards.`,
      animation: "fade-left",
    },
    {
      title: "MEDICAL CONSUMABLES & EQUIPMENT",
      image: "/image/medical.png",
      description: `Providing reliable and high-standard 
consumable items for clinics, hospitals, and 
healthcare centers. Supplying advanced 
medical devices and tools designed to meet 
the highest healthcare standards.`,
      animation: "fade-right",
    },
    
    {
      title: "DERMACEUTICAL & COSMETIC INNOVATIONS",
      image: "/image/skin.png",
      description: `Offering a specialized range of products 
and equipment tailored for dermatology 
clinics and professionals. Distributing 
premium cosmetic and skincare solutions 
that combine innovation, safety, and 
effectiveness.`,
      animation: "fade-left",
    },
    {
      title: "VEHICLE & EQUIPMENT RENTAL",
      image: "/image/eguipments.jpeg",
      description: `We offer an extensive range of vehicles and 
equipment for short-term and long-term 
rentals, providing reliable machinery, 
trucks, and specialized equipment to meet 
the needs of various sectors.`,
      animation: "fade-left",
    },
    
    
    
    
    {
      title: "FOODSTUFFS SUPPLY",
      image: "/image/food.jpeg",
      description: `We are a trusted provider of foodstuff 
supplies, specializing in bulk distribution for 
companies, institutions, and events. 
We source high-quality food products for 
freshness, nutrition, and affordability.`,
      animation: "fade-right",
    }
  ];

  return (
    <section className="services-section py-5 text-center">
      <div className="container">
        <h2 className="section-heading mb-5" data-aos="zoom-in-up">
          OUR SERVICES
        </h2>

        <div className="row justify-content-center g-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-12 col-sm-10 col-md-6 col-lg-4" // 👈 now 3x3 layout
              data-aos={service.animation}
            >
              <div className="service-card">
                <div
                  className="service-image"
                  style={{ backgroundImage: `url(${service.image})` }}
                ></div>
                <div className="service-content">
                  <h5>{service.title}</h5>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
