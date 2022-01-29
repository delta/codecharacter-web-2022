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
  { icon: faCode, route: 'editor' },
  { icon: faGlobeAsia, route: 'mapdesginer' },
  { icon: faTrophy, route: 'leaderboard' },
  { icon: faCodeBranch, route: 'commits' },
  { icon: faTv, route: 'battletv' },
  { icon: faSignOutAlt, route: 'logout' },
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
