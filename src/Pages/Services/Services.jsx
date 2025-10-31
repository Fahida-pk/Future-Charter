import React from "react";

const Services = () => {
  const services = [
    "International Trading & Procurement",
    "Supply Chain Management",
    "Customs Clearance",
    "Industrial Equipment Supply",
    "Building Materials Distribution",
  ];

  return (
    <section className="container py-5">
      <h2 className="text-center fw-bold mb-4">Our Services</h2>
      <div className="row g-4">
        {services.map((s, i) => (
          <div className="col-md-4" key={i}>
            <div className="card h-100 border-0 shadow-sm p-4 text-center">
              <h5 className="fw-bold">{s}</h5>
              <p>Comprehensive {s.toLowerCase()} with professionalism and global standards.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
