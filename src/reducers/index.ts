import { combineReducers } from 'redux';
import { CommitHistoryReducer } from './CommitHistoryReducer';

export const rootReducers = combineReducers({
  codehistory: CommitHistoryReducer,
});
