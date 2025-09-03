import React from 'react';

const WhatsApp= () => {
  const phoneNumber = "918929170870"; // <-- Apna number dalen
  const message = "Hello, I want to contact you!";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img
        src="https://cdn-icons-png.flaticon.com/512/124/124034.png" // WhatsApp icon
        alt="Chat on WhatsApp"
        className='fixed md:bottom-4 bottom-2 right-4 z-50 cursor-pointer rounded-2xl'
        style={{ width: "50px", height: "50px" }}
      />
    </a>
  );
};

export default WhatsApp;
