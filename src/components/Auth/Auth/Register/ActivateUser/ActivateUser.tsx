import { UserApi } from '@codecharacter-2022/client';
import { Card } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { authConfig, ApiError } from '../../../../../api/ApiConfig';
import styles from './activateUser.module.css';

const ActivateUser: React.FunctionComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const id = new URLSearchParams(location.search).get('id');
  const token = new URLSearchParams(location.search).get('token');
  const [verify, setVerify] = useState('Verifying');
  const [message, setMessage] = useState('Account can not be verified');
  useEffect(() => {
    if (verify === 'Verified') {
      setTimeout(() => {
        navigate('/login', { replace: true });
      }, 3000);
    }
  }, [verify]);
  useEffect(() => {
    if (id != null && token != null) {
      const userApi = new UserApi(authConfig);
      userApi
        .activateUser(id, {
          token: token,
        })
        .then(() => {
          setVerify('Verified');
          setMessage(
            'Your Account has been verified. You can now start playing \n You will be redirected to the Login page',
          );
        })
        .catch(e => {
          if (e instanceof ApiError) {
            setVerify('Verification Failed');
            setMessage(e.message + '\n Account can not be verfied');
          }
        });
    }
  }, [id, token]);

  return (
    <div className={styles.modalContainer}>
      <Card className={styles.cardContainer}>
        <Card.Body>
          <Card.Title
            className={
              verify === 'Verified' ? styles.cardTitle : styles.cardTitleFailed
            }
          >
            {verify}
          </Card.Title>
          <div
            className={
              verify === 'Verified' ? styles.cardBody : styles.cardBodyFailed
            }
          >
            <Card.Text>{message}</Card.Text>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ActivateUser;
