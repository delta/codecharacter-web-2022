import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import battleTvReducer from '../components/BattleTV/BattleTvSlice';
import notifReducer from './Notifs/notifSlice';
import historyReducer from './historyEditor/historyEditorSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    battletv: battleTvReducer,
    notifs: notifReducer,
    historyEditor: historyReducer,
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
