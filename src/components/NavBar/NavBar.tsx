import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './NavBar.module.css';
import Profile from '../Profile/Profile';
import Notifs from '../Notifs/Notifs';
// import toast from 'react-hot-toast';
import {
  isloggedIn,
  isLogout,
  getUserDetailsAction,
  user,
} from '../../store/User/UserSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
const NavBar: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loggedInStatus = useAppSelector(isloggedIn);
  const logoutStatus = useAppSelector(isLogout);
  const getUser = useAppSelector(user);
  useEffect(() => {
    dispatch(getUserDetailsAction());
  }, [getUser]);
  useEffect(() => {
    if (loggedInStatus == false && logoutStatus) {
      handleClose();
      navigate('/login', { replace: true });
    }
  }, [loggedInStatus]);
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
      {loggedInStatus ? (
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
            <Notifs />
          </div>
          <div className={styles.profile} onClick={handleOpen}>
            <div className={styles.fakeProfileIcon} />
            <h3 className={styles.profileName}>{getUser.userName}</h3>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default NavBar;
