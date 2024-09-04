import React from "react";

import "./contact-form.style.css";

export const ContactForm = () => {

  return (
    <div className="contact-form-container">
      <h1>Send a message to us here!</h1>
      <form>
        <input placeholder="Name"></input>
        <input placeholder="Email"></input>
        <input placeholder="Subject"></input>
        <textarea placeholder="Message" rows={"4"}></textarea>
        <button >Send Message</button>
      </form>
    </div>
  );
};
