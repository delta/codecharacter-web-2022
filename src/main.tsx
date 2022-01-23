import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import { Toaster } from 'react-hot-toast';
import './main.css';
const Home = lazy(() => import('./pages/Home'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const History = lazy(
  () => import('./components/CommitHistory/HistoryMain/History'),
);

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <HashRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Suspense>
    </HashRouter>
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: '#242a3b',
          color: '#ffffff',
          fontFamily: 'Montserrat',
          borderRadius: '5px',
        },
      }}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
