import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  resultData: number;
};

const initialState: InitialState = {
  resultData: 0,
};
const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    add: (state, action) => {
      state.resultData = action.payload;
      // if (state.resultData.length >= 30) {
      //   state.resultData.shift();
      //   state.resultData.push(action.payload);
      // } else {
      //   state.resultData.push(action.payload);
      // }
    },
  },
});

export default resultSlice;
export const { add } = resultSlice.actions;
