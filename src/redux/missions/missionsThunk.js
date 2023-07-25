import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = 'https://api.spacexdata.com/v3/missions';

const toCamelCase = (data) => data.map(
  ({ mission_name: missionName, mission_id: missionId, description }) => ({
    missionName,
    missionId,
    description,
    reserved: false,
  }),
);

export const FetchMissions = createAsyncThunk(
  'Missions/FetchMissions',
  async (_, thunkAPI) => {
    try {
      const resp = await axios(baseUrl);
      const myData = toCamelCase(resp.data);
      return myData;
    } catch (error) {
      return thunkAPI.rejectWithValue('Error fetching missions');
    }
  },
);

export default FetchMissions;
