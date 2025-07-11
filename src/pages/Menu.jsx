import React from 'react';
import MenuItem from '../components/MenuItem.jsx';

const mockMenu = [
  {
    id: 1,
    name: 'Pixel Mint',
    flavor: 'Mint + Caffeine-free',
    pairings: 'Perfect for puzzle games and chill sessions'
  },
  {
    id: 2,
    name: 'Botanical Boba',
    flavor: 'Floral + Light Caffeine',
    pairings: 'Best with storytelling games and visual novels'
  }
];

const Menu = () => {
  return (
    <div className="menu-page">
      <h2>Tea Blends</h2>
      {mockMenu.map((tea) => (
        <MenuItem key={tea.id} tea={tea} />
      ))}
    </div>
  );
};

export default Menu;