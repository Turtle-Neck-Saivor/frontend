import { configureStore } from '@reduxjs/toolkit';
import resultSlice from './resultSlice';
import cameraSlice from './cameraSlice';
import logSlice from './logSlice';
import diagnosisSlice from './diagnosisSlice';
import routineSlice from './routineSlice';
import graphSlice from './graphSlice';
import userSlice from './userSlice';

const store = configureStore({
  reducer: {
    result: resultSlice.reducer,
    camera: cameraSlice.reducer,
    log: logSlice.reducer,
    diagnosis: diagnosisSlice.reducer,
    routine: routineSlice.reducer,
    graph: graphSlice.reducer,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
