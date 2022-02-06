import { combineReducers } from 'redux';
import { loginReducers } from '../components/Auth/Auth/Login/LoginReducer';
import { RegisterReducers } from '../components/Auth/Auth/Register/RegisterReducer';
import { ChangeUserProfileReducers } from '../components/Profile/ProfileReducers/ChangeUserProfileReducer';
import { ChangeCreditionalsReducer } from '../components/Profile/ProfileReducers/ChangeCreditionalsReducer';
export const rootReducers = combineReducers({
  login: loginReducers,
  register: RegisterReducers,
  changeUserDetails: ChangeUserProfileReducers,
  changeCreditionals: ChangeCreditionalsReducer,
});
