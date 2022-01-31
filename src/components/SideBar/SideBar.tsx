import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faTrophy,
  faGlobeAsia,
  faCodeBranch,
  faTv,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import styles from './SideBar.module.css';

const icons = [
  { icon: faCode, route: 'editor', tooltip: 'Code Editor' },
  { icon: faGlobeAsia, route: 'mapdesginer', tooltip: 'Map Designer' },
  { icon: faTrophy, route: 'leaderboard', tooltip: 'Leaderboard' },
  { icon: faCodeBranch, route: 'commits', tooltip: 'Commits' },
  { icon: faTv, route: 'battletv', tooltip: 'Battle TV' },
  { icon: faSignOutAlt, route: 'logout', tooltip: 'Logout' },
];

const SideBar: React.FunctionComponent = () => {
  return (
    <div className={styles.sideBar}>
      {icons.map(icon => {
        return (
          <div key={icons.indexOf(icon)} className={styles.sideBarIcon}>
            <Link to={icon.route} key={icon.route}>
              <FontAwesomeIcon
                className={styles.sideBarIconComponent}
                title={icon.tooltip}
                icon={icon.icon}
                size="2x"
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default SideBar;
