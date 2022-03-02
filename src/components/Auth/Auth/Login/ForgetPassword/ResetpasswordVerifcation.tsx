import { Form, Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import AlertMessage from '../../Alert/Alert';
import PasswordAlertMessage from '../../Alert/PassworAlert';
import styles from '../../auth.module.css';
import classnames from 'classnames';
import {
  faEye,
  faEyeSlash,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ApiError, authConfig } from '../../../../../api/ApiConfig';
import { AuthApi } from '@codecharacter-2022/client';
import { useNavigate, useLocation } from 'react-router-dom';
import Toast from 'react-hot-toast';

function ResetpasswordVerification(): JSX.Element {
  const [confirmpasswordError, isconfirmpasswordError] = useState(false);
  const [passwordError, ispasswordError] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [password, setPassword] = useState('');
  const [passwordType, setPasswordType] = useState<string>('password');
  const [loading, isLoading] = useState<boolean>(false);
  const [confirmpasswordType, setconfirmPasswordType] =
    useState<string>('password');
  const [error, setError] = useState('NIL');
  const navigate = useNavigate();
  const location = useLocation();
  const token = new URLSearchParams(location.search).get('token');
  const passwordTypeAction = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
    } else {
      setPasswordType('password');
    }
  };

  const confirmpasswordTypeAction = () => {
    if (confirmpasswordType === 'password') {
      setconfirmPasswordType('text');
    } else {
      setconfirmPasswordType('password');
    }
  };

  const handleSubmit = () => {
    const passwordFormat =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$/;

    if (password.match(passwordFormat)) {
      ispasswordError(false);
    } else {
      ispasswordError(true);
    }

    if (confirmPassword === password) {
      isconfirmpasswordError(false);
    } else {
      isconfirmpasswordError(true);
    }

    if (!(password && confirmpasswordError)) {
      const authApi = new AuthApi(authConfig);
      isLoading(true);
      authApi
        .resetPassword({
          token: token != null ? token : 'no-token',
          password: password,
          passwordConfirmation: confirmPassword,
        })
        .then(() => {
          isLoading(false);
          setError('NIL');
          Toast.success('Password Reset done successfully');
          navigate('/login', { replace: true });
        })
        .catch(error => {
          if (error instanceof ApiError) {
            Toast.error(error.message);
            setError(error.message);
          }
        });
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

  const handleConfirmSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
    const passwordFormat =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$/;
    if (
      event.target.value.match(passwordFormat) &&
      event.target.value === password
    ) {
      isconfirmpasswordError(false);
    } else {
      isconfirmpasswordError(true);
    }
  };

  return (
    <div className={styles.mainContainer}>
      <Card className={styles.cardContainer}>
        <div className={styles.titleContainer}>
          <h2 className={styles.name}>CodeCharacter Reset-Password</h2>
        </div>
        <div>
          <PasswordAlertMessage err={true} variantColor={'info'} />
        </div>
        <form className={styles.formContainer}>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>New Password</Form.Label>
            <div className={styles.eyeContainer}>
              <Form.Control
                type={passwordType}
                placeholder="New Password"
                value={password}
                onChange={handlePasswordSubmit}
                className={passwordError ? styles.error : styles.normal}
              />
              <div className={styles.eye}>
                {passwordType === 'password' ? (
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
            {passwordError ? (
              <>
                <AlertMessage
                  err={passwordError}
                  content={'Password did not match the format'}
                />
              </>
            ) : (
              <></>
            )}
          </Form.Group>
          <div>
            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <div className={styles.eyeContainer}>
                <Form.Control
                  type={confirmpasswordType}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  className={
                    confirmpasswordError ? styles.error : styles.normal
                  }
                  onChange={handleConfirmSubmit}
                />
                <div className={styles.eye}>
                  {confirmpasswordType === 'password' ? (
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
              {confirmPassword ? (
                <AlertMessage
                  err={confirmpasswordError}
                  content={'Please Enter the password correctly'}
                />
              ) : (
                <></>
              )}
            </Form.Group>
          </div>
          <div>
            {error != 'NIL' ? (
              <AlertMessage err={true} content={error} />
            ) : (
              <></>
            )}
          </div>
          <div className={classnames('d-grid gap-2', styles.submitContainer)}>
            <Button variant="outline-primary" onClick={handleSubmit}>
              Reset Password{' '}
              {loading ? (
                <FontAwesomeIcon icon={faSpinner as IconProp} />
              ) : (
                <></>
              )}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
export default ResetpasswordVerification;
