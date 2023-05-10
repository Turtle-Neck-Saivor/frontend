import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  resultData: number;
  criticalPointRed: number;
  criticalPointYellow: number;
};

const initialState: InitialState = {
  resultData: 0,
  criticalPointRed: 0,
  criticalPointYellow: 0,
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
  },
});

export default resultSlice;
export const { add, criticalPointRed, criticalPointYellow } =
  resultSlice.actions;
