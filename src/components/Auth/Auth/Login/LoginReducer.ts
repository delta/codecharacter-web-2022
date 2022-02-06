import { LOGIN, LOGIN_PROCESSING, LOGIN_FAILED } from './LoginTypes';

interface login {
  user: { email: string; password: string };
  loggedIn: boolean;
  loading: boolean;
  error: string;
}
const initState: login = {
  user: { email: '', password: '' },
  loggedIn: false,
  loading: false,
  error: '',
};
interface actionLoginSuccess {
  type: string;
  payload: { email: string; password: string };
  // error: string;
}

interface actionProcessing {
  type: string;
}

interface actionFailed {
  type: string;
  error: string;
}
type LoginAction = actionLoginSuccess | actionProcessing | actionFailed;
export const loginReducers = (
  state = initState,
  action: LoginAction,
): login => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user:
          'payload' in action ? action.payload : { email: ' ', password: ' ' },
        loggedIn: true,
        loading: false,
      };
    case LOGIN_PROCESSING:
      return {
        ...state,
        loggedIn: false,
        loading: true,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        loggedIn: false,
        error: 'error' in action ? action.error : ' ',
      };
    default:
      return state;
  }
};
