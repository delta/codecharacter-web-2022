import { Form, Container, Card, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import { ReCAPTCHA } from 'react-google-recaptcha';
import styles from './auth.module.css';
import { accessUrl, SECRET_KEY, SITE_KEY } from '../../config/config';
import { NavLink } from 'react-router-dom';
import UserDetails from '../../components/Auth/Auth/Register/UserDetails';
import UserCreditionals from '../../components/Auth/Auth/Register/UserCreditionals';
import OtherDetails from '../../components/Auth/Auth/Register/OtherDetails';
import ProgressBar from '../../components/Auth/Auth/ProgressBar/Progressbar';

let increment = 1;
let passCondition = 0;
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
      passCondition += 1;
    } else {
      isfullNameError(false);
    }
  };
  const handleUsername = () => {
    if (userName.trim().length < 5 || userName.length < 5) {
      passCondition += 1;
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
      passCondition += 1;
    }
  };

  const handlepassword = () => {
    if (password.trim().length < 5) {
      ispasswordError(true);
      passCondition += 1;
    } else {
      ispasswordError(false);
    }
  };
  const handleConfirmpassword = () => {
    if (!(password === confirmPassword) || password.length < 5) {
      isconfirmpasswordError(true);
      passCondition += 1;
    } else {
      isconfirmpasswordError(false);
    }
  };
  const handleForm1 = () => {
    if (formNumber > 1) {
      setFormnumber(1);
      increment = 1;
    }
  };

  const handleForm2 = () => {
    if (formNumber > 2) {
      setFormnumber(2);
      increment = 2;
    }
  };
  const handleStepSubmit = (step: number) => {
    switch (step) {
      case 1:
        issubmitFirst(true);
        passCondition = 0;
        handleFullname();
        handleUsername();
        handleEmail();
        break;
      case 2:
        issubmitSecond(true);
        passCondition = 0;
        handlepassword();
        handleConfirmpassword();
        break;
    }
  };
  const handleForm = (level: number) => {
    if (passCondition == 0) {
      if (level == 1) {
        increment += 1;
      }

      if (level == -1) {
        increment -= 1;
      }
    }
    setFormnumber(increment);
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
  const handleFlagSelect = (code: string) => {
    setSelected(code);
  };
  return (
    <div className={styles.mainContainer}>
      <Card className={styles.cardContainer}>
        <div className={styles.titleContainer}>
          <h1> Register to CodeCharacter</h1>
          <Container className={styles.subTitle}>
            <p> Register now and code your way through 👨‍💻️!! </p>
          </Container>
        </div>
        <ProgressBar
          formNumber={formNumber}
          completed={completed}
          handleForm1={handleForm1}
          handleForm2={handleForm2}
        />
        <div className={styles.formContainer}>
          <Form>
            {formNumber === 1 ? (
              <>
                <UserDetails
                  submitFirst={submitFirst}
                  handleFullNameChange={handleFullNameChange}
                  handleUserNameChange={handleUserNameChange}
                  handleEmailChange={handleEmailChange}
                  fullName={fullName}
                  fullNameError={fullNameError}
                  userName={userName}
                  userNameError={userNameError}
                  email={email}
                  emailError={emailError}
                />
              </>
            ) : formNumber === 2 ? (
              <>
                <UserCreditionals
                  submitSecond={submitSecond}
                  handlePasswordChange={handlePasswordChange}
                  handleConfirmPasswordChange={handleConfirmPasswordChange}
                  password={password}
                  passwordError={passwordError}
                  confirmPassword={confirmPassword}
                  confirmpasswordError={confirmpasswordError}
                />
              </>
            ) : formNumber === 3 ? (
              <>
                <div>
                  <OtherDetails
                    selectedCode={selected}
                    handleFlagSelect={handleFlagSelect}
                  />
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
              </>
            ) : (
              <></>
            )}
          </Form>
          <div className={styles.linkContainer}>
            Already have an account ?{' '}
            <span>
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
