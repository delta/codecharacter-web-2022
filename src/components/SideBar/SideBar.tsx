import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faTrophy,
  faGlobeAsia,
  faCodeBranch,
  faTv,
  faSignOutAlt,
  faTools,
} from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './SideBar.module.css';
import { logout, isloggedIn } from '../../store/User/UserSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
const icons = [
  { icon: faCode, route: 'editor', tooltip: 'Code Editor' },
  { icon: faGlobeAsia, route: 'mapdesigner', tooltip: 'Map Designer' },
  { icon: faTrophy, route: 'leaderboard', tooltip: 'Leaderboard' },
  { icon: faCodeBranch, route: 'history', tooltip: 'Commits' },
  { icon: faTv, route: 'battletv', tooltip: 'Battle TV' },
  { icon: faTools, route: 'settings', tooltip: 'Editor Settings' },
  { icon: faSignOutAlt, route: 'logout', tooltip: 'Logout' },
];

const SideBar: React.FunctionComponent = () => {
  const location = useLocation();
  const [pathName, setpathName] = useState('/dashboard');
  useEffect(() => {
    setpathName(location.pathname);
  }, [location]);
  const dispatch = useAppDispatch();
  const loggedInStatus = useAppSelector(isloggedIn);
  const handleLogout = (icon: string) => {
    if (icon == 'Logout' && loggedInStatus) {
      dispatch(logout());
    }
  };
  return (
    <div>
      {pathName != '/register' && pathName != '/login' ? (
        <div className={styles.sideBar}>
          {icons.map(icon => {
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
                    size="2x"
                  />
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SideBar;
