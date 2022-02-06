import { UserApi } from '@codecharacter-2022/client';
import { apiConfig, ApiError } from '../../../../api/ApiConfig';
import {
  REGISTER,
  REGISTER_PROCESSING,
  REGISTER_FAILED,
} from './RegisterTypes';
import { AppDispatch, RootState } from '../../../../redux/store';
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
interface userRegister {
  userName: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  country: string;
  college: string;
  avatarId: number;
}

interface RegisterSuccessInterface {
  type: string;
  payload: userRegister;
}

interface RegisterProcessingInterface {
  type: string;
}
interface RegisterFailedInteface {
  type: string;
  error: string;
}

type RegisterInterface =
  | RegisterSuccessInterface
  | RegisterProcessingInterface
  | RegisterFailedInteface;
export const startRegister = (
  content: userRegister,
): ThunkAction<void, RootState, null, AnyAction> => {
  return (dispatch: AppDispatch) => {
    dispatch(registerProcessing());
    const userApi = new UserApi(apiConfig);
    userApi
      .register({
        username: content.userName,
        name: content.name,
        email: content.email,
        password: content.password,
        passwordConfirmation: content.confirmPassword,
        country: content.country,
        college: content.college,
        avatarId: 0,
      })
      .then(res => {
        console.log(res);
        dispatch(register(content));
      })
      .catch(error => {
        if (error instanceof ApiError) {
          dispatch(registerFailed(error.message));
        }
      });
  };
};
export const register = (user: userRegister): RegisterInterface => {
  return {
    type: REGISTER,
    payload: user,
    error: '',
  };
};

export const registerProcessing = (): RegisterInterface => {
  return {
    type: REGISTER_PROCESSING,
  };
};

export const registerFailed = (error: string): RegisterInterface => {
  return {
    type: REGISTER_FAILED,
    error: error,
  };
};
