import { Form, Container, Card, Button, ProgressBar } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import AlertMessage from '../../components/Alert/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faCode,
  faUserSecret,
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import { ReCAPTCHA } from 'react-google-recaptcha';
import styles from './auth.module.css';
import { accessUrl, SECRET_KEY, SITE_KEY } from '../../config/config';
import { NavLink } from 'react-router-dom';
let inc = 1;
let check1 = 0;
export default function Register(): JSX.Element {
  const [selected, setSelected] = useState('IN');
  const [formNumber, setFormnumber] = useState(1);
  const [email, setEmail] = useState('');
  const [fullName, setfullName] = useState('');
  const [userName, setUsername] = useState('');
  const [password, setpassword] = useState('');
  const [confirmPassword, setConfirmpassword] = useState('');
  const [submitFirst, issubmitFirst] = useState(false);
  const [submitSecond, issubmitSecond] = useState(false);
  const [userNameError, isuserNameError] = useState(false);
  const [fullNameError, isfullNameError] = useState(false);
  const [emailError, isemailError] = useState(false);
  const [passwordError, ispasswordError] = useState(false);
  const [confirmpasswordError, isconfirmpasswordError] = useState(false);
  const [completed, isCompleted] = useState(false);
  // adding script tag for recaptcha verfication
  useEffect(() => {
    const loadScriptByURL = (id: string, url: string) => {
      const isScript = document.getElementById(id);

      if (!isScript) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        script.id = id;
        document.body.appendChild(script);
      }
    };
    loadScriptByURL(
      SITE_KEY,
      `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`,
    );
  }, []);
  const handleFullname = () => {
    if (fullName.trim().length < 5) {
      isfullNameError(true);
      check1 += 1;
    } else {
      isfullNameError(false);
    }
  };
  const handleUsername = () => {
    if (userName.trim().length < 5 || userName.length < 5) {
      check1 += 1;
      isuserNameError(true);
    } else {
      isuserNameError(false);
    }
  };
  const handleEmail = () => {
    const mailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email.match(mailformat)) {
      isemailError(false);
    } else {
      isemailError(true);
      check1 += 1;
    }
  };

  const handlepassword = () => {
    if (password.trim().length < 5) {
      ispasswordError(true);
      check1 += 1;
    } else {
      ispasswordError(false);
    }
  };
  const handleConfirmpassword = () => {
    if (!(password === confirmPassword) || password.length < 5) {
      isconfirmpasswordError(true);
      check1 += 1;
    } else {
      isconfirmpasswordError(false);
    }
  };
  const handleStepSubmit = (step: number) => {
    switch (step) {
      case 1:
        issubmitFirst(true);
        check1 = 0;
        handleFullname();
        handleUsername();
        handleEmail();
        break;
      case 2:
        issubmitSecond(true);
        check1 = 0;
        handlepassword();
        handleConfirmpassword();
        break;
    }
  };
  const handleForm = (level: number) => {
    if (check1 == 0) {
      if (level == 1) {
        inc += 1;
      }

      if (level == -1) {
        inc -= 1;
      }
    }
    setFormnumber(inc);
  };
  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setfullName(e.target.value);
    if (submitFirst) {
      if (e.target.value.trim().length < 5 || fullName.length < 4) {
        isfullNameError(true);
      } else {
        isfullNameError(false);
      }
    }
  };

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    if (submitFirst) {
      if (e.target.value.trim().length < 5 || userName.length < 4) {
        isuserNameError(true);
      } else {
        isuserNameError(false);
      }
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (submitFirst) {
      const mailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (e.target.value.match(mailformat) || email.match(mailformat)) {
        isemailError(false);
      } else {
        isemailError(true);
      }
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setpassword(e.target.value);
    if (submitSecond) {
      if (e.target.value.trim().length < 5 || password.length < 4) {
        ispasswordError(true);
      } else {
        ispasswordError(false);
      }
    }
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setConfirmpassword(e.target.value);
    if (submitSecond) {
      if (!(e.target.value.trim() == password) || confirmPassword.length < 4) {
        isconfirmpasswordError(true);
      } else {
        isconfirmpasswordError(false);
      }
    }
  };
  const handleNext = () => {
    handleStepSubmit(formNumber);
    handleForm(1);
  };

  const handlePrevious = () => {
    handleStepSubmit(formNumber - 1);
    handleForm(-1);
    isCompleted(false);
  };
  const handleRegistration = () => {
    isCompleted(true);
    grecaptcha.ready(() => {
      grecaptcha
        .execute(SITE_KEY, { action: 'submit' })
        .then((token: string) => {
          submitData(token);
        });
    });
  };
  const submitData = async (token: string) => {
    await fetch('  https://www.google.com/recaptcha/api/siteverify ', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': `${accessUrl}`,
      },
      body: JSON.stringify({
        secret: { SECRET_KEY },
        response: token,
      }),
    });
  };
  const avatar = [
    {
      url: '1',
    },
    {
      url: '2',
    },
    {
      url: '3',
    },
    {
      url: '4',
    },
    {
      url: '5',
    },
    {
      url: '6',
    },
    {
      url: '5',
    },
    {
      url: '6',
    },
    {
      url: '5',
    },
    {
      url: '6',
    },
    {
      url: '5',
    },
    {
      url: '6',
    },
    {
      url: '6',
    },
    {
      url: '5',
    },
    {
      url: '6',
    },
  ];
  return (
    <div className={styles.mainContainer}>
      <Card className={styles.cardContainer}>
        <div className={styles.titleContainer}>
          <h1> Register to CodeCharacter</h1>
          <Container className={styles.subTitle}>
            <p> Register now and code your way through 👨‍💻️!! </p>
          </Container>
        </div>
        <div style={{ margin: '0rem 0rem' }}>
          <div className={styles.progressBarContainer}>
            <div>
              <div>
                <ProgressBar
                  now={(formNumber - 1) * 50}
                  className={styles.progressBar}
                />
              </div>
            </div>
            <div className={styles.levelContainer}>
              <div style={{ float: 'left' }}>
                {' '}
                <button
                  className={
                    formNumber > 1
                      ? styles.levelCompleted
                      : styles.levelInitiated
                  }
                  onClick={() => {
                    if (formNumber > 1) {
                      setFormnumber(1);
                      inc = 1;
                    }
                  }}
                >
                  <FontAwesomeIcon icon={faUser} />
                </button>
              </div>
              <div>
                {' '}
                <button
                  className={
                    formNumber > 2
                      ? styles.levelCompleted
                      : styles.levelInitiated
                  }
                  onClick={() => {
                    if (formNumber > 2) {
                      setFormnumber(2);
                      inc = 2;
                    }
                  }}
                >
                  <FontAwesomeIcon icon={faUserSecret} />
                </button>
              </div>
              <div style={{ float: 'right' }}>
                {' '}
                <button
                  className={
                    !completed ? styles.levelInitiated : styles.levelCompleted
                  }
                >
                  <FontAwesomeIcon icon={faCode} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.formContainer}>
          <Form>
            {formNumber === 1 ? (
              <div>
                <div className={styles.levelTitle}>User Details</div>
                <Form.Group className="mb-3" controlId="formBasicFullName">
                  <Form.Label>Fullname</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Fullname"
                    value={fullName}
                    onChange={handleFullNameChange}
                    style={
                      submitFirst
                        ? fullNameError
                          ? { background: '#ffdddd' }
                          : { background: '#c9ffad' }
                        : { background: 'white' }
                    }
                  />
                  {submitFirst && fullNameError ? (
                    <AlertMessage
                      err={fullNameError}
                      content={'Name should be atleast 5 characters'}
                    />
                  ) : (
                    <></>
                  )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicUserName">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    value={userName}
                    onChange={handleUserNameChange}
                    style={
                      submitFirst
                        ? userNameError
                          ? { background: '#ffdddd' }
                          : { background: '#c9ffad' }
                        : { background: 'white' }
                    }
                  />
                  {submitFirst && userNameError ? (
                    <AlertMessage
                      err={userNameError}
                      content={'Username should be atleast 5 characters'}
                    />
                  ) : (
                    <></>
                  )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Email"
                    value={email}
                    style={
                      submitFirst
                        ? emailError
                          ? { background: '#ffdddd' }
                          : { background: '#c9ffad' }
                        : { background: 'white' }
                    }
                    onChange={handleEmailChange}
                  />
                  {submitFirst && emailError ? (
                    <AlertMessage
                      err={emailError}
                      content={'Please! Enter a valid email'}
                    />
                  ) : (
                    <></>
                  )}
                </Form.Group>
              </div>
            ) : formNumber === 2 ? (
              <div>
                <div className={styles.levelTitle}>User Creditionals</div>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    style={
                      submitSecond
                        ? passwordError
                          ? { background: '#ffdddd' }
                          : { background: '#c9ffad' }
                        : { background: 'white' }
                    }
                  />
                  {submitSecond && passwordError ? (
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
                >
                  <Form.Label>Confirm password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    style={
                      submitSecond
                        ? confirmpasswordError
                          ? { background: '#ffdddd' }
                          : { background: '#c9ffad' }
                        : { background: 'white' }
                    }
                  />
                  {submitSecond && confirmpasswordError ? (
                    <AlertMessage
                      err={confirmpasswordError}
                      content={'Please! check your password'}
                    />
                  ) : (
                    <></>
                  )}
                </Form.Group>
              </div>
            ) : formNumber === 3 ? (
              <div>
                <div className={styles.levelTitle}>Other Details</div>
                <Form.Group className="mb-3" controlId="formBasicCountryName">
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
                  </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAvatar">
                  <Form.Label>Avatar</Form.Label>
                  <div style={{ maxWidth: '30rem' }}>
                    <div className={styles.avatarContainer}>
                      {avatar.map((avatar, index: number) => (
                        <div key={index} className={styles.avatar}></div>
                      ))}
                    </div>
                  </div>
                </Form.Group>
                <div>
                  <ReCAPTCHA sitekey={SITE_KEY} theme="dark" />
                </div>
                <div className={styles.registerButton}>
                  <div className="d-grid gap-2">
                    <Button
                      variant="outline-success"
                      onClick={handleRegistration}
                    >
                      Register
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </Form>
          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            Already have an account ?{' '}
            <span style={{ color: 'blue' }}>
              {' '}
              <b>
                <NavLink to="/login" className={styles.link}>
                  {' '}
                  Login now{' '}
                </NavLink>
              </b>
            </span>
          </div>
        </div>
        <div className={styles.footerContainer}>
          <div>
            {formNumber > 1 ? (
              <Button
                variant="primary"
                onClick={handlePrevious}
                type="submit"
                className={styles.previous}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </Button>
            ) : (
              <></>
            )}
          </div>

          <div>
            {formNumber < 3 ? (
              <Button
                variant="primary"
                onClick={handleNext}
                className={styles.next}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </Button>
            ) : (
              <></>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}
