import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  resultData: number;
  criticalPointRed: number;
  criticalPointYellow: number;
  initK: number;
};

const initialState: InitialState = {
  resultData: 0,
  criticalPointRed: 0,
  criticalPointYellow: 0,
  initK: 1,
};
const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    add: (state, action) => {
      state.resultData = action.payload;
    },
    criticalPointRed: (state, action) => {
      state.criticalPointRed = action.payload;
    },
    criticalPointYellow: (state, action) => {
      state.criticalPointYellow = action.payload;
    },
    initValue: (state, action) => {
      state.initK = action.payload;
    },
  },
});

export default resultSlice;
export const { add, criticalPointRed, criticalPointYellow, initValue } =
  resultSlice.actions;
