import React from "react";
import HeaderMain from "../Components/Lading/HeaderMain";
import HeroSection from "../Components/Lading/HeroSection";
import UsSection from "../Components/Lading/UsSection";
import FeaturesSection from "../Components/Lading/FeatureSection";
import Footer from "../Components/Lading/Footer";

function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] flex flex-col">
      <HeaderMain />
      <HeroSection />
      <UsSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
}

export default LandingPage;
