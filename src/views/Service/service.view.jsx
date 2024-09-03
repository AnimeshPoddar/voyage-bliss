import React from "react";
import { HeroSection } from "../../components/Hero-Section/hero-section.component";

export const Service = () => {
  return (
    <>
      <HeroSection
        buttonLabel={"Travel Plan"}
        cName={"hero-section-mid"}
        description={"Choose your destination."}
        heroImage={"2.jpg"}
        heroTitle={"Your Next Great Escape Awaits"}
      />
    </>
  );
};
