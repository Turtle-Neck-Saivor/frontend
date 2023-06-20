import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  turtleItem: number;
  discItem: number;
};

const initialState: InitialState = {
  turtleItem: 0,
  discItem: 0,
};
const diagnosisSlice = createSlice({
  name: 'diagnosis',
  initialState,
  reducers: {
    setItem: (state, action) => {
      if (action.payload === 'turtle') state.turtleItem++;
      else if (action.payload === 'disc') state.discItem++;
    },
    deleteItem: (state, action) => {
      if (action.payload === 'turtle') state.turtleItem--;
      else if (action.payload === 'disc') state.discItem--;
    },
    clearItem: (state) => {
      state.discItem = 0;
      state.turtleItem = 0;
    },
  },
});

export default diagnosisSlice;
export const { setItem, deleteItem, clearItem } = diagnosisSlice.actions;
