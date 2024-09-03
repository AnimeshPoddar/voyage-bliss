import React from "react";

import "./hero-section.styles.css";

export const HeroSection = ({
  buttonClassName,
  buttonLabel,
  cName,
  description,
  heroImage,
  heroTitle,
  heroUrl,
}) => {
  return (
    <div className={cName}>
      {heroImage && (
        <img
          className="hero-section-image"
          src={`../assets/${heroImage}`}
          alt="hero-image"
        />
      )}

      <div className="hero-section-text">
        {heroTitle && <h1>{heroTitle}</h1>}
        {description && <p>Choose your destination.</p>}
        {heroUrl && (
          <a className={buttonClassName} href={heroUrl}>
            {buttonLabel}
          </a>
        )}
      </div>
    </div>
  );
};
