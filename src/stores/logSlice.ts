import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  allCount: number;
  redCount: number;
  yellowCount: number;
};

const initialState: InitialState = {
  allCount: 0,
  redCount: 0,
  yellowCount: 0,
};
const logSlice = createSlice({
  name: 'camera',
  initialState,
  reducers: {
    setAllCount: (state, action) => {
      if (action.payload) state.allCount = 0;
      else state.allCount++;
    },
    setRedCount: (state, action) => {
      if (action.payload) state.redCount = 0;
      else state.redCount++;
    },
    setYellowCount: (state, action) => {
      if (action.payload) state.yellowCount = 0;
      else state.yellowCount++;
    },
  },
});

export default logSlice;
export const { setAllCount, setRedCount, setYellowCount } = logSlice.actions;
