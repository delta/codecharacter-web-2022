import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import Toast from './components/Toast/Toast';
import styles from './main.module.css';
const Home = lazy(() => import('./pages/Home'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const History = lazy(
  () => import('./components/CommitHistory/HistoryMain/History'),
);
const Login = lazy(() => import('./pages/Auth/Login'));
const Register = lazy(() => import('./pages/Auth/Register'));
const EditorSettings = lazy(() => import('./components/EditorSettings'));

ReactDOM.render(
  <React.StrictMode>
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
              <Route path="/settings" element={<EditorSettings />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </HashRouter>
    <Toast />
  </React.StrictMode>,
  document.getElementById('root'),
);
