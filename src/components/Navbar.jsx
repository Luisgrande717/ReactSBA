import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import ThemeToggle from './ThemeToggle.jsx';

const Navbar = ({ theme, setTheme }) => {
  return (
    <nav className={`navbar ${theme}`}>
      <h1>Esports Café</h1>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/events">Events</NavLink></li>
        <li><NavLink to="/menu">Menu</NavLink></li>
        <li><NavLink to="/community">Community</NavLink></li>
      </ul>
      <ThemeToggle theme={theme} setTheme={setTheme} />
    </nav>
  );
};

export default Navbar;