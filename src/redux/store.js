import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketsReducer from './rockets/rocketsSlice';
import missionsReducer from './missions/missonsSlice';

const store = configureStore(
  {
    reducer: {
      rockets: rocketsReducer,
      missions: missionsReducer,
    },
  },
  applyMiddleware(logger, thunk),
);

export default store;
