import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  isDetect: boolean;
  isInit: boolean;
  isIniting: boolean;
};

const initialState: InitialState = {
  isDetect: false,
  isInit: false,
  isIniting: false,
};
const cameraSlice = createSlice({
  name: 'camera',
  initialState,
  reducers: {
    set: (state, action) => {
      state.isDetect = action.payload;
    },
    init: (state, action) => {
      state.isInit = action.payload;
    },
    initing: (state, action) => {
      state.isIniting = action.payload;
    },
  },
});

export default cameraSlice;
export const { set, init, initing } = cameraSlice.actions;
