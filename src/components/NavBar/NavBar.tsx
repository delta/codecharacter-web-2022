import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './NavBar.module.css';
import Profile from '../Profile/Profile';
import Notifs from '../Notifs/Notifs';

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
      <div>
        <Profile open={open} handleClose={handleClose} />
        <div className={styles.branding}>
          <Link to="dashboard" className={styles.logoLink}>
            <h2 className={styles.navLogo}>Code Character</h2>
          </Link>
        </div>
      </div>
      <div className={styles.profileIcons}>
        <div className={styles.notifIcon}>
          <Notifs />
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
