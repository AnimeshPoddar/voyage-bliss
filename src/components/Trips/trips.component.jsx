import React from "react";

import "./trips.style.css";
import { tripMockData } from "../../mocks/trips.mock";

export const Trips = ({ description, title, image }) => {
  return (
    <div className="trips">
      <h1>Our Recent Trips</h1>
      <p className="sub-heading">Discover some unique destinations</p>
      <div className="trip-cards-container">
        {tripMockData.map((trip, index) => {
          return (
            <div key={index} className="trip-card">
              <div className="card-image">
                <img src={`../assets/${trip.image}`} alt="card-image" />
              </div>
              <h4>{trip.title}</h4>
              <p>{trip.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
