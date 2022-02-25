import { Form } from 'react-bootstrap';
import AlertMessage from '../../Alert/Alert';
import styles from './user.module.css';

export default function UserDetails(props: user): JSX.Element {
  return (
    <div>
      <div className={styles.levelTitle}>User Details</div>
      <Form.Group className="mb-3" controlId="formBasicFullName">
        <Form.Label>Fullname</Form.Label>
        <Form.Control
          type="text"
          placeholder="Fullname"
          autoComplete="off"
          value={props.fullName}
          onChange={props.handleFullNameChange}
          className={
            props.submitFirst
              ? props.fullNameError
                ? styles.error
                : styles.correct
              : styles.normal
          }
        />
        {props.submitFirst && props.fullNameError ? (
          <AlertMessage
            err={props.fullNameError}
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
          autoComplete="off"
          value={props.userName}
          onChange={props.handleUserNameChange}
          className={
            props.submitFirst
              ? props.userNameError
                ? styles.error
                : styles.correct
              : styles.normal
          }
        />
        {props.submitFirst && props.userNameError ? (
          <AlertMessage
            err={props.userNameError}
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
          value={props.email}
          className={
            props.submitFirst
              ? props.emailError
                ? styles.error
                : styles.correct
              : styles.normal
          }
          onChange={props.handleEmailChange}
        />
        {props.submitFirst && props.emailError ? (
          <AlertMessage
            err={props.emailError}
            content={'Please! Enter a valid email'}
          />
        ) : (
          <></>
        )}
      </Form.Group>
    </div>
  );
}

interface user {
  submitFirst?: boolean;
  handleFullNameChange?: React.ChangeEventHandler<HTMLInputElement>;
  handleUserNameChange?: React.ChangeEventHandler<HTMLInputElement>;
  handleEmailChange?: React.ChangeEventHandler<HTMLInputElement>;
  fullName?: string;
  fullNameError?: boolean;
  userName?: string;
  userNameError?: boolean;
  email?: string;
  emailError?: boolean;
  register?: boolean;
}
