import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const History = lazy(
  () => import('./components/CommitHistory/HistoryMain/History'),
);
const EditorSettings = lazy(() => import('./components/EditorSettings'))

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/history" element={<History />} />
          <Route path='/settings' element={<EditorSettings/>} />
        </Routes>
      </Suspense>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
