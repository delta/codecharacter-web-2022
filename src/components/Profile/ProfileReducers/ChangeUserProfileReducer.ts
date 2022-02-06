import {
  USER_DETAILS,
  USER_DETAILS_PROCESSING,
  USER_DETAILS_FAILED,
} from '../ProfileTypes';

interface ChangeUser {
  user: { name: string; college: string; country: string };
  loggedIn: boolean;
  loading: boolean;
  error: string;
}
const initState: ChangeUser = {
  user: { name: '', college: '', country: ' ' },
  loggedIn: false,
  loading: false,
  error: '',
};
interface actionUserDetailsChangeSuccess {
  type: string;
  payload: { name: string; college: string; country: string };
  error: string;
}

interface actionUserDetailsChangeProcessing {
  type: string;
}

interface actionUserDetailsChangeFailed {
  type: string;
  error: string;
}

type actionChangeUserDetails =
  | actionUserDetailsChangeSuccess
  | actionUserDetailsChangeProcessing
  | actionUserDetailsChangeFailed;
export const ChangeUserProfileReducers = (
  state = initState,
  action: actionChangeUserDetails,
): ChangeUser => {
  switch (action.type) {
    case USER_DETAILS:
      return {
        ...state,
        user: 'payload' in action ? action.payload : initState.user,
        loggedIn: true,
        loading: false,
      };
    case USER_DETAILS_PROCESSING:
      return {
        ...state,
        loggedIn: false,
        loading: true,
      };
    case USER_DETAILS_FAILED:
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
