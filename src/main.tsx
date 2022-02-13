import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './main.module.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Toast from './components/Toast/Toast';
import classnames from 'classnames';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

const persistor = persistStore(store);
const Home = lazy(() => import('./pages/Home'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const NavBar = lazy(() => import('./components/NavBar/NavBar'));
const SideBar = lazy(() => import('./components/SideBar/SideBar'));
const History = lazy(
  () => import('./components/CommitHistory/HistoryMain/History'),
);
const Login = lazy(() => import('./pages/Auth/Login'));
const Register = lazy(() => import('./pages/Auth/Register'));
const EditorSettings = lazy(() => import('./components/EditorSettings'));
import { Counter } from './store/counter/Counter';
const Leaderboard = lazy(() => import('./components/Leaderboard/Leaderboard'));
const BattleTV = lazy(() => import('./components/BattleTV/BattleTV'));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <EditorSettings />
            <NavBar />
            <div className={styles.mainWindow}>
              <SideBar />
              <div className={styles.gameArea}>
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
              </div>
            </div>
          </Suspense>
        </HashRouter>
        <Toast />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
