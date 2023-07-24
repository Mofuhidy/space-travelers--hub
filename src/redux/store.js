import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rocketsReducer from './rockets/rocketsSlice';

const store = configureStore(
  { reducer: rocketsReducer },
  applyMiddleware(logger),
);

export default store;
