import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import UserReducer from './User/UserSlice';
import battleTvReducer from '../components/BattleTV/BattleTvSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: UserReducer,
    battletv: battleTvReducer,
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
