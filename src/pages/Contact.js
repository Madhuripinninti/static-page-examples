import React from 'react';
import './Contact.css'; // Import the CSS file for styling

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Contact form or information.</p>
      <div className="button-container">
        <button className="contact-button">Search</button>
        <button className="contact-button">Friend</button>
        <button className="contact-button">Request</button>
        <button className="contact-button">Stranger</button>
      </div>
    </div>
  );
};

export default Contact;
