import axios from 'axios';

export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

export const fetchMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(process.env.REACT_APP_MOVIES_API_URL);
    dispatch({ type: FETCH_MOVIES_SUCCESS, payload: response.data });
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
};

export const addToFavorites = (movie) => ({
  type: ADD_TO_FAVORITES,
  payload: movie,
});

export const removeFromFavorites = (movieId) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: movieId,
});
