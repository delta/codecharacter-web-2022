import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './NavBar.module.css';
import Profile from '../Profile/Profile';
// import toast from 'react-hot-toast';

const NavBar: React.FunctionComponent = () => {
  const [open, isOpen] = useState(false);
  const handleOpen = () => {
    isOpen(true);
  };

  const handleClose = () => {
    isOpen(false);
  };
  return (
    <div className={styles.navBar}>
      <Profile open={open} handleClose={handleClose} />

      <div className={styles.branding}>
        <Link to="dashboard" className={styles.logoLink}>
          <h2 className={styles.navLogo}>Code Character</h2>
        </Link>
      </div>
      <div className={styles.profileIcons}>
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
        <div className={styles.notifIcon}>
          <FontAwesomeIcon icon={faBell} />
        </div>
        <div className={styles.profile} onClick={handleOpen}>
          <div className={styles.fakeProfileIcon} />
          <h3 className={styles.profileName}>blndlyblv</h3>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
