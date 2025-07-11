import React from 'react';
import EventCard from '../components/EventCard.jsx';

const mockEvents = [
  {
    id: 1,
    title: 'Rocket League Showdown',
    date: 'July 20, 2025',
    location: 'Esports Café Arena',
    description: 'Team up and battle it out in this high-octane tourney!',
    themeMovie: 'Fast & Furious'
  },
  {
    id: 2,
    title: 'Street Fighter Duel Night',
    date: 'July 26, 2025',
    location: 'Main Lounge',
    description: 'Classic arcade vibes meet modern competition.',
    themeMovie: 'Kung Fu Hustle'
  }
];

const Events = () => {
  return (
    <div className="events-page">
      <h2>Upcoming Events</h2>
      {mockEvents.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default Events;