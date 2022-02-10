import { Alert } from 'react-bootstrap';
import styles from './alert.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

interface alert {
  err?: boolean;
  variantColor?: string;
}
const PasswordAlertMessage = (props: alert): JSX.Element => {
  return (
    <>
      <Alert
        variant={props.variantColor}
        show={props.err}
        className={styles.alert}
      >
        <li>Password should be greater than 8 characters</li>
        <li>
          Password should contain atleast 1 UpperCase letter,1 Special
          Character,1 number
        </li>
      </Alert>
    </>
  );
};

export default PasswordAlertMessage;
