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

const initialState = { rockets: [] };

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    bookingRocket: (state, action) => {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: true };
      });
      return newState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      const rockets = action.payload;
      const result = rockets.map((rocket) => ({
        id: rocket.id,
        title: rocket.rocket_name,
        image: rocket.flickr_images[1],
        description: rocket.description,
      }));
      state.rockets = result;
    }).addCase(fetchRockets.rejected, (state) => state);
  },
});

export default rocketsSlice.reducer;
