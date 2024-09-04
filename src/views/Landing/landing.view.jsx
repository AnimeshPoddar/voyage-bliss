import React from "react";
import { HeroSection } from "../../components/Hero-Section/hero-section.component";
import { Destination } from "../../components";

export const Landing = () => {
  return (
    <div>
      <HeroSection
        buttonLabel={"Travel Plan"}
        cName={"hero-section"}
        description={"Choose your destination."}
        heroImage={"1.jpg"}
        heroTitle={"Your Next Great Escape Awaits"}
        heroUrl={"/"}
        buttonClassName={"hero-section-landing"}
      />
      <Destination/>
    </div>
  );
};
