import {
  CREDITIONALS,
  CREDITIONALS_PROCESSING,
  CREDITIONALS_FAILED,
} from '../ProfileTypes';

interface ChangeCreditionals {
  user: { OldPassword: string; NewPassword: string; ConfirmPassword: string };
  loggedIn: boolean;
  loading: boolean;
  error: string;
}
const initState: ChangeCreditionals = {
  user: { OldPassword: '', NewPassword: '', ConfirmPassword: ' ' },
  loggedIn: false,
  loading: false,
  error: '',
};
interface actionChangeCreditionalSuccess {
  type: string;
  payload: {
    OldPassword: string;
    NewPassword: string;
    ConfirmPassword: string;
  };
  error: string;
}

interface actionChangeCreditionalProcessing {
  type: string;
}

interface actionChangeCreditionalFailed {
  type: string;
  error: string;
}

type actionChangeCreditional =
  | actionChangeCreditionalSuccess
  | actionChangeCreditionalProcessing
  | actionChangeCreditionalFailed;
export const ChangeCreditionalsReducer = (
  state = initState,
  action: actionChangeCreditional,
): ChangeCreditionals => {
  switch (action.type) {
    case CREDITIONALS:
      return {
        ...state,
        user: 'payload' in action ? action.payload : initState.user,
        loggedIn: true,
        loading: false,
      };
    case CREDITIONALS_PROCESSING:
      return {
        ...state,
        loggedIn: false,
        loading: true,
      };
    case CREDITIONALS_FAILED:
      return {
        ...state,
        loading: false,
        loggedIn: false,
        error: 'error' in action ? action.error : initState.error,
      };
    default:
      return state;
  }
};
