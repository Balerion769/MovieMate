import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';

const FavoriteMovies = () => {
  const favorites = useSelector((state) => state.movies.favorites);

  return (
    <div className="favorite-movies flex flex-wrap gap-4 p-4">
      {favorites.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default FavoriteMovies;
