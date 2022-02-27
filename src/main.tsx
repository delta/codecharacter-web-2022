import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './main.module.css';
import { HashRouter } from 'react-router-dom';
import Toast from './components/Toast/Toast';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import Loader from './components/Loader/Loader';
import './websocket/websocket';
import AllRoutes from './AllRoutes';

const persistor = persistStore(store);
const NavBar = lazy(() => import('./components/NavBar/NavBar'));
const SideBar = lazy(() => import('./components/SideBar/SideBar'));
const EditorSettings = lazy(
  () => import('./components/EditorSettings/EditorSettings'),
);
const SelfMatchModal = lazy(
  () => import('./components/SelfMatchMakingModal/SelfMatchMakeModal'),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter>
          <Suspense fallback={<Loader />}>
            <EditorSettings />
            <SelfMatchModal />
            <NavBar />
            <div className={styles.mainWindow}>
              <SideBar />
              <div className={styles.gameArea}>
                <AllRoutes />
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
