import { createSlice } from '@reduxjs/toolkit';
import { FetchMissions } from './missionsThunk';

const initialState = {
  missions: [],
  activeMissions: [], // New array to store active missions
  isLoading: false,
};

const missionHandlerReducer = (state, { payload }) => ({
  ...state,
  missions: state.missions.map((mission) => (mission.missionId === payload
    ? { ...mission, reserved: !mission.reserved }
    : mission)),
  activeMissions: state.activeMissions.includes(payload)
    ? state.activeMissions.filter((missionId) => missionId !== payload)
    : [...state.activeMissions, payload],
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

          reserved: state.activeMissions.includes(element.missionId),
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
