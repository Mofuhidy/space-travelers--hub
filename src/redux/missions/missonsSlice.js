import { createSlice } from '@reduxjs/toolkit';
import { FetchMissions } from './missionsThunk';

const initialState = {
  missions: [],
  isLoading: false,
};
const missionHandlerReducer = (state, { payload }) => ({
  ...state,
  missions: state.missions.map((mission) => (mission.missionId === payload
    ? { ...mission, reserved: !mission.reserved }
    : mission)),
});
const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    missionHandler: missionHandlerReducer,
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchMissions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(FetchMissions.fulfilled, (state, action) => {
        state.isLoading = false;
        const data = action.payload;

        const missions = data.map((element) => ({
          missionId: element.missionId,
          missionName: element.missionName,
          description: element.description,
          reserved: false,
        }));
        state.missions = missions;
      })
      .addCase(FetchMissions.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
export const { missionHandler } = missionsSlice.actions;
export default missionsSlice.reducer;
