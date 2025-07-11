import React from 'react';

const MenuItem = ({ tea }) => {
  const isBotanical = document.body.classList.contains('botanical');

  return (
    <div className={`card ${isBotanical ? 'botanical' : 'pixel'}`}>
      <h3>{tea.name}</h3>
      <p><strong>Flavor:</strong> {tea.flavor}</p>
      <p><em>Pairings:</em> {tea.pairings}</p>
      <button>Add to Favorites</button>
    </div>
  );
};

export default MenuItem;