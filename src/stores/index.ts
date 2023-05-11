import { configureStore } from '@reduxjs/toolkit';
import resultSlice from './resultSlice';
import cameraSlice from './cameraSlice';
import logSlice from './logSlice';

const store = configureStore({
  reducer: {
    result: resultSlice.reducer,
    camera: cameraSlice.reducer,
    log: logSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
