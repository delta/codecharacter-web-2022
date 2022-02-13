import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ApiError } from '../../api/ApiConfig';
import { RootState } from '../store';
import {
  startRegister,
  startLogin,
  getUserDetails,
  ChangeUserDetails,
  ChangeUserCreditionals,
} from './UserApi';

export interface user {
  userName: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  country: string;
  college: string;
  avatarId: number;
}

interface register {
  user: user;
  loading: boolean;
  isRegistered: boolean;
  isloggedIn: boolean;
  isSuccess: boolean;
  isSuccessCreditonals: boolean;
  isLogout: boolean;
  error: boolean;
  loginError: string;
}

const initialState: register = {
  user: {
    userName: '',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    country: '',
    college: '',
    avatarId: 0,
  },
  loading: false,
  isRegistered: false,
  isloggedIn: false,
  isSuccess: false,
  isSuccessCreditonals: false,
  isLogout: false,
  error: false,
  loginError: 'no',
};

export const registerAction = createAsyncThunk(
  'user/registerAction',
  async (user: user, { rejectWithValue }) => {
    try {
      const res = await startRegister(user);
      return res.user;
    } catch (error) {
      throw rejectWithValue(error);
    }
  },
);

export const loginAction = createAsyncThunk(
  'user/loginAction',
  async (user: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await startLogin(user);
      return response;
    } catch (error) {
      if (error instanceof ApiError) throw rejectWithValue(error.message);
    }
  },
);

export const getUserDetailsAction = createAsyncThunk(
  'user/userAction',
  async () => {
    try {
      const response = await getUserDetails();
      return response;
    } catch (error) {
      throw error;
    }
  },
);

export const changeUserDetailsAction = createAsyncThunk(
  'user/changeUserDetails',
  async (
    details: { userName: string; college: string; country: string },
    { rejectWithValue },
  ) => {
    try {
      const response = await ChangeUserDetails(details);
      return response;
    } catch (error) {
      throw rejectWithValue('error');
    }
  },
);

export const changeUserCreditionalsAction = createAsyncThunk(
  'user/changeUserCreditionals',
  async (creditionals: {
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
  }) => {
    try {
      const response = await ChangeUserCreditionals(creditionals);
      return response;
    } catch (error) {
      throw error;
    }
  },
);
export const UserSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    switchRegister: state => {
      state.isRegistered = false;
    },
    logout: state => {
      state.user = initialState.user;
      state.isloggedIn = initialState.isloggedIn;
      state.loading = initialState.loading;
      state.isSuccess = initialState.isSuccess;
      state.isLogout = true;
    },
    creditionals: state => {
      state.isSuccessCreditonals = false;
    },
  },
  extraReducers: buider => {
    buider
      .addCase(registerAction.pending, state => {
        state.loading = true;
      })
      .addCase(registerAction.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isRegistered = true;
      })
      .addCase(registerAction.rejected, state => {
        state.loading = false;
        state.isRegistered = false;
      })
      .addCase(loginAction.pending, state => {
        state.loading = true;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        if (action.payload?.user.email)
          state.user.email = action.payload?.user.email;
        state.loading = false;
        state.isloggedIn = true;
      })
      .addCase(loginAction.rejected, (state, action) => {
        if (typeof action.payload == 'string')
          state.loginError = action.payload;
        state.loading = false;
        state.isloggedIn = false;
      })
      .addCase(getUserDetailsAction.pending, state => {
        state.loading = true;
        state.isSuccess = false;
      })
      .addCase(getUserDetailsAction.fulfilled, (state, action) => {
        state.loading = false;
        state.isSuccess = true;
        state.user.name = action.payload.fullName;
        state.user.userName = action.payload.userName;
        state.user.country = action.payload.country;
        state.user.college = action.payload.college;
      })
      .addCase(getUserDetailsAction.rejected, state => {
        state.loading = false;
        state.isSuccess = false;
      })
      .addCase(changeUserDetailsAction.pending, state => {
        state.loading = true;
        state.isSuccess = false;
      })
      .addCase(changeUserDetailsAction.fulfilled, (state, action) => {
        state.loading = false;
        state.isSuccess = true;
        state.user.userName = action.payload.user.userName;
        state.user.country = action.payload.user.country;
        state.user.college = action.payload.user.college;
      })
      .addCase(changeUserDetailsAction.rejected, state => {
        state.loading = false;
        state.isSuccess = false;
      })
      .addCase(changeUserCreditionalsAction.pending, state => {
        state.loading = true;
        state.isSuccessCreditonals = false;
      })
      .addCase(changeUserCreditionalsAction.fulfilled, state => {
        state.loading = false;
        state.isSuccessCreditonals = true;
        state.error = false;
      })
      .addCase(changeUserCreditionalsAction.rejected, state => {
        state.loading = false;
        state.isSuccessCreditonals = false;
        state.error = true;
      });
  },
});
export const { switchRegister, logout, creditionals } = UserSlice.actions;
export const user = (state: RootState): user => state.user.user;
export const loading = (state: RootState): boolean => state.user.loading;
export const isRegistered = (state: RootState): boolean =>
  state.user.isRegistered;
export const isloggedIn = (state: RootState): boolean => state.user.isloggedIn;
export const isLogout = (state: RootState): boolean => state.user.isLogout;
export const isCreditionalError = (state: RootState): boolean =>
  state.user.error;
export const isSuccess = (state: RootState): boolean =>
  state.user.isSuccessCreditonals;

export default UserSlice.reducer;
