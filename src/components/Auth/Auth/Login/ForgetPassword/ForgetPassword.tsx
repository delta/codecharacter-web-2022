import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import AlertMessage from '../../Alert/Alert';
import styles from './forgetpassword.module.css';
import { AuthApi } from '@codecharacter-2022/client';
import { ApiError, authConfig } from '../../../../../api/ApiConfig';

interface ForgetPasswordInterface {
  open?: boolean;
  handleForgetPassword?: () => void;
}
const ForgetPassword = (props: ForgetPasswordInterface): JSX.Element => {
  const [email, setEmail] = useState('');
  const [emailError, isemailError] = useState(false);

  const handleEmailSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    const mailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (event.target.value.match(mailformat)) {
      isemailError(false);
    } else {
      isemailError(true);
    }
  };

  const handleSubmit = () => {
    const mailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email.match(mailformat)) {
      const authApi = new AuthApi(authConfig);
      authApi
        .forgotPassword({ email: email })
        .then()
        .catch(error => {
          if (error instanceof ApiError) {
            // Toast will be displayed
          }
        });
    }
  };
  return (
    <div>
      <Modal
        show={props.open}
        onHide={props.handleForgetPassword}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className={styles.modalHeader}>
          <Modal.Title>Forgot Password</Modal.Title>
        </Modal.Header>

        <Modal.Body className={styles.modalContainer}>
          <div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="name"
                placeholder="Email"
                value={email}
                className={emailError ? styles.error : styles.normal}
                onChange={handleEmailSubmit}
              />
              {emailError ? (
                <AlertMessage
                  err={emailError}
                  content={'Please ! Enter a valid Email ID'}
                />
              ) : (
                <></>
              )}
            </Form.Group>
          </div>{' '}
        </Modal.Body>

        <Modal.Footer className={styles.modalContainer}>
          <Button
            variant="light"
            onClick={() => {
              handleSubmit();
              if (props.handleForgetPassword != null)
                props.handleForgetPassword();
            }}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ForgetPassword;
