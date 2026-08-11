import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ServicesAccordion from "./PageContent/ServicesAccordion";
import Collection from "./PageContent/Collection";
import Clients from "./PageContent/Clients";
import ContactSection from "./PageContent/ContactSection";



const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/services" element={<ServicesAccordion />} />
      <Route path="/work" element={<Collection />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/contact" element={<ContactSection />} />
    </Routes>
  );
};

export default MainRoutes;
