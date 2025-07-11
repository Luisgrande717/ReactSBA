import React from 'react';

const ThemeToggle = () => {
  const toggleTheme = () => {
    document.body.classList.toggle('botanical');
  };

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;