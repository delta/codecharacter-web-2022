import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  IsSettingsOpen,
  isSettingsOpened,
} from '../../store/EditorSettings/settings';
import {
  faCode,
  faTrophy,
  faGlobeAsia,
  faCodeBranch,
  faTv,
  faSignOutAlt,
  faTools,
} from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './SideBar.module.css';
import { logout } from '../../store/User/UserSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import deltaLogo from '../../assets/deltaLogo.png';

const icons = [
  { icon: faCode, route: 'dashboard', tooltip: 'Code Editor' },
  { icon: faGlobeAsia, route: 'mapdesigner', tooltip: 'Map Designer' },
  { icon: faTrophy, route: 'leaderboard', tooltip: 'Leaderboard' },
  { icon: faCodeBranch, route: 'history', tooltip: 'Commits' },
  { icon: faTv, route: 'battletv', tooltip: 'Battle TV' },
  { icon: faTools, route: 'settings', tooltip: 'Editor Settings' },
  { icon: faSignOutAlt, route: 'login', tooltip: 'Logout' },
];

const SideBar: React.FunctionComponent = () => {
  const isSettingsOpen = useAppSelector(IsSettingsOpen);

  function handleOpenSettings() {
    if (isSettingsOpen === true) dispatch(isSettingsOpened(false));
    else dispatch(isSettingsOpened(true));
  }
  const location = useLocation();
  const [pathName, setpathName] = useState('/dashboard');
  useEffect(() => {
    setpathName(location.pathname);
  }, [location]);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogout = (icon: string) => {
    if (icon == 'Logout') {
      dispatch(logout());
      localStorage.removeItem('token');
      document.cookie =
        'bearer-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

      navigate('/login', { replace: true });
    }
  };
  return (
    <div>
      {pathName != '/' &&
      pathName != '/register' &&
      pathName != '/login' &&
      pathName != '/activate' &&
      pathName != '/reset-password' &&
      pathName != '/incomplete-profile' ? (
        <div className={styles.sideBar}>
          <div>
            {icons.map(icon => {
              if (icon.tooltip === 'Editor Settings') {
                return (
                  <div key={icons.indexOf(icon)} className={styles.sideBarIcon}>
                    <FontAwesomeIcon
                      className={styles.sideBarIconComponent}
                      title={icon.tooltip}
                      icon={icon.icon as IconProp}
                      onClick={handleOpenSettings}
                    />
                  </div>
                );
              } else {
                return (
                  <div key={icons.indexOf(icon)} className={styles.sideBarIcon}>
                    <Link to={icon.route} key={icon.route}>
                      <FontAwesomeIcon
                        className={styles.sideBarIconComponent}
                        title={icon.tooltip}
                        onClick={() => {
                          handleLogout(icon.tooltip);
                        }}
                        icon={icon.icon as IconProp}
                      />
                    </Link>
                  </div>
                );
              }
            })}
          </div>
          {
            <div className={styles.sideBarIcon}>
              <div title="Made with ❤ by Delta">
                <div className={styles.deltaLogo}>
                  <img src={deltaLogo} alt="delta" />
                </div>
              </div>
            </div>
          }
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SideBar;
