import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
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