import { Form } from 'react-bootstrap';
import AlertMessage from '../../Alert/Alert';
import styles from './user.module.css';
import { useState } from 'react';
import PasswordAlertMessage from '../../Alert/PassworAlert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function UserCreditionals(props: creditionals): JSX.Element {
  const [show, isShow] = useState(true);
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
            <FontAwesomeIcon icon={faTimes} onClick={showAlert} />
          ) : (
            <FontAwesomeIcon icon={faLock} onClick={showAlert} />
          )}
        </Form.Label>
        <PasswordAlertMessage
          err={show && props.password == ''}
          variantColor="info"
        />
        <Form.Control
          type="password"
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
        <PasswordAlertMessage
          err={props.submitSecond && props.passwordError}
          variantColor="danger"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
        <Form.Label>Confirm password</Form.Label>
        <Form.Control
          type="password"
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
