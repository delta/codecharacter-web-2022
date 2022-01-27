import { Form, Button, Container, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import AlertMessage from '../../components/Alert';
import styles from '../../styles/auth.module.css';

export default function Login(): JSX.Element {
  const [emailError, isemailError] = useState(false);
  const [passwordError, ispasswordError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, islogin] = useState(false);
  const handleLoginSubmit = () => {
    islogin(true);
    const mailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
    if (email.match(mailformat)) isemailError(false);
    else isemailError(true);
    if (password.length >= 5) ispasswordError(false);
    else ispasswordError(true);
  };

  const handlePasswordSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value != null) {
      setPassword(event.target.value);
    }
    if (event.target.value.toString().length >= 5) ispasswordError(false);
    else ispasswordError(true);
  };

  const handleEmailSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    const mailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (event.target.value.match(mailformat)) isemailError(false);
    else isemailError(true);
  };
  return (
    <div className={styles.mainContainer}>
      <Card className={styles.cardContainer}>
        <div className={styles.titleContainer}>
          <h1 style={{ color: 'white' }} className={styles.name}>
            Welcome!! To CodeCharatcer
          </h1>
          <Container className={styles.subTitle}>
            Log in to access your dashboard and profile 👏️🎊️{' '}
          </Container>
        </div>
        <form className={styles.formContainer}>
          <div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="name"
                placeholder="Email"
                value={email}
                onChange={handleEmailSubmit}
                style={
                  login
                    ? emailError
                      ? { background: '#ffdddd' }
                      : { background: '#c9ffad' }
                    : { background: 'white' }
                }
              />
              {emailError && login ? (
                <AlertMessage
                  err={emailError}
                  content={'Please ! Enter a valid Email ID'}
                />
              ) : (
                <></>
              )}
            </Form.Group>
          </div>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordSubmit}
              style={
                login
                  ? passwordError
                    ? { background: '#ffdddd' }
                    : { background: '#c9ffad' }
                  : { background: 'white' }
              }
            />
            {passwordError && login ? (
              <>
                <AlertMessage
                  err={passwordError}
                  content={'Check your password'}
                />
              </>
            ) : (
              <></>
            )}
          </Form.Group>
          <div
            style={{
              textAlign: 'center',
              marginTop: '10%',
              background: 'white',
              borderRadius: '5px',
            }}
            className="d-grid gap-2"
          >
            <Button
              variant="outline-primary"
              type="submit"
              onClick={handleLoginSubmit}
            >
              Login
            </Button>
          </div>
        </form>
        <br />
        <div style={{ textAlign: 'center' }}>
          <Button variant="primary">
            <div>
              <FontAwesomeIcon icon={faGoogle} style={{ marginRight: '8px' }} />
              Login with Google
            </div>
          </Button>
        </div>
        <div style={{ textAlign: 'center', marginTop: '5%' }}>
          Do not have one ?{' '}
          <span style={{ color: 'blue' }}>
            {' '}
            <a href="/#/register" className={styles.link}>
              <b>register</b>
            </a>
          </span>
        </div>
      </Card>
    </div>
  );
}
