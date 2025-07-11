import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Events from './pages/Events.jsx';
import Menu from './pages/Menu.jsx';
import Community from './pages/Community.jsx';

const App = () => {
  const [theme, setTheme] = useState('pixel'); // default theme

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </>
  );
};

export default App;