import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './NavBar.css';
// import toast from 'react-hot-toast';

const NavBar: React.FunctionComponent = () => {
  return (
    <div className="navBar">
      <div className="branding">
        <Link to="dashboard" className="logoLink">
          <h2 className="navLogo">Code Character</h2>
        </Link>
      </div>
      <div className="profileIcons">
        {/* <button
          className="toastTest"
          onClick={() => {
            toast.success('Toast Rendered!', {
              position: 'bottom-right',
              duration: 3000,
            });
          }}
        >
          Toast
        </button> */}
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
