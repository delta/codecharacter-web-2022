import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';

import counterReducer from './counter/counterSlice';
import UserReducer from './User/UserSlice';
import battleTvReducer from '../components/BattleTV/BattleTvSlice';
import notifReducer from './Notifs/notifSlice';
import historyReducer from './historyEditor/historyEditorSlice';
import editorReducer from './Editor/code';
import settingsReducer from './EditorSettings/settings';

const reducers = combineReducers({
  editorState: editorReducer,
  settingsState: settingsReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: UserReducer,
    battletv: battleTvReducer,
    notifs: notifReducer,
    historyEditor: historyReducer,
    codeEditorReducer: persistedReducer,
  },
  middleware: [thunk],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
