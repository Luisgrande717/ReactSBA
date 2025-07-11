import React from 'react';

const ProfileCard = ({ user }) => {
  const isBotanical = document.body.classList.contains('botanical');

  return (
    <div className={`card ${isBotanical ? 'botanical' : 'pixel'}`}>
      <h3>{user.username}</h3>
      <p><strong>Favorite Game:</strong> {user.favoriteGame}</p>
      <p><strong>RSVPs:</strong> {user.rsvps}</p>
    </div>
  );
};

export default ProfileCard;