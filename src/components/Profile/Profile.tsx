import { Form, Button, Offcanvas, CloseButton } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import AlertMessage from '../Auth/Auth/Alert/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactFlagsSelect from 'react-flags-select';
import styles from './profile.module.css';
import classnames from 'classnames';
import { useNavigate } from 'react-router-dom';
import {
  faEye,
  faEyeSlash,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import {
  getUserDetailsAction,
  user,
  changeUserDetailsAction,
  changeUserCreditionalsAction,
  loading,
  isCreditionalError,
  isSuccess,
  logout,
  creditionals,
} from '../../store/User/UserSlice';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import PasswordAlertMessage from '../Auth/Auth/Alert/PassworAlert';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
const Profile = (): JSX.Element => {
  const navigate = useNavigate();
  const [show, isShow] = useState(true);
  const [selected, setSelected] = useState('IN');
  const [password, setpassword] = useState('');
  const [confirmPassword, setConfirmpassword] = useState('');
  const [oldPassword, setOldpassword] = useState('');
  const [submitPassword, issubmitPassword] = useState(false);
  const [submitconfirmPassword, issubmitconfirmPassword] = useState(false);
  const [submitoldPassword, issubmitoldPassword] = useState(false);
  const [collegeName, setCollegeName] = useState('');
  const [userName, setUsername] = useState('');
  const [submitCollege, issubmitCollege] = useState(false);
  const [submitUsername, issubmitUsername] = useState(false);
  const [formNumber, setFormNumber] = useState(1);
  const [userNameError, isuserNameError] = useState(false);
  const [collegeError, isCollegeError] = useState(false);
  const [passwordError, ispasswordError] = useState(false);
  const [confirmpasswordError, isconfirmpasswordError] = useState(false);
  const [oldpasswordError, isoldpasswordError] = useState(false);
  const [passwordType, setPasswordType] = useState<{
    oldpassword: string;
    password: string;
    confirmPassword: string;
  }>({
    oldpassword: 'password',
    password: 'password',
    confirmPassword: 'password',
  });
  const err = useAppSelector(isCreditionalError);
  const oldpasswordTypeAction = () => {
    if (passwordType.oldpassword === 'password') {
      setPasswordType({
        oldpassword: 'text',
        password: passwordType.password,
        confirmPassword: passwordType.confirmPassword,
      });
    } else {
      setPasswordType({
        oldpassword: 'password',
        password: passwordType.password,
        confirmPassword: passwordType.confirmPassword,
      });
    }
  };

  const passwordTypeAction = () => {
    if (passwordType.password === 'password') {
      setPasswordType({
        oldpassword: passwordType.oldpassword,
        password: 'text',
        confirmPassword: passwordType.confirmPassword,
      });
    } else {
      setPasswordType({
        oldpassword: passwordType.oldpassword,
        password: 'password',
        confirmPassword: passwordType.confirmPassword,
      });
    }
  };

  const confirmpasswordTypeAction = () => {
    if (passwordType.confirmPassword === 'password') {
      setPasswordType({
        oldpassword: passwordType.oldpassword,
        password: passwordType.password,
        confirmPassword: 'text',
      });
    } else {
      setPasswordType({
        oldpassword: passwordType.oldpassword,
        password: passwordType.password,
        confirmPassword: 'password',
      });
    }
  };
  const loadingStatus = useAppSelector(loading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (err) isoldpasswordError(true);
  }, [loadingStatus, err]);
  const success = useAppSelector(isSuccess);
  useEffect(() => {
    if (submitoldPassword && err == false) {
      dispatch(logout());
      navigate('/login', { replace: true });
    }
  }, [success]);
  const getUser = useAppSelector(user);
  useEffect(() => {
    dispatch(getUserDetailsAction());
  }, [getUser]);
  const handleClose = () => {
    isShow(false);
  };
  const handleCollegeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCollegeName(e.target.value);
    issubmitCollege(true);
    if (e.target.value.trim().length == 0) isCollegeError(true);
    else isCollegeError(false);
  };

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    issubmitUsername(true);
    if (e.target.value.trim().length < 5) {
      isuserNameError(true);
    } else {
      isuserNameError(false);
    }
  };

  const hanldeOldPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOldpassword(e.target.value);
    if (submitoldPassword) {
      if (e.target.value.length < 8) isoldpasswordError(true);
      else isoldpasswordError(false);
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setpassword(e.target.value);
    issubmitPassword(true);
    const passwordFormat =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$/;
    if (e.target.value.match(passwordFormat)) {
      ispasswordError(false);
    } else {
      ispasswordError(true);
    }
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setConfirmpassword(e.target.value);
    issubmitconfirmPassword(true);
    if (e.target.value != password) {
      isconfirmpasswordError(true);
    } else {
      isconfirmpasswordError(false);
    }
  };
  const getCountryName = (code: string) => {
    const countryName = new Intl.DisplayNames(['en'], {
      type: 'region',
    }).of(code);

    return countryName ? countryName : 'INDIA';
  };
  const handleSubmit = () => {
    dispatch(
      changeUserDetailsAction({
        userName: userName,
        college: collegeName,
        country: getCountryName(selected),
      }),
    );
  };

  const handleCreditionals = () => {
    issubmitoldPassword(true);
    dispatch(
      changeUserCreditionalsAction({
        oldPassword: oldPassword,
        newPassword: password,
        confirmPassword: confirmPassword,
      }),
    );
  };
  return (
    <div>
      <div>
        <Offcanvas
          show={show}
          placement="end"
          className={styles.Container}
          backdropClassName={styles.canvas}
        >
          <Offcanvas.Header className={styles.header}>
            <Offcanvas.Title>
              <h3>Hey! {getUser.userName}</h3>
            </Offcanvas.Title>
            <CloseButton className={styles.close} onClick={handleClose} />
          </Offcanvas.Header>
          <hr className={styles.divider} />
          <Offcanvas.Body className={styles.body}>
            {formNumber == 1 ? (
              <div className={styles.profileContainer}>
                <div className={styles.imageContainer}>
                  <img src="src/assets/user.jpg" alt="image here" />
                </div>
                <div className={styles.profileName}>
                  {' '}
                  <b>{getUser.userName}</b>
                </div>
              </div>
            ) : (
              <></>
            )}
            <div>
              <Form className={styles.formContainer}>
                {formNumber == 1 ? (
                  <div>
                    <Form.Group
                      className={classnames('mb-3', styles.formField)}
                      controlId="formBasicUserName"
                    >
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder={getUser.userName}
                        value={userName}
                        className={
                          submitUsername
                            ? userNameError
                              ? styles.error
                              : styles.correct
                            : styles.normal
                        }
                        onChange={handleUserNameChange}
                      />
                      {submitUsername && userNameError ? (
                        <AlertMessage
                          err={userNameError}
                          content={'Username already exist'}
                        />
                      ) : (
                        <></>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCollege">
                      <Form.Label>College</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder={getUser.college}
                        value={collegeName}
                        className={
                          submitCollege
                            ? collegeError
                              ? styles.error
                              : styles.correct
                            : styles.normal
                        }
                        onChange={handleCollegeChange}
                      />
                      {collegeError ? (
                        <AlertMessage
                          err={collegeError}
                          content={'Please Enter a valid College name'}
                        />
                      ) : (
                        <></>
                      )}
                    </Form.Group>
                    <Form.Group
                      className={classnames('mb-3', styles.formField)}
                      controlId="formBasicEmail"
                    >
                      <Form.Label>Country</Form.Label>
                      <div className={styles.flagContainer}>
                        <ReactFlagsSelect
                          selected={selected}
                          searchable={true}
                          id="flags"
                          placeholder="Search your country"
                          onSelect={code => {
                            setSelected(code);
                          }}
                        />
                      </div>{' '}
                    </Form.Group>
                    <div
                      className={classnames(
                        'd-grid gap-2',
                        styles.submitContainer,
                      )}
                    >
                      <Button
                        variant="light"
                        onClick={handleSubmit}
                        disabled={
                          userName.length < 5 || collegeName.length == 0
                        }
                      >
                        Save Changes{' '}
                        {loadingStatus ? (
                          <FontAwesomeIcon icon={faSpinner as IconProp} />
                        ) : (
                          <></>
                        )}
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <Form.Group
                      className="mb-3"
                      controlId="formBasicoldPassword"
                    >
                      <Form.Label>Old Password</Form.Label>
                      <div className={styles.eyeContainer}>
                        <Form.Control
                          type={passwordType.oldpassword}
                          placeholder="Old Password"
                          value={oldPassword}
                          onChange={hanldeOldPasswordChange}
                          className={
                            submitoldPassword
                              ? oldpasswordError && err
                                ? styles.error
                                : oldpasswordError == false && err == false
                                ? styles.correct
                                : styles.normal
                              : styles.normal
                          }
                        />
                        <div className={styles.eye}>
                          {passwordType.oldpassword === 'password' ? (
                            <FontAwesomeIcon
                              size="sm"
                              icon={faEyeSlash as IconProp}
                              onClick={oldpasswordTypeAction}
                            />
                          ) : (
                            <FontAwesomeIcon
                              size="sm"
                              icon={faEye as IconProp}
                              onClick={oldpasswordTypeAction}
                            />
                          )}
                        </div>
                      </div>
                      {oldpasswordError && err ? (
                        <AlertMessage
                          err={oldpasswordError}
                          content={'Incorrect Old Password'}
                        />
                      ) : (
                        <></>
                      )}
                    </Form.Group>
                    <Form.Group
                      className={classnames('mb-3', styles.formField)}
                      controlId="formBasicPassword"
                    >
                      <Form.Label>Password</Form.Label>
                      <div className={styles.eyeContainer}>
                        <Form.Control
                          type={passwordType.password}
                          placeholder="Password"
                          value={password}
                          onChange={handlePasswordChange}
                          className={
                            submitPassword
                              ? passwordError
                                ? styles.error
                                : styles.correct
                              : styles.normal
                          }
                        />
                        <div className={styles.eye}>
                          {passwordType.password === 'password' ? (
                            <FontAwesomeIcon
                              size="sm"
                              icon={faEyeSlash as IconProp}
                              onClick={passwordTypeAction}
                            />
                          ) : (
                            <FontAwesomeIcon
                              size="sm"
                              icon={faEye as IconProp}
                              onClick={passwordTypeAction}
                            />
                          )}
                        </div>
                      </div>
                      <PasswordAlertMessage
                        err={submitPassword && passwordError}
                        variantColor="danger"
                      />
                    </Form.Group>
                    <Form.Group
                      className={classnames('mb-3', styles.formField)}
                      controlId="formBasicConfirmPassword"
                    >
                      <Form.Label>Confirm password</Form.Label>
                      <div className={styles.eyeContainer}>
                        <Form.Control
                          type={passwordType.confirmPassword}
                          placeholder="Confirm Password"
                          value={confirmPassword}
                          className={
                            submitconfirmPassword
                              ? confirmpasswordError
                                ? styles.error
                                : styles.correct
                              : styles.normal
                          }
                          onChange={handleConfirmPasswordChange}
                        />
                        <div className={styles.eye}>
                          {passwordType.confirmPassword === 'password' ? (
                            <FontAwesomeIcon
                              size="sm"
                              icon={faEyeSlash as IconProp}
                              onClick={confirmpasswordTypeAction}
                            />
                          ) : (
                            <FontAwesomeIcon
                              size="sm"
                              icon={faEye as IconProp}
                              onClick={confirmpasswordTypeAction}
                            />
                          )}
                        </div>
                      </div>
                      {confirmpasswordError ? (
                        <AlertMessage
                          err={confirmpasswordError}
                          content={'Please! check your password'}
                        />
                      ) : (
                        <></>
                      )}
                    </Form.Group>
                    <div
                      className={classnames(
                        'd-grid gap-2',
                        styles.submitContainer,
                      )}
                    >
                      <Button
                        variant="light"
                        onClick={handleCreditionals}
                        disabled={
                          oldpasswordError ||
                          passwordError ||
                          confirmpasswordError ||
                          oldPassword.length == 0 ||
                          password.length == 0 ||
                          confirmPassword.length == 0
                        }
                      >
                        Submit{' '}
                        {loadingStatus ? (
                          <FontAwesomeIcon icon={faSpinner as IconProp} />
                        ) : (
                          <></>
                        )}
                      </Button>
                    </div>
                  </div>
                )}
              </Form>
              <div className={styles.footer}>
                {formNumber == 1 ? (
                  <Button
                    variant="link"
                    onClick={() => {
                      setFormNumber(2);
                      dispatch(creditionals());
                    }}
                  >
                    Want to Change Credentials
                  </Button>
                ) : (
                  <Button
                    variant="link"
                    onClick={() => {
                      setFormNumber(1);
                    }}
                  >
                    Go Back
                  </Button>
                )}
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
};

export default Profile;
