import React, { useEffect } from "react";
import { HeroSection } from "../../components/Hero-Section/hero-section.component";
import { ContentBlock } from "../../components";

export const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeroSection
        cName={"hero-section-mid"}
        heroImage={"about-us.jpg"}
        heroTitle={"Get to know about us."}
      />

      <ContentBlock
        title={"What We Offer"}
        description={
          "From detailed travel guides and itineraries to expert tips and recommendations, Voyage Bliss is your one-stop resource for all things travel. Whether you're planning your next vacation or just dreaming of future adventures, our content is designed to inspire and inform."
        }
      />

      <ContentBlock
        title={"Our Story"}
        description={
          "Voyge Bliss was born out of a shared love for exploration and a desire to help others see the world through new eyes. What started as a passion project has grown into a thriving community of travelers who trust us to guide their journeys."
        }
      />
      <ContentBlock
        title={"Join Our Community"}
        description={
          "Travel is better when shared. Join our community of like-minded explorers to exchange tips, share your own travel stories, and stay up-to-date with the latest travel trends and news. Let's inspire each other to see more of the world!"
        }
      />
    </div>
  );
};
