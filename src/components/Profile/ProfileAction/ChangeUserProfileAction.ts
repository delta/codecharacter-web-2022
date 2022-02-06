import { CurrentUserApi } from '@codecharacter-2022/client';
import { apiConfig, ApiError } from '../../../api/ApiConfig';
import {
  USER_DETAILS,
  USER_DETAILS_PROCESSING,
  USER_DETAILS_FAILED,
} from '../ProfileTypes';
import { AppDispatch, RootState } from '../../../redux/store';
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
interface ChangeUserDetails {
  name: string;
  college: string;
  country: string;
}

interface ChangeUsersDetailsSuccess {
  type: string;
  payload: ChangeUserDetails;
  error: string;
}

interface ChangeUserDetailsProcessing {
  type: string;
}

interface ChangeUserDetailsFailed {
  type: string;
  error: string;
}

type ChangeUserDetailsInterface =
  | ChangeUsersDetailsSuccess
  | ChangeUserDetailsProcessing
  | ChangeUserDetailsFailed;
export const startChangeUserDetails = (
  content: ChangeUserDetails,
): ThunkAction<void, RootState, null, AnyAction> => {
  return (dispatch: AppDispatch) => {
    dispatch(ChangeUserDetailsProcessing());
    const currentUserapi = new CurrentUserApi(apiConfig);
    currentUserapi
      .updateCurrentUser({
        name: content.name,
        college: content.college,
        country: content.country,
      })
      .then(res => {
        console.log(res);
        dispatch(ChangeUserDetails(content));
      })
      .catch(error => {
        if (error instanceof ApiError) {
          dispatch(ChangeUserDetailsFailed(error.message));
        }
      });
  };
};
export const ChangeUserDetails = (
  user: ChangeUserDetails,
): ChangeUserDetailsInterface => {
  return {
    type: USER_DETAILS,
    payload: user,
  };
};

export const ChangeUserDetailsProcessing = (): ChangeUserDetailsInterface => {
  return {
    type: USER_DETAILS_PROCESSING,
  };
};

export const ChangeUserDetailsFailed = (
  error: string,
): ChangeUserDetailsInterface => {
  return {
    type: USER_DETAILS_FAILED,
    error: error,
  };
};
