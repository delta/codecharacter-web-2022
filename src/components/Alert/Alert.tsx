import { Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

interface alert {
  err?: boolean;
  content?: string;
}
const AlertMessage = (props: alert): JSX.Element => {
  return (
    <>
      {props.err ? (
        <Alert
          variant="danger"
          style={{
            minHeight: '30px',
            marginTop: '5px',
            padding: '0px',
            paddingLeft: '5px',
          }}
        >
          {props.content}
        </Alert>
      ) : (
        <></>
      )}
    </>
  );
};

export default AlertMessage;
