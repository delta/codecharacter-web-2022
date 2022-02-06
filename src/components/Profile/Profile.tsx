import { Form, Button, Offcanvas, CloseButton } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import AlertMessage from '../Auth/Auth/Alert/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactFlagsSelect from 'react-flags-select';
import styles from './profile.module.css';
import classnames from 'classnames';
import { CurrentUserApi } from '@codecharacter-2022/client';
import { apiConfig, ApiError } from '../../api/ApiConfig';
import { RootState } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { startChangeUserDetails } from './ProfileAction/ChangeUserProfileAction';
import { startChangeCreditionals } from './ProfileAction/ChangeCreditionalsAction';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Profile = (): JSX.Element => {
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
  const [change, isChange] = useState(false);
  useEffect(() => {
    const currentUserapi = new CurrentUserApi(apiConfig);
    currentUserapi
      .getCurrentUser()
      .then(res => {
        if (!change) {
          setUsername(res.username);
        }
      })
      .catch(error => {
        if (error instanceof ApiError) console.log('Error:', error);
      });
  });
  const dispatch = useDispatch();
  const loadingStatus = useSelector<RootState>(
    loading => loading.changeUserDetails.loading,
  );
  const loadingCreditionalStatus = useSelector<RootState>(
    loading => loading.changeCreditionals.loading,
  );
  console.log(loadingStatus);
  console.log('Creditionals', loadingCreditionalStatus);

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
    isChange(true);
    if (e.target.value.trim().length < 5) {
      isuserNameError(true);
    } else {
      isuserNameError(false);
    }
  };

  const hanldeOldPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOldpassword(e.target.value);
    issubmitoldPassword(true);
    const passwordFormat =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$/;
    if (
      !e.target.value.match(passwordFormat) ||
      !oldPassword.match(passwordFormat)
    )
      isoldpasswordError(true);
    else isoldpasswordError(false);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setpassword(e.target.value);
    issubmitPassword(true);
    const passwordFormat =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$/;
    if (
      !e.target.value.match(passwordFormat) ||
      !password.match(passwordFormat)
    )
      ispasswordError(true);
    else ispasswordError(false);
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setConfirmpassword(e.target.value);
    issubmitconfirmPassword(true);
    const passwordFormat =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$/;
    if (
      !e.target.value.match(passwordFormat) ||
      !confirmPassword.match(passwordFormat)
    )
      isconfirmpasswordError(true);
    else isconfirmpasswordError(false);
  };

  const handleSubmit = () => {
    dispatch(
      startChangeUserDetails({
        name: userName,
        college: 'NITT',
        country: 'INIDIA',
      }),
    );
  };

  const handleCreditionals = () => {
    dispatch(
      startChangeCreditionals({
        OldPassword: oldPassword,
        NewPassword: password,
        ConfirmPassword: confirmPassword,
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
              <h3>Hey! {userName}</h3>
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
                  <b>{userName}</b>
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
                        placeholder="Username"
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
                        placeholder="College"
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
                        type="submit"
                        onClick={handleSubmit}
                      >
                        Save Changes{' '}
                        {loadingStatus ? (
                          <FontAwesomeIcon icon={faSpinner} />
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
                      <Form.Control
                        type="password"
                        placeholder="Old Password"
                        value={oldPassword}
                        onChange={hanldeOldPasswordChange}
                        className={
                          submitoldPassword
                            ? oldpasswordError
                              ? styles.error
                              : styles.correct
                            : styles.normal
                        }
                      />
                      {oldpasswordError ? (
                        <AlertMessage
                          err={oldpasswordError}
                          content={'Password should be atleast 5 characters'}
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
                      <Form.Control
                        type="password"
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
                      {passwordError ? (
                        <AlertMessage
                          err={passwordError}
                          content={'Password should be atleast 5 characters'}
                        />
                      ) : (
                        <></>
                      )}
                    </Form.Group>
                    <Form.Group
                      className={classnames('mb-3', styles.formField)}
                      controlId="formBasicConfirmPassword"
                    >
                      <Form.Label>Confirm password</Form.Label>
                      <Form.Control
                        type="password"
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
                        type="submit"
                        onClick={handleCreditionals}
                      >
                        Submit{' '}
                        {loadingCreditionalStatus ? (
                          <FontAwesomeIcon icon={faSpinner} />
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
