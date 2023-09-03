import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type CameraData = {
  nickname: string;
  redCount: number;
  yellowCount: number;
  greenCount: number;
  shoulderAngle: number;
  headAngle: number;
  neckAngle: number;
  distanceMonitor: number;
};

const initialState: CameraData[] = [];

const logSlice = createSlice({
  name: 'log',
  initialState,
  reducers: {
    addCameraData: (state, action: PayloadAction<CameraData>) => {
      state.push(action.payload);
    },
    resetCameraData: () => {
      return initialState;
    },
  },
});

export default logSlice;
export const { addCameraData, resetCameraData } = logSlice.actions;
