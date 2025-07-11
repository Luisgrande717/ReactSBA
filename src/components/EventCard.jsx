import React from 'react';

const EventCard = ({ event }) => {
  const isBotanical = document.body.classList.contains('botanical');

  return (
    <div className={`card ${isBotanical ? 'botanical' : 'pixel'}`}>
      <h3>{event.title}</h3>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p>{event.description}</p>
      <p><em>Theme Movie: {event.themeMovie}</em></p>
      <button>RSVP</button>
    </div>
  );
};

export default EventCard;