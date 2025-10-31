import React from "react";
import { Helmet } from "react-helmet-async";
import MainBanner from "../../../components/Banner/MainBanner.jsx";

// ✅ Make sure these section files are in the same folder as Home.jsx
import AboutSection from "../AboutSection/AboutSection.jsx";
import ServicesSection from "../ServicesSection/ServicesSection.jsx";
import VisionSection from "../VisionSection/VisionSection.jsx";
import ContactSection from "../ContactSection/ContactSection.jsx";
import  VisionMissionSection from "../Mission/mission.jsx";
export default function Home() {
  return (
    <>
      <Helmet>
        <title>Future Charter Trading Co. Ltd | Saudi Arabia</title>
      </Helmet>

      {/* ✅ Hero Banner Section */}
      <MainBanner />

      {/* ✅ Other Homepage Sections */}
      <AboutSection />
      <ServicesSection />
      <VisionSection />
      <VisionMissionSection/>
      <ContactSection />
       
    </>
  );
}
