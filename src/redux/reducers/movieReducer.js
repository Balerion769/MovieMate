import { FETCH_MOVIES_SUCCESS, ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from '../actions/movieActions';

const initialState = {
  movies: [],
  favorites: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload.sort((a, b) => b.rating - a.rating),
      };
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter((movie) => movie.id !== action.payload),
      };
    default:
      return state;
  }
};

export default movieReducer;
