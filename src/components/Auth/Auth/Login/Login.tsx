import { Form, Button, Container, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect } from 'react';
import AlertMessage from '../Alert/Alert';
import styles from '../auth.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import classnames from 'classnames';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { BASE_PATH } from '../../../../config/config';
import {
  loginAction,
  loading,
  switchRegister,
  isloggedIn,
} from '../../../../store/User/UserSlice';
import { useAppSelector, useAppDispatch } from '../../../../store/hooks';

function Login(): JSX.Element {
  const navigate = useNavigate();
  const [emailError, isemailError] = useState(false);
  const [passwordError, ispasswordError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, islogin] = useState(false);
  const hookDispatch = useAppDispatch();
  const loadingStatus = useAppSelector(loading);
  const loggedInStatus = useAppSelector(isloggedIn);
  useEffect(() => {
    if (loggedInStatus) {
      navigate('/dashboard', { replace: true });
    }
  }, [loggedInStatus]);
  const handleLoginSubmit = () => {
    islogin(true);
    const mailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
    const passwordFormat =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$/;
    if (email.match(mailformat)) {
      isemailError(false);
    } else {
      isemailError(true);
    }
    if (password.match(passwordFormat)) {
      ispasswordError(false);
    } else {
      ispasswordError(true);
    }
    if (!(emailError && passwordError)) {
      hookDispatch(loginAction({ email: email, password: password }));
    }
  };

  const handlePasswordSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value != null) {
      setPassword(event.target.value);
    }
    const passwordFormat =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$/;
    if (event.target.value.toString().match(passwordFormat)) {
      ispasswordError(false);
    } else {
      ispasswordError(true);
    }
  };

  const handleEmailSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    const mailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (event.target.value.match(mailformat)) {
      isemailError(false);
    } else {
      isemailError(true);
    }
  };

  const switchRegisterAction = () => {
    hookDispatch(switchRegister());
  };
  return (
    <div className={styles.mainContainer}>
      <Card className={styles.cardContainer}>
        <div className={styles.titleContainer}>
          <h1 className={styles.name}>Welcome!! To CodeCharatcer</h1>
          <Container className={styles.subTitle}>
            Log in to access your dashboard and profile 👏️🎊️{' '}
          </Container>
        </div>
        <form className={styles.formContainer}>
          <div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="name"
                placeholder="Email"
                value={email}
                className={
                  login
                    ? emailError
                      ? styles.error
                      : styles.correct
                    : styles.normal
                }
                onChange={handleEmailSubmit}
              />
              {emailError && login ? (
                <AlertMessage
                  err={emailError}
                  content={'Please ! Enter a valid Email ID'}
                />
              ) : (
                <></>
              )}
            </Form.Group>
          </div>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordSubmit}
              className={
                login
                  ? passwordError
                    ? styles.error
                    : styles.correct
                  : styles.normal
              }
            />
            {passwordError && login ? (
              <>
                <AlertMessage
                  err={passwordError}
                  content={'Check your password'}
                />
              </>
            ) : (
              <></>
            )}
          </Form.Group>
          <div className={classnames('d-grid gap-2', styles.submitContainer)}>
            <Button variant="outline-primary" onClick={handleLoginSubmit}>
              Login{' '}
              {loadingStatus ? <FontAwesomeIcon icon={faSpinner} /> : <></>}
            </Button>
          </div>
        </form>
        <br />
        <div className={styles.externalAuthButtons}>
          <div className={styles.googleButton}>
            <a
              href={`${BASE_PATH}/auth/login/external`}
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="primary">
                <div>
                  <FontAwesomeIcon icon={faGoogle} /> Login with Google
                </div>
              </Button>
            </a>
          </div>
          <div className={styles.githubButton}>
            <a
              href={`${BASE_PATH}/auth/login/external`}
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="dark">
                <div>
                  <FontAwesomeIcon icon={faGithub} /> Login with Github
                </div>
              </Button>
            </a>
          </div>
        </div>
        <div className={styles.linkContainer}>
          Do not have an account ?{' '}
          <span>
            {' '}
            <NavLink
              to={'/register'}
              className={styles.link}
              onClick={switchRegisterAction}
            >
              {' '}
              <b>register</b>
            </NavLink>
          </span>
        </div>
      </Card>
    </div>
  );
}
export default Login;
