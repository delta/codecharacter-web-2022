import { Form, Button, Offcanvas, CloseButton } from 'react-bootstrap';
import { useState } from 'react';
import AlertMessage from './Alert';
import ReactFlagsSelect from 'react-flags-select';
import styles from '../../styles/profile.module.css';

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
  return (
    <div>
      <div>
        <Offcanvas
          show={show}
          placement="end"
          style={{
            width: '30rem',
          }}
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
                <div style={{ marginTop: '1rem' }}>
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
                        onChange={e => {
                          setfullName(e.target.value);
                          issubmitFullname(true);
                          if (
                            e.target.value.trim().length < 5 ||
                            fullName.length < 4
                          )
                            isfullNameError(true);
                          else isfullNameError(false);
                        }}
                        style={
                          submitFullname
                            ? fullNameError
                              ? { background: '#ffdddd' }
                              : { background: '#c9ffad' }
                            : { background: 'white' }
                        }
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
                      className="mb-3"
                      controlId="formBasicUserName"
                      style={{ marginTop: '2rem' }}
                    >
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Username"
                        value={userName}
                        onChange={e => {
                          setUsername(e.target.value);
                          issubmitUsername(true);
                          if (
                            e.target.value.trim().length < 5 ||
                            userName.length < 4
                          )
                            isuserNameError(true);
                          else isuserNameError(false);
                        }}
                        style={
                          submitUsername
                            ? userNameError
                              ? { background: '#ffdddd' }
                              : { background: '#c9ffad' }
                            : { background: 'white' }
                        }
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
                      className="mb-3"
                      controlId="formBasicEmail"
                      style={{ marginTop: '1.7rem' }}
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
                      style={{
                        textAlign: 'center',
                        marginTop: '10%',
                        background: 'white',
                        borderRadius: '5px',
                      }}
                      className="d-grid gap-2"
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
                        onChange={e => {
                          setOldpassword(e.target.value);
                          issubmitoldPassword(true);
                          if (
                            e.target.value.trim().length < 5 ||
                            oldPassword.length < 4
                          )
                            isoldpasswordError(true);
                          else isoldpasswordError(false);
                        }}
                        style={
                          submitoldPassword
                            ? oldpasswordError
                              ? { background: '#ffdddd' }
                              : { background: '#c9ffad' }
                            : { background: 'white' }
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
                      className="mb-3"
                      controlId="formBasicPassword"
                      style={{ marginTop: '2rem' }}
                    >
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => {
                          setpassword(e.target.value);
                          issubmitPassword(true);
                          if (
                            e.target.value.trim().length < 5 ||
                            password.length < 4
                          )
                            ispasswordError(true);
                          else ispasswordError(false);
                        }}
                        style={
                          submitPassword
                            ? passwordError
                              ? { background: '#ffdddd' }
                              : { background: '#c9ffad' }
                            : { background: 'white' }
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
                      className="mb-3"
                      controlId="formBasicConfirmPassword"
                      style={{ marginTop: '2rem' }}
                    >
                      <Form.Label>Confirm password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={e => {
                          setConfirmpassword(e.target.value);
                          issubmitconfirmPassword(true);
                          if (
                            !(e.target.value.trim() == password) ||
                            confirmPassword.length < 4
                          )
                            isconfirmpasswordError(true);
                          else isconfirmpasswordError(false);
                        }}
                        style={
                          submitconfirmPassword
                            ? confirmpasswordError
                              ? { background: '#ffdddd' }
                              : { background: '#c9ffad' }
                            : { background: 'white' }
                        }
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
                      style={{
                        textAlign: 'center',
                        background: 'white',
                        borderRadius: '5px',
                        margin: '2rem 1rem 1rem 1rem',
                      }}
                      className="d-grid gap-2"
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
