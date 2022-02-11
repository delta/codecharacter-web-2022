import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './store/store';
import { Provider } from 'react-redux';

import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import Toast from './components/Toast/Toast';
import styles from './main.module.css';
import { Counter } from './store/counter/Counter';
const Home = lazy(() => import('./pages/Home'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Leaderboard = lazy(() => import('./components/Leaderboard/Leaderboard'));
const BattleTV = lazy(() => import('./components/BattleTV/BattleTV'));
const History = lazy(
  () => import('./components/CommitHistory/HistoryMain/History'),
);
const Login = lazy(() => import('./pages/Auth/Login'));
const Register = lazy(() => import('./pages/Auth/Register'));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <NavBar />
        <div className={styles.mainWindow}>
          <SideBar />
          <div className={styles.gameArea}>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/history" element={<History />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/battletv" element={<BattleTV />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </HashRouter>
      <Toast />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
