import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  isDetect: boolean;
};

const initialState: InitialState = {
  isDetect: false,
};
const cameraSlice = createSlice({
  name: 'camera',
  initialState,
  reducers: {
    set: (state, action) => {
      state.isDetect = action.payload;
    },
  },
});

export default cameraSlice;
export const { set } = cameraSlice.actions;
