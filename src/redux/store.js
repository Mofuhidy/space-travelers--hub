import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missonsSlice';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
  },
});
export default store;
