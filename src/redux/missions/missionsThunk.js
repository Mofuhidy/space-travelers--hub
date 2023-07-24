import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = 'https://api.spacexdata.com/v3/missions';
export const FetchMissions = createAsyncThunk(
  'Missions/FetchMissions',

  async (_, thunkAPI) => {
    try {
      const resp = await axios(baseUrl);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Error fetching missions');
    }
  },
);
export default FetchMissions;
