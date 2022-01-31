import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const Home = lazy(() => import('./pages/Home'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Leaderboard = lazy(() => import('./components/Leaderboard/Leaderboard'));
const BattleTV = lazy(() => import('./components/BattleTV/BattleTV'));
const History = lazy(
  () => import('./components/CommitHistory/HistoryMain/History'),
);

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/battletv" element={<BattleTV />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Suspense>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
