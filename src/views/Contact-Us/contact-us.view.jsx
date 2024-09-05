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
        buttonLabel={"Travel Plan"}
        cName={"hero-section-mid"}
        description={"Choose your destination."}
        heroImage={"1.jpg"}
        heroTitle={"Your Next Great Escape Awaits"}
      />
      <ContactForm />
    </>
  );
};
