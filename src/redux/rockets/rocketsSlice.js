import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api = 'https://api.spacexdata.com/v3/rockets';

export const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets',
  async () => {
    const rocketsData = await axios.get(api);
    return rocketsData.data;
  },
);

const initialState = { rockets: [], activeRockets: [] };

const rocketHandlerReducer = (state, { payload }) => ({
  ...state,
  rockets: state.rockets.map((rocket) => (rocket.id === payload
    ? { ...rocket, reserved: !rocket.reserved }
    : rocket)),
  activeRockets: state.activeRockets.includes(payload)
    ? state.activeRockets.filter((rocketId) => rocketId !== payload)
    : [...state.activeRockets, payload],
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    rocketHandler: rocketHandlerReducer,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      const rockets = action.payload;
      const result = rockets.map((rocket) => ({
        id: rocket.id,
        title: rocket.rocket_name,
        image: rocket.flickr_images[1],
        description: rocket.description,
        reserved: state.activeRockets.includes(rocket.id),
      }));
      state.rockets = result;
    }).addCase(fetchRockets.rejected, (state) => state);
  },
});

export const { rocketHandler } = rocketsSlice.actions;
export default rocketsSlice.reducer;
