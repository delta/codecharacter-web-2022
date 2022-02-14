import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styles from './SideBar.module.css';
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
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

const icons = [
  { icon: faCode, route: 'dashboard', tooltip: 'Code Editor' },
  { icon: faGlobeAsia, route: 'mapdesginer', tooltip: 'Map Designer' },
  { icon: faTrophy, route: 'leaderboard', tooltip: 'Leaderboard' },
  { icon: faCodeBranch, route: 'history', tooltip: 'Commits' },
  { icon: faTv, route: 'battletv', tooltip: 'Battle TV' },
  { icon: faTools, route: 'settings', tooltip: 'Editor Settings' },
  { icon: faSignOutAlt, route: 'logout', tooltip: 'Logout' },
];

const SideBar: React.FunctionComponent = () => {
  const isSettingsOpen = useAppSelector(IsSettingsOpen);
  const dispatch = useAppDispatch();

  function handleOpenSettings() {
    if (isSettingsOpen === true) dispatch(isSettingsOpened(false));
    else dispatch(isSettingsOpened(true));
  }

  return (
    <div className={styles.sideBar}>
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
                  icon={icon.icon as IconProp}
                />
              </Link>
            </div>
          );
        }
      })}
    </div>
  );
};

export default SideBar;
