import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../redux/actions/movieActions';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.movies.favorites);

  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(movie.id));
    } else {
      dispatch(addToFavorites(movie));
    }
  };

  return (
    <div
      className="bg-white shadow-md rounded-lg p-4 m-4 w-80"
      style={{
        backgroundImage: `url(${movie.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
      }}
    >
      <div className="bg-black bg-opacity-50 p-4 rounded-lg">
        <h3 className="text-xl font-bold mb-2">{movie.movie}</h3>
        <p>Rating: {movie.rating}</p>
        <button onClick={handleFavoriteClick} className="text-2xl">
          {isFavorite ? <AiFillHeart className="text-red-500" /> : <AiOutlineHeart />}
        </button>
        <a
          href={movie.imdb_url}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-4 text-blue-500 hover:underline"
        >
          View on IMDb
        </a>
      </div>
    </div>
  );
};

export default MovieCard;
