import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css';

const NavBar: React.FunctionComponent = () => {
  return (
    <div className="navBar">
      <div className="branding">
        <h2 className="navLogo">Code Character</h2>
      </div>
      <div className="profileIcons">
        <div className="notifIcon">
          <FontAwesomeIcon icon={faBell} />
        </div>
        <div className="fakeProfileIcon" />
        <h3 className="profileName">blndlyblv</h3>
      </div>
    </div>
  );
};

export default NavBar;
