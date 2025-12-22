import React from "react";
import { Helmet } from "react-helmet-async";
import MainBanner from "../../../components/Banner/MainBanner.jsx";

// ✅ Make sure these section files are in the same folder as Home.jsx
import AboutSection from "../AboutSection/AboutSection.jsx";
import ServicesSection from "../ServicesSection/ServicesSection.jsx";
import VisionSection from "../VisionSection/VisionSection.jsx";
import ContactSection from "../ContactSection/ContactSection.jsx";
import  VisionMissionSection from "../Mission/mission.jsx";
import WhatsAppButton from "../../../components/WhatsAppButton/WhatsAppButton.jsx";
import Brand from "../brand/brand.jsx";
export default function Home() {
  return (
    <>
      <Helmet>
        <title>Afdal Itqan KSA</title>
      </Helmet>

      {/* ✅ Hero Banner Section */}
      <MainBanner />

      {/* ✅ Other Homepage Sections */}
      <AboutSection />
      <ServicesSection />
       <Brand />
      <VisionSection />
      <VisionMissionSection/>
      <ContactSection />
     
      <WhatsAppButton />

    </>
  );
}
