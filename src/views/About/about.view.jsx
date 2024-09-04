import React from "react";
import { HeroSection } from "../../components/Hero-Section/hero-section.component";
import { ContentBlock } from "../../components";

export const About = () => {
  return (
    <div>
      <HeroSection
        buttonLabel={"Travel Plan"}
        cName={"hero-section-mid"}
        description={"Choose your destination."}
        heroImage={"2.jpg"}
        heroTitle={"Your Next Great Escape Awaits"}
      />

      <ContentBlock
        title={"About Us"}
        description={
          "Welcome to Voyage Bliss, your ultimate guide to discovering the world's most incredible destinations. Whether you're a seasoned traveler or just beginning your journey, our mission is to inspire and equip you with all the information you need to explore new places, immerse yourself in diverse cultures, and create unforgettable memories. At Voyage Bliss, we believe that travel is more than just visiting new locations; it's about experiencing the world in all its richness and variety. Our team of passionate travelers and experts work tirelessly to bring you carefully curated guides, insider tips, and detailed itineraries that cater to every type of traveler. From hidden gems off the beaten path to iconic landmarks, we've got you covered."
        }
      />

      <ContentBlock
        title={"About Us"}
        description={
          "Welcome to Voyage Bliss, your ultimate guide to discovering the world's most incredible destinations. Whether you're a seasoned traveler or just beginning your journey, our mission is to inspire and equip you with all the information you need to explore new places, immerse yourself in diverse cultures, and create unforgettable memories. At Voyage Bliss, we believe that travel is more than just visiting new locations; it's about experiencing the world in all its richness and variety. Our team of passionate travelers and experts work tirelessly to bring you carefully curated guides, insider tips, and detailed itineraries that cater to every type of traveler. From hidden gems off the beaten path to iconic landmarks, we've got you covered."
        }
      />
      <ContentBlock
        title={"About Us"}
        description={
          "Welcome to Voyage Bliss, your ultimate guide to discovering the world's most incredible destinations. Whether you're a seasoned traveler or just beginning your journey, our mission is to inspire and equip you with all the information you need to explore new places, immerse yourself in diverse cultures, and create unforgettable memories. At Voyage Bliss, we believe that travel is more than just visiting new locations; it's about experiencing the world in all its richness and variety. Our team of passionate travelers and experts work tirelessly to bring you carefully curated guides, insider tips, and detailed itineraries that cater to every type of traveler. From hidden gems off the beaten path to iconic landmarks, we've got you covered."
        }
      />
    </div>
  );
};
