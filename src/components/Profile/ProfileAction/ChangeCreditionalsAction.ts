import { CurrentUserApi } from '@codecharacter-2022/client';
import { apiConfig, ApiError } from '../../../api/ApiConfig';
import {
  CREDITIONALS,
  CREDITIONALS_PROCESSING,
  CREDITIONALS_FAILED,
} from '../ProfileTypes';
import { AppDispatch, RootState } from '../../../redux/store';
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
interface ChangeCreditionals {
  OldPassword: string;
  NewPassword: string;
  ConfirmPassword: string;
}

interface ChangeCreditionalSuccess {
  type: string;
  payload: ChangeCreditionals;
  error: string;
}

interface ChangeCreditionalProcessing {
  type: string;
}

interface ChangeCreditionalFailed {
  type: string;
  error: string;
}

type ChangeCreditionalInterface =
  | ChangeCreditionalSuccess
  | ChangeCreditionalProcessing
  | ChangeCreditionalFailed;
export const startChangeCreditionals = (
  content: ChangeCreditionals,
): ThunkAction<void, RootState, null, AnyAction> => {
  return (dispatch: AppDispatch) => {
    dispatch(ChangeCreditionalsProcessing());
    const currentUserapi = new CurrentUserApi(apiConfig);
    currentUserapi
      .updatePassword({
        oldPassword: content.OldPassword,
        password: content.NewPassword,
        passwordConfirmation: content.ConfirmPassword,
      })
      .then(res => {
        console.log(res);
        dispatch(ChangeCreditionals(content));
      })
      .catch(error => {
        if (error instanceof ApiError) {
          dispatch(ChangeCredtionalsFailed(error.message));
        }
      });
  };
};
export const ChangeCreditionals = (
  creditionals: ChangeCreditionals,
): ChangeCreditionalInterface => {
  return {
    type: CREDITIONALS,
    payload: creditionals,
  };
};

export const ChangeCreditionalsProcessing = (): ChangeCreditionalInterface => {
  return {
    type: CREDITIONALS_PROCESSING,
  };
};

export const ChangeCredtionalsFailed = (
  error: string,
): ChangeCreditionalInterface => {
  return {
    type: CREDITIONALS_FAILED,
    error: error,
  };
};
