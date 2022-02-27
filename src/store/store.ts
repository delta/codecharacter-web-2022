import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';

import UserReducer from './User/UserSlice';
import battleTvReducer from '../components/BattleTV/BattleTvSlice';
import notifReducer from './Notifs/notifSlice';
import historyReducer from './historyEditor/historyEditorSlice';
import editorReducer from './editor/code';
import settingsReducer from './EditorSettings/settings';
import logReducer from './rendererLogs/logSlice';
import selfMatchModalReducer from './SelfMatchMakeModal/SelfMatchModal';

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
    user: UserReducer,
    battletv: battleTvReducer,
    notifs: notifReducer,
    historyEditor: historyReducer,
    codeEditorReducer: persistedReducer,
    logs: logReducer,
    selfMatchModal: selfMatchModalReducer,
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
