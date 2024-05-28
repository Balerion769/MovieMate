import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MovieList from './pages/MovieList';
import FavoriteMovies from './pages/FavoriteMovies';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/favorites" element={<FavoriteMovies />} />
      </Routes>
    </>
  );
};

export default App;
