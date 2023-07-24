import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api = 'https://api.spacexdata.com/v3/rockets';

const fetchRockets = createAsyncThunk(
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
  reducers: {},
  extraReducers: (builder) => {
    builder.addcase(fetchRockets.fulfilled, (state, action) => {
      const rockets = action.payload;
      const result = rockets.map((rocket) => ({
        id: rocket.id,
        title: rocket.rocket_name,
        image: rocket.flickr_images[0],
        description: rocket.description,
      }));
      state.rockets = result;
    }).builder.addcase(fetchRockets.rejected, (state) => state);
  },
});

export default rocketsSlice.reducer;
