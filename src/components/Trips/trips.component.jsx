import React from "react";

import "./trips.style.css";

export const Trips = () => {
  return (
    <div className="trips">
      <h1>Recent Trips</h1>
      <p>Discover some unique destinations</p>
      <div className="trip-cards-container">
        <div className="trip-card">
          <div className="card-image">
            <img src="../assets/1.jpg" alt="card-image" />
          </div>
          <h4>Place name</h4>
          <p>
            Endowed with some of the most pristine and magnificent beaches that
            you can find within reach of the Bay of Bengal, the Andaman and
            Nicobar Islands is a thriving tourist destination. They are the
            perfect coastal destination that allows you to relax and muse over
            the turquoise-blue ocean, away from your busy lifestyle.
          </p>
        </div>

        <div className="trip-card">
          <div className="card-image">
            <img src="../assets/1.jpg" alt="card-image" />
          </div>
          <h4>Place name</h4>
          <p>
            Endowed with some of the most pristine and magnificent beaches that
            you can find within reach of the Bay of Bengal, the Andaman and
            Nicobar Islands is a thriving tourist destination. They are the
            perfect coastal destination that allows you to relax and muse over
            the turquoise-blue ocean, away from your busy lifestyle.
          </p>
        </div>

        <div className="trip-card">
          <div className="card-image">
            <img src="../assets/1.jpg" alt="card-image" />
          </div>
          <h4>Place name</h4>
          <p>
            Endowed with some of the most pristine and magnificent beaches that
            you can find within reach of the Bay of Bengal, the Andaman and
            Nicobar Islands is a thriving tourist destination. They are the
            perfect coastal destination that allows you to relax and muse over
            the turquoise-blue ocean, away from your busy lifestyle.
          </p>
        </div>
      </div>
    </div>
  );
};
