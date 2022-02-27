import { lazy, useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { isloggedIn, loggedIn } from './store/User/UserSlice';

const Home = lazy(() => import('./pages/Home/Home'));
const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'));
const MapDesigner = lazy(() => import('./components/MapDesigner/MapDesigner'));
const History = lazy(
  () => import('./components/CommitHistory/HistoryMain/History'),
);
const Login = lazy(() => import('./pages/Auth/LoginForm'));
const Register = lazy(() => import('./pages/Auth/RegisterForm'));
const Leaderboard = lazy(() => import('./components/Leaderboard/Leaderboard'));
const BattleTV = lazy(() => import('./components/BattleTV/BattleTV'));
const Verify = lazy(
  () => import('./components/Auth/Auth/Register/ActivateUser/ActivateUser'),
);
const ResetPassword = lazy(
  () =>
    import(
      './components/Auth/Auth/Login/ForgetPassword/ResetpasswordVerifcation'
    ),
);
const IncompleteProfile = lazy(
  () =>
    import('./components/Auth/Auth/Login/IncompleteProfile/incompeleteProfile'),
);

export default function AllRoutes(): JSX.Element {
  const dispatch = useAppDispatch();
  const logIn = useAppSelector(isloggedIn);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(loggedIn());
    }
  }, []);

  return logIn ? (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/mapdesigner" element={<MapDesigner />} />
      <Route path="/history" element={<History />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/battletv" element={<BattleTV />} />
      <Route path="/activate" element={<Verify />} />
      <Route path="/incomplete-profile" element={<IncompleteProfile />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/activate" element={<Verify />} />
      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  );
}
