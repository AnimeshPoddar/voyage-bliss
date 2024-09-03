import { AboutUsPage } from "./about.page";
import { ContactUsPage } from "./contact.page";
import { LandingPage } from "./landing.page";
import { Routes, Route } from "react-router-dom";
import { ServicePage } from "./service.page";

export const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/contact-us" element={<ContactUsPage />} />
      <Route path="/services" element={<ServicePage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
    </Routes>
  );
};
