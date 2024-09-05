import React, { useEffect } from "react";
import { HeroSection } from "../../components/Hero-Section/hero-section.component";
import { ContactForm } from "../../components";
export const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection
        cName={"hero-section-mid"}
        description={"Choose your destination."}
        heroImage={"home-page-img.jpg"}
        heroTitle={"Reach Us"}
      />
      <ContactForm />
    </>
  );
};
