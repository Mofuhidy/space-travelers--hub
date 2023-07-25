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
  'missions/fetchMissions',
  async (_, thunkAPI) => {
    try {
      const response = await fetch(baseUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const myData = toCamelCase(data);
      return myData;
    } catch (error) {
      return thunkAPI.rejectWithValue('Error fetching missions');
    }
  },
);

export default FetchMissions;
