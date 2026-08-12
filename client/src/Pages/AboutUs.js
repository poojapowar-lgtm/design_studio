import React from "react";
import AboutBanner from "../PageContent/About/AboutBanner";
import StudioSection from "../PageContent/About/StudioSection";
import TeamSection from "../PageContent/About/TeamSection.jsx";
import InspirationSection from "../PageContent/About/InspirationSection.jsx";


const AboutUs = () => {
  return (
    <div className="home">
      <AboutBanner />
      <StudioSection/>
      <TeamSection/>
      <InspirationSection/>
    </div>
  );
};

export default AboutUs;
