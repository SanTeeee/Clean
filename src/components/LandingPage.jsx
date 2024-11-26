import React from "react";
import Firstpage from "./LandingPage/FirstPage/Firstpage";
import TrustedBrands from "./LandingPage/trusted brands/TrustedBrands";
import HIW from "./LandingPage/How it works/HIW";
import PersonalizedData from "./LandingPage/Personalized/PersonalizedData";
import Footer from "./LandingPage/Footer/Footer";
import Navbar from "./LandingPage/Navbar/Navbar";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Firstpage />
      <TrustedBrands />
      <HIW />
      <PersonalizedData />
      <Footer />
    </div>
  );
};

export default Landing;
