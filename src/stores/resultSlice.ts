import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  resultData: number;
  criticalPointRed: number;
  criticalPointYellow: number;
  initK: k;
};

export type k = {
  learlobY: number;
  lshoulderY: number;
};

const initialState: InitialState = {
  resultData: 0,
  criticalPointRed: 0,
  criticalPointYellow: 0,
  initK: { learlobY: 0, lshoulderY: 0 },
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
      state.initK.learlobY = action.payload.learlobY;
      state.initK.lshoulderY = action.payload.lshoulderY;
    },
  },
});

export default resultSlice;
export const { add, criticalPointRed, criticalPointYellow, initValue } =
  resultSlice.actions;
