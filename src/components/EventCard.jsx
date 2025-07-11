import React, { useEffect, useState } from 'react';
import { fetchMovieDetails } from '../api/omdb.js';

const EventCard = ({ event }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(event.themeMovie).then(data => setMovie(data));
  }, [event.themeMovie]);

  return (
    <div className={`card ${document.body.classList.contains('botanical') ? 'botanical' : 'pixel'}`}>
      <h3>{event.title}</h3>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p>{event.description}</p>
      <p><em>Theme Movie:</em> {event.themeMovie}</p>

      {movie && (
        <div className="movie-details">
          <img src={movie.Poster} alt={`${movie.Title} Poster`} style={{ width: '100px' }} />
          <p><strong>Plot:</strong> {movie.Plot}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>IMDb:</strong> {movie.imdbRating}</p>
        </div>
      )}

      <button>RSVP</button>
    </div>
  );
};

export default EventCard;