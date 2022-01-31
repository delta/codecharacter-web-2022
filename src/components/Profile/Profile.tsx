import { Form, Button, Offcanvas, CloseButton } from 'react-bootstrap';
import { useState } from 'react';
import AlertMessage from '../Alert/Alert';
import ReactFlagsSelect from 'react-flags-select';
import styles from './profile.module.css';
import classnames from 'classnames';

const Profile = (): JSX.Element => {
  const [show, isShow] = useState(true);
  const [selected, setSelected] = useState('IN');
  const [password, setpassword] = useState('');
  const [confirmPassword, setConfirmpassword] = useState('');
  const [oldPassword, setOldpassword] = useState('');
  const [submitPassword, issubmitPassword] = useState(false);
  const [submitconfirmPassword, issubmitconfirmPassword] = useState(false);
  const [submitoldPassword, issubmitoldPassword] = useState(false);
  const [fullName, setfullName] = useState('');
  const [userName, setUsername] = useState('');
  const [submitFullname, issubmitFullname] = useState(false);
  const [submitUsername, issubmitUsername] = useState(false);
  const [formNumber, setFormNumber] = useState(1);
  const [userNameError, isuserNameError] = useState(false);
  const [fullNameError, isfullNameError] = useState(false);
  const [passwordError, ispasswordError] = useState(false);
  const [confirmpasswordError, isconfirmpasswordError] = useState(false);
  const [oldpasswordError, isoldpasswordError] = useState(false);
  const handleClose = () => {
    isShow(false);
  };
  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setfullName(e.target.value);
    issubmitFullname(true);
    if (e.target.value.trim().length < 5 || fullName.length < 4)
      isfullNameError(true);
    else isfullNameError(false);
  };

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    issubmitUsername(true);
    if (e.target.value.trim().length < 5 || userName.length < 4)
      isuserNameError(true);
    else isuserNameError(false);
  };

  const hanldeOldPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOldpassword(e.target.value);
    issubmitoldPassword(true);
    if (e.target.value.trim().length < 5 || oldPassword.length < 4)
      isoldpasswordError(true);
    else isoldpasswordError(false);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setpassword(e.target.value);
    issubmitPassword(true);
    if (e.target.value.trim().length < 5 || password.length < 4)
      ispasswordError(true);
    else ispasswordError(false);
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setConfirmpassword(e.target.value);
    issubmitconfirmPassword(true);
    if (!(e.target.value.trim() == password) || confirmPassword.length < 4)
      isconfirmpasswordError(true);
    else isconfirmpasswordError(false);
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
              <h3>FULL NAME</h3>
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
                  <b>User name</b>
                </div>
              </div>
            ) : (
              <></>
            )}
            <div>
              <Form className={styles.formContainer}>
                {formNumber == 1 ? (
                  <div>
                    <Form.Group className="mb-3" controlId="formBasicFullName">
                      <Form.Label>Fullname</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Fullname"
                        value={fullName}
                        className={
                          submitFullname
                            ? fullNameError
                              ? styles.error
                              : styles.correct
                            : styles.normal
                        }
                        onChange={handleFullNameChange}
                      />
                      {fullNameError ? (
                        <AlertMessage
                          err={fullNameError}
                          content={'Name should be atleast 5 characters'}
                        />
                      ) : (
                        <></>
                      )}
                    </Form.Group>
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
                            // const countryNames = new Intl.DisplayNames(['en'], {
                            //   type: 'region',
                            // });
                            // setSelected(countryNames.of(code));
                            // console.log(countryNames.of(code));
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
                      <Button variant="light" type="submit">
                        Save Changes
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
                      <Button variant="light" type="submit">
                        Submit
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
