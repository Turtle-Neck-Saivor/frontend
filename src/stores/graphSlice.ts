import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  selectMonth: string;
};
let dateToSend = new Date();
let date = dateToSend.toISOString().split('T')[0];
const initialState: InitialState = {
  selectMonth: date,
};
const graphSlice = createSlice({
  name: 'graph',
  initialState,
  reducers: {
    setMonth: (state, action) => {
      state.selectMonth = action.payload;
    },
  },
});

export default graphSlice;
export const { setMonth } = graphSlice.actions;
