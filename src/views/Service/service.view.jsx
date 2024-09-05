import React, { useEffect } from "react";
import { HeroSection } from "../../components/Hero-Section/hero-section.component";
import { Trips } from "../../components/Trips/trips.component";
import { ContentBlock } from "../../components";

export const Service = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeroSection
        cName={"hero-section-mid"}
        heroImage={"services.jpg"}
        heroTitle={"Services."}
      />
      <ContentBlock
        title={"1. Personalized Travel Itineraries"}
        description={
          "We create tailor-made travel itineraries that suit your unique preferences and interests. Whether you’re looking for a relaxing getaway, an adventure-packed trip, or a cultural immersion, we plan every detail to ensure your journey is unforgettable."
        }
      />
      <ContentBlock
        title={"2. Group Travel Planning"}
        description={
          "Traveling with friends, family, or colleagues? We specialize in group travel planning, ensuring that everyone’s needs are met. From coordinating logistics to creating a balanced itinerary, we make sure your group trip is smooth and enjoyable."
        }
      />
      <ContentBlock
        title={"3. Travel Tips & Resources"}
        description={
          "Our extensive library of travel tips and resources is designed to help you travel smarter. From packing guides and safety tips to advice on budget travel and cultural etiquette, we provide the information you need to make the most of your travels."
        }
      />
      <ContentBlock
        title={"4. Accommodation & Dining Recommendations"}
        description={
          "Finding the perfect place to stay and dine is crucial for a great travel experience. Our curated lists of accommodations and dining spots ensure you enjoy the best that your destination has to offer, whether you’re seeking luxury or local flavor."
        }
      />

      <ContentBlock
        title={"5. Exclusive Travel Deals"}
        description={
          "Get access to exclusive travel deals and discounts on flights, accommodations, tours, and more. We partner with top travel providers to bring you the best offers, ensuring you get the most value for your money."
        }
      />
      <Trips />
    </>
  );
};
