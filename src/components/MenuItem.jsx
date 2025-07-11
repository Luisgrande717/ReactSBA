import React from 'react';

const MenuItem = ({ tea }) => {
  return (
    <div className="menu-item">
      <h3>{tea.name}</h3>
      <p><strong>Flavor:</strong> {tea.flavor}</p>
      <p><em>Pairings:</em> {tea.pairings}</p>
      <button>Add to Favorites</button>
    </div>
  );
};

export default MenuItem;