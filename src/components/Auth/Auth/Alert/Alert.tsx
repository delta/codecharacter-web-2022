import { Alert } from 'react-bootstrap';
import styles from './alert.module.css';

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
