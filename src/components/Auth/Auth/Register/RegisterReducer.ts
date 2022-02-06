import {
  REGISTER,
  REGISTER_PROCESSING,
  REGISTER_FAILED,
} from './RegisterTypes';

interface register {
  user: {
    userName: string;
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    country: string;
    college: string;
    avatarId: number;
  };
  loggedIn: boolean;
  loading: boolean;
  error: string;
}
const initState: register = {
  user: {
    userName: ' ',
    name: ' ',
    email: ' ',
    password: ' ',
    confirmPassword: ' ',
    college: ' ',
    country: ' ',
    avatarId: -1,
  },
  loggedIn: false,
  loading: false,
  error: '',
};
interface actionRegisterSuccess {
  type: string;
  payload: {
    userName: string;
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    country: string;
    college: string;
    avatarId: number;
  };
}

interface actionRegisterProcessing {
  type: string;
}

interface actionRegisterFailed {
  type: string;
  error: string;
}

type actionRegister =
  | actionRegisterSuccess
  | actionRegisterProcessing
  | actionRegisterFailed;
export const RegisterReducers = (
  state = initState,
  action: actionRegister,
): register => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        user: 'payload' in action ? action.payload : initState.user,
        loggedIn: true,
        loading: false,
      };
    case REGISTER_PROCESSING:
      return {
        ...state,
        loggedIn: false,
        loading: true,
      };
    case REGISTER_FAILED:
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
