import React, { useEffect } from "react";
import { HeroSection } from "../../components/Hero-Section/hero-section.component";
import { Destination } from "../../components";
import { Trips } from "../../components";

export const Landing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeroSection
        buttonLabel={"Travel Plan"}
        cName={"hero-section"}
        description={"Choose your destination."}
        heroImage={"india-1.jpg"}
        heroTitle={"Your Next Great Escape Awaits"}
        heroUrl={"/"}
        buttonClassName={"hero-section-landing"}
      />
      <Destination />
      <Trips />
    </div>
  );
};
