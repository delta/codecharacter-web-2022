import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
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
            </Routes>
          </Suspense>
        </div>
      </div>
    </HashRouter>
    <Toast />
  </React.StrictMode>,
  document.getElementById('root'),
);
