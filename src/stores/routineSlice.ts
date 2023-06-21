import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  todo: SelectedTodo;
};

const initialState: InitialState = {
  todo: {
    checkedStates: [false, false, false, false],
    rate: 0,
  },
};

const routineSlice = createSlice({
  name: 'routine',
  initialState,
  reducers: {
    setSelectedDateTodos: (state, action: PayloadAction<SelectedTodo>) => {
      state.todo = action.payload;
    },
    setCheckDateTodos: (
      state,
      action: PayloadAction<{ index: number; checked: boolean }>,
    ) => {
      const { index, checked } = action.payload;
      state.todo.checkedStates[index] = checked;
      state.todo.rate = state.todo.checkedStates.filter(Boolean).length * 25;
    },
  },
});

export const { setSelectedDateTodos, setCheckDateTodos } = routineSlice.actions;

export default routineSlice;
