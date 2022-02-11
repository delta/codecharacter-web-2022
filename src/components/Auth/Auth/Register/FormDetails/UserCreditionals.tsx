import { Form } from 'react-bootstrap';
import AlertMessage from '../../Alert/Alert';
import styles from './user.module.css';
import { useState } from 'react';
import PasswordAlertMessage from '../../Alert/PassworAlert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLock,
  faTimes,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
export default function UserCreditionals(props: creditionals): JSX.Element {
  const [show, isShow] = useState(true);
  const [passwordType, setPasswordType] = useState<{
    password: string;
    confirmPassword: string;
  }>({ password: 'password', confirmPassword: 'password' });
  const passwordTypeAction = () => {
    if (passwordType.password === 'password') {
      setPasswordType({
        password: 'text',
        confirmPassword: passwordType.confirmPassword,
      });
    } else {
      setPasswordType({
        password: 'password',
        confirmPassword: passwordType.confirmPassword,
      });
    }
  };

  const confirmPasswordAction = () => {
    if (passwordType.confirmPassword === 'password') {
      setPasswordType({
        password: passwordType.password,
        confirmPassword: 'text',
      });
    } else {
      setPasswordType({
        password: passwordType.password,
        confirmPassword: 'password',
      });
    }
  };
  const showAlert = () => {
    isShow(!show);
  };
  return (
    <div>
      <div className={styles.levelTitle}>User Creditionals</div>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>
          Password{' '}
          {show && props.password == '' ? (
            <FontAwesomeIcon
              icon={faTimes as IconProp}
              size="sm"
              onClick={showAlert}
            />
          ) : (
            <FontAwesomeIcon
              icon={faLock as IconProp}
              size="sm"
              onClick={showAlert}
            />
          )}
        </Form.Label>
        <PasswordAlertMessage
          err={show && props.password == ''}
          variantColor="info"
        />
        <div className={styles.eyeContainer}>
          <Form.Control
            type={passwordType.password}
            placeholder="Password"
            value={props.password}
            onChange={props.handlePasswordChange}
            className={
              props.submitSecond
                ? props.passwordError
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
          err={props.submitSecond && props.passwordError}
          variantColor="danger"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
        <Form.Label>Confirm password</Form.Label>
        <div className={styles.eyeContainer}>
          <Form.Control
            type={passwordType.confirmPassword}
            placeholder="Confirm Password"
            value={props.confirmPassword}
            onChange={props.handleConfirmPasswordChange}
            className={
              props.submitSecond
                ? props.confirmpasswordError
                  ? styles.error
                  : styles.correct
                : styles.normal
            }
          />
          <div className={styles.eye}>
            {passwordType.confirmPassword === 'password' ? (
              <FontAwesomeIcon
                size="sm"
                icon={faEyeSlash as IconProp}
                onClick={confirmPasswordAction}
              />
            ) : (
              <FontAwesomeIcon
                size="sm"
                icon={faEye as IconProp}
                onClick={confirmPasswordAction}
              />
            )}
          </div>
        </div>
        {props.submitSecond && props.confirmpasswordError ? (
          <AlertMessage
            err={props.confirmpasswordError}
            content={'Please! check your password'}
          />
        ) : (
          <></>
        )}
      </Form.Group>
    </div>
  );
}

interface creditionals {
  submitSecond?: boolean;
  handlePasswordChange?: React.ChangeEventHandler<HTMLInputElement>;
  handleConfirmPasswordChange?: React.ChangeEventHandler<HTMLInputElement>;
  password?: string;
  passwordError?: boolean;
  confirmPassword?: string;
  confirmpasswordError?: boolean;
}
