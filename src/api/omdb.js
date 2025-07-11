import axios from 'axios';

const API_KEY = 'b6c0048'; 
export const fetchMovieDetails = async (title) => {
  try {
    const response = await axios.get(`https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie data:', error);
    return null;
  }
};