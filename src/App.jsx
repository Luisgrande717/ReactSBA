import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Events from './pages/Events.jsx';
import Menu from './pages/Menu.jsx';
import Community from './pages/Community.jsx';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/community" element={<Community />} />
    </Routes>
  </>
);

export default App;