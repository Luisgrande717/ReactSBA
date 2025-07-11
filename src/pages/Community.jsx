import React from 'react';
import ProfileCard from '../components/ProfileCard.jsx';

const mockUsers = [
  {
    id: 1,
    username: 'LuisG',
    favoriteGame: 'Valorant',
    rsvps: 3
  },
  {
    id: 2,
    username: 'ChibiTeaMaster',
    favoriteGame: 'Stardew Valley',
    rsvps: 1
  }
];

const Community = () => {
  return (
    <div className="community-page">
      <h2>Our Players</h2>
      {mockUsers.map((user) => (
        <ProfileCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Community;