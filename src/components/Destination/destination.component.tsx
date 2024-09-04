import React from "react";
import "./destination.styles.css";
export const Destination = () => {
  return (
    <div className="destination">
      <h1> Popular Places To Visit</h1>
      <p>
        Travel beyond the ordinary with our expertly crafted itineraries and
        seamless planning.
      </p>
      <div className="first-description">
        <div className="des-text">
          <h2>Leh Ladakh, India</h2>
          <p>
            Nestled in the lap of the Himalayas, Leh-Ladakh is a mesmerizing
            blend of rugged landscapes, ancient monasteries, and vibrant
            culture. Imagine a place where time slows down, where towering
            mountains kiss the sky, and crystal-clear lakes reflect a world
            untouched by modern chaos. Whether you’re winding through the
            thrilling twists of Khardung La, one of the world’s highest
            motorable passes, or losing yourself in the tranquility of Pangong
            Lake’s azure waters, Leh-Ladakh is more than a destination—it’s an
            experience that awakens the soul. Here, adventure meets serenity,
            and every moment is a postcard-worthy memory.
          </p>
        </div>
        <div className="destination-images">
          <img className="" src="../assets/3.jpg" />
          <img className="" src="../assets/leh.jpg" />
        </div>
      </div>
    </div>
  );
};
