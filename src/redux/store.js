import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './reducers/movieReducer';
import {thunk} from 'redux-thunk';

const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
