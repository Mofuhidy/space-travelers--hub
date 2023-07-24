import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rocketsReducer from './rockets/rocketsSlice';
import missionsReducer from './missions/missonsSlice';

const store = configureStore(
  {
    reducer: {
      rockets: rocketsReducer,
      missions: missionsReducer,
    },
  },
  applyMiddleware(logger),
);

export default store;
