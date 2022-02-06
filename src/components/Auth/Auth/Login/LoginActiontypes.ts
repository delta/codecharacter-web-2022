import { AuthApi } from '@codecharacter-2022/client';
import { apiConfig, ApiError } from '../../../../api/ApiConfig';
import { LOGIN, LOGIN_PROCESSING, LOGIN_FAILED } from './LoginTypes';
import { AppDispatch, RootState } from '../../../../redux/store';
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
interface users {
  email: string;
  password: string;
}

interface LoginSuccessInterface {
  type: string;
  payload: users;
}

interface LoginProcessingInterface {
  type: string;
}

interface LoginFailedInterface {
  type: string;
  error: string;
}

type LoginInterface =
  | LoginSuccessInterface
  | LoginProcessingInterface
  | LoginFailedInterface;
export const startLogin = (
  content: users,
): ThunkAction<void, RootState, null, AnyAction> => {
  return (dispatch: AppDispatch) => {
    dispatch(loginProcessing());
    const authApi = new AuthApi(apiConfig);
    authApi
      .passwordLogin({
        email: content.email,
        password: content.password,
      })
      .then(res => {
        const { token } = res;
        console.log(token);
        dispatch(login(content));
      })
      .catch(error => {
        if (error instanceof ApiError) {
          dispatch(loginFailed(error.message));
        }
      });
  };
};
export const login = (user: users): LoginInterface => {
  return {
    type: LOGIN,
    payload: user,
  };
};

export const loginProcessing = (): LoginInterface => {
  return {
    type: LOGIN_PROCESSING,
  };
};

export const loginFailed = (error: string): LoginInterface => {
  return {
    type: LOGIN_FAILED,
    error: error,
  };
};
