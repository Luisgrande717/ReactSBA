import React from 'react';

const ProfileCard = ({ user }) => {
  return (
    <div className="profile-card">
      <h3>{user.username}</h3>
      <p><strong>Favorite Game:</strong> {user.favoriteGame}</p>
      <p><strong>RSVPs:</strong> {user.rsvps}</p>
    </div>
  );
};

export default ProfileCard;