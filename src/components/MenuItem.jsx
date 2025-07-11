import React from 'react';

const MenuItem = ({ tea }) => {
    return (

        <div className="menu-item">
            <img
                src="/assets/leaf-svg.svg"
                alt="leaf"
                style={{ width: '20px', marginRight: '0.5rem' }}
            />
            <h3>{tea.name}</h3>
            <h3>{tea.name}</h3>
            <p><strong>Flavor:</strong> {tea.flavor}</p>
            <p><em>Pairings:</em> {tea.pairings}</p>
            <button>Add to Favorites</button>
        </div>
    );
};

export default MenuItem;