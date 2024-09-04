import React from "react";
import "./destination.styles.css";
import { destinationMockData } from "../../mocks";
export const Destination = () => {
  return (
    <div className="destination">
      <h1> Popular Places To Visit</h1>
      <p>
        Travel beyond the ordinary with our expertly crafted itineraries and
        seamless planning.
      </p>
      {destinationMockData.map((destination, index) => {
        return (
          <div
            key={index}
            className={index % 2 === 0 ? "even-description" : "odd-description"}
          >
            <div className="des-text">
              <h2>{destination.title}</h2>
              <p>{destination.description}</p>
            </div>
            <div className="destination-images">
              {destination.images.map((image, index) => {
                return (
                  <img
                    key={index}
                    className=""
                    src={`../assets/${image}`}
                    alt={`image-${index + 1}`}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    
    </div>
  );
};
