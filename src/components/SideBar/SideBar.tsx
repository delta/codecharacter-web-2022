import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faTrophy,
  faGlobeAsia,
  faCodeBranch,
  faTv,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import './SideBar.css';

const icons = [faCode, faGlobeAsia, faTrophy, faCodeBranch, faTv, faSignOutAlt];

const SideBar: React.FunctionComponent = () => {
  return (
    <div className="sideBar">
      {icons.map(icon => {
        return (
          <div key={icons.indexOf(icon)} className="sideBarIcon">
            <FontAwesomeIcon
              className="sideBarIconComponent"
              icon={icon}
              size="2x"
            />
          </div>
        );
      })}
    </div>
  );
};

export default SideBar;
