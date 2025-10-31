import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ServicesSection.css";

export default function ServicesSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // animate every scroll
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  const services = [
    {
      title: "MANPOWER SOLUTIONS",
      image: "/image/saftey1.jpeg",
      description: `Our manpower solutions are tailored to 
meet the staffing needs of diverse 
industries, including construction, logistics, 
hospitality, and more. We provide skilled, 
semi-skilled, and unskilled workers to help 
our clients achieve operational efficiency 
and meet their project goals. Our rigorous 
recruitment process ensures that each 
individual aligns with our client’s standards, 
delivering high-quality work and 
productivity`,
      animation: "fade-right",
    },
    {
      title: "VEHICLE & EQUIPMENT RENTAL",
      image: "/image/eguipments.jpeg",
      description: `We offer an extensive range of vehicles and 
equipment for short-term and long-term 
rentals, providing reliable machinery, 
trucks, and specialized equipment to meet 
the needs of various sectors. Our fleet is 
meticulously maintained to guarantee 
optimal performance, safety, and reliability, 
empowering businesses to operate 
seamlessly without the burden of asset 
ownership`,
      animation: "fade-left",
    },
    {
      title: "FOODSTUFFS SUPPLY",
      image: "/image/food.jpeg",
      description: `We are a trusted provider of foodstuff 
supplies, specializing in bulk distribution for 
companies, institutions, and events. We 
source a wide range of high-quality food 
products to ensure that our clients receive 
fresh, nutritious, and affordable options. 
With our efficient logistics and timely 
delivery, we support organizations in 
maintaining a steady supply of essential 
food items`,
      animation: "fade-right",
    },
    {
      title: "SAFETY EQUIPMENT & GENERAL TRADING",
      image: "/image/saftey.jpeg",
      description: `Our safety equipment division offers a 
comprehensive selection of personal 
protective equipment (PPE), safety gear, 
and general trading items to help 
businesses maintain high safety standards. 
We understand the importance of a safe 
work environment and are committed to 
supplying products that meet international 
quality and safety regulations`,
      animation: "fade-left",
    },
  ];

  return (
    <section className="services-section py-5 text-center">
      <div className="container">
        <h2
          className="section-heading mb-5"
          data-aos="zoom-in-up"
        >
          OUR SERVICES
        </h2>

        <div className="row justify-content-center g-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-12 col-sm-10 col-md-6 col-lg-5"
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
