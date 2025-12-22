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
      title: "Hand & Power Tools ",
      image: "/image/hand&powertool.jpg",
      description: `Durable, high-performance tools designed for precision, efficiency, and reliability across construction, maintenance, and industrial applications.`,
      animation: "fade-right",
    },
     {
      title: "Electrical & Plumbing Materials ",
      image: "/image/electrical.jpeg",
      description: `Certified electrical and plumbing solutions ensuring safe installations, efficient performance, and long-term durability for residential, commercial, and industrial projects.`,
      animation: "fade-right",
    },
     {
      title: "Cleaning Supplies ",
      image: "/image/cleaning.jpeg",
      description: `Professional-grade cleaning materials that deliver effective hygiene, safety, and cleanliness for workplaces, facilities, and healthcare environments.`,
      animation: "fade-right",
    },
     {
      title: "Office Stationery ",
      image: "/image/office.jpeg",
      description: `High-quality office stationery supplies that support daily operations, organization, and productivity across corporate, commercial, and institutional environments.`,
      animation: "fade-right",
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
      title: "Dermatology Products & Equipments",
      image: "/image/skin.jpeg",
      description: `Offering a specialized range of products 
and equipment tailored for dermatology 
clinics and professionals. Distributing 
premium cosmetic and skincare solutions 
that combine innovation, safety, and 
effectiveness.`,
      animation: "fade-left",
    },
    {
      title: " Cosmetic & Skincare Products",
      image: "/image/cosmetics.jpeg",
      description: `Delivering premium cosmetic and skincare solutions crafted with advanced science, safe ingredients, and exceptional performance, ensuring visible results and complete skin confidence.`,
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
    },
    {
      title: "Manpower Supply",
      image: "/image/man.png",
      description: `We are a trusted provider of manpower supply services, specializing in the recruitment and placement of skilled and unskilled labor for various industries. Our extensive database and rigorous screening process ensure that we connect businesses with the right talent to meet their operational needs.`,
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
      className="col-12 col-sm-6 col-md-3 col-lg-4"
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
