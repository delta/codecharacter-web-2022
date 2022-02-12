import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './main_page.module.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Toast from './components/Toast/Toast';
import classnames from 'classnames';
import { store } from './redux/store';
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

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <NavBar />
            <Container className={classnames(styles.mainContainer)} fluid>
              <Row className={classnames(styles.mainRow)}>
                <Col
                  className={classnames(styles.sideBarCol)}
                  xs="auto"
                  sm="auto"
                  md="auto"
                  lg="auto"
                  xl="auto"
                  xxl="auto"
                >
                  <SideBar />
                </Col>
                <Col className={classnames(styles.componentCol)}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/settings" element={<EditorSettings />} />
                  </Routes>
                </Col>
              </Row>
            </Container>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </Suspense>
        </HashRouter>
        <Toast />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
