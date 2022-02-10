import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import UserReducer from './User/UserSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: UserReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
