import { Link, useNavigate, useLocation, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './NavBar.module.css';
import Profile from '../Profile/Profile';
import Notifs from '../Notifs/Notifs';
import { getAvatarByID } from '../Avatar/Avatar';
import { getUserDetailsAction, user } from '../../store/User/UserSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { AuthApi } from '@codecharacter-2022/client';
import { apiConfig, ApiError } from '../../api/ApiConfig';
import Toast from 'react-hot-toast';

const NavBar: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const loggedInUser = useAppSelector(user);
  // useEffect(() => {
  //   if (window.location.hash == '#/register')
  //     navigate('/register', { replace: true });
  //   if (
  //     localStorage.getItem('token') == null &&
  //     window.location.hash != '#/register'
  //   ) {
  //     console.log('navbar redirect');
  //     navigate('/login', { replace: true });
  //   }
  // }, [window.location.hash]);
  useEffect(() => {
    const cookieValue = document.cookie;
    const bearerToken = cookieValue.split(';');
    bearerToken.map(cookie => {
      if (cookie.trim().startsWith('bearer-token') != false) {
        const index = cookie.indexOf('=') + 1;
        const token = cookie.slice(index);
        localStorage.setItem('token', token);
      }
    });
  }, [document.cookie]);
  useEffect(() => {
    if (localStorage.getItem('token') != null) dispatch(getUserDetailsAction());
  }, [loggedInUser]);
  useEffect(() => {
    const authApi = new AuthApi(apiConfig);
    authApi
      .getAuthStatus()
      .then(res => {
        const { status } = res;
        if (status === 'PROFILE_INCOMPLETE') {
          navigate('/incomplete-profile', { replace: true });
        } else if (status === 'AUTHENTICATED') {
          if (localStorage.getItem('token') != null) {
            navigate('/dashboard', { replace: true });
          } else {
            handleClose();
          }
        }
      })
      .catch((e: Error) => {
        if (e instanceof ApiError) {
          Toast.error(e.message);
        }
      });
  }, [loggedInUser]);
  const [open, isOpen] = useState(false);
  const handleOpen = () => {
    isOpen(true);
  };

  const handleClose = () => {
    isOpen(false);
  };
  return (
    <div className={styles.navBar}>
      <div className={styles.navBarContainer}>
        <Profile open={open} handleClose={handleClose} />
        <div className={styles.branding}>
          <Link to="dashboard" className={styles.logoLink}>
            <div className={styles.navLogo}>CodeCharacter</div>
          </Link>
        </div>
        {location.pathname === '/' && (
          <div className={styles.navContainer}>
            <NavLink to="/login" className={`${styles.navLink}`}>
              Login
            </NavLink>
            <NavLink to="/register" className={`${styles.navLink}`}>
              Register
            </NavLink>
          </div>
        )}
      </div>
      {localStorage.getItem('token') != null &&
      location.pathname != '/incomplete-profile' &&
      location.pathname != '/' ? (
        <div className={styles.profileIcons}>
          <div className={styles.notifIcon}>
            <Notifs />
          </div>
          <div className={styles.profile} onClick={handleOpen}>
            <div className={styles.ProfileIcon}>
              <img
                className={styles.profileIconImg}
                src={getAvatarByID(loggedInUser.avatarId).url}
                alt="Profile Icon"
              />
            </div>
            <h3 className={styles.profileName}>{loggedInUser?.username}</h3>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default NavBar;
