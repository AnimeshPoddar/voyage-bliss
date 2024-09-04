import React from "react";

import "./content-block.style.css";
export const ContentBlock = ({ description, title }) => {
  return (
    <div className="content-block-container">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};
