import { CHANGE_EDITOR_CODE, CHANGE_MAP } from '../types';

const intialState = {
  code: '',
  map: '',
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const CommitHistoryReducer = (
  state = intialState,
  action: { type: string; payload: string },
) => {
  switch (action.type) {
    case CHANGE_EDITOR_CODE:
      return {
        ...state,
        code: action.payload,
      };
    case CHANGE_MAP:
      return {
        ...state,
        map: action.payload,
      };
    default:
      return state;
  }
};
