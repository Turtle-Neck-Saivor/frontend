import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { HealthProps } from '../types/healthLog';

const initialState: HealthProps[] = [];

const logSlice = createSlice({
  name: 'log',
  initialState,
  reducers: {
    addCameraData: (state, action: PayloadAction<HealthProps>) => {
      state.push(action.payload);
    },
    resetCameraData: () => {
      return initialState;
    },
  },
});

export default logSlice;
export const { addCameraData, resetCameraData } = logSlice.actions;
