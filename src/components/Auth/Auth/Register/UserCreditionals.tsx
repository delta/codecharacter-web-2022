import { Form } from 'react-bootstrap';
import AlertMessage from '../Alert/Alert';
import styles from './user.module.css';

export default function UserCreditionals(props: creditionals): JSX.Element {
  return (
    <div>
      <div className={styles.levelTitle}>User Creditionals</div>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
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
        {props.submitSecond && props.passwordError ? (
          <AlertMessage
            err={props.passwordError}
            content={'Password should be atleast 5 characters'}
          />
        ) : (
          <></>
        )}
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
