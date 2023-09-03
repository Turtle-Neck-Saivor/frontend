import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  nickname: string;
};

const initialState: InitialState = {
  nickname: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.nickname = action.payload;
    },
  },
});

export default userSlice;
export const { setUser } = userSlice.actions;
