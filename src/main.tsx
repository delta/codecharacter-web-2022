import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Leaderboard = lazy(() => import('./components/Leaderboard/Leaderboard'));

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </Suspense>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
