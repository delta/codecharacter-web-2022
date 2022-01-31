import { Alert } from 'react-bootstrap';
import styles from './alert.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

interface alert {
  err?: boolean;
  content?: string;
}
const AlertMessage = (props: alert): JSX.Element => {
  return (
    <>
      {props.err ? (
        <Alert variant="danger" className={styles.alert}>
          {props.content}
        </Alert>
      ) : (
        <></>
      )}
    </>
  );
};

export default AlertMessage;
