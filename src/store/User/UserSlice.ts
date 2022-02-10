import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
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
      throw rejectWithValue(error);
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
  'user/chnageUserDetails',
  async (details: { userName: string; college: string; country: string }) => {
    try {
      const response = await ChangeUserDetails(details);
      return response;
    } catch (error) {
      throw error;
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
        state.user.email = action.payload.user.email;
        state.user.password = action.payload.user.password;
        state.loading = false;
        state.isloggedIn = true;
      })
      .addCase(loginAction.rejected, state => {
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
        state.isSuccess = false;
      })
      .addCase(changeUserCreditionalsAction.fulfilled, (state, action) => {
        state.loading = false;
        state.isSuccess = true;
        state.user.password = action.payload;
      })
      .addCase(changeUserCreditionalsAction.rejected, state => {
        state.loading = false;
        state.isSuccess = false;
      });
  },
});
export const { switchRegister } = UserSlice.actions;
export const user = (state: RootState): user => state.user.user;
export const loading = (state: RootState): boolean => state.user.loading;
export const isRegistered = (state: RootState): boolean =>
  state.user.isRegistered;
export const isloggedIn = (state: RootState): boolean => state.user.isloggedIn;
export default UserSlice.reducer;
