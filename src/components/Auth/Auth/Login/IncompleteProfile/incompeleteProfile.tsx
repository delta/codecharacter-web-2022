import { Container, Card, Button, Form } from 'react-bootstrap';
import styles from '../../../Auth/auth.module.css';
import OtherDetails from '../../Register/FormDetails/OtherDetails';
import { useState } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import { getUserDetailsAction } from '../../../../../store/User/UserSlice';
import AlertMessage from '../../Alert/Alert';
import { CurrentUserApi } from '@codecharacter-2022/client';
import { apiConfig, ApiError } from '../../../../../api/ApiConfig';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../../../store/hooks';
import Toast from 'react-hot-toast';

function IncompleteProfile(): JSX.Element {
  const [college, setCollege] = useState('');
  const [country, setCountry] = useState('IN');
  const [collegeError, iscollegeError] = useState(false);
  const [submitThird, isSubmitThird] = useState(false);
  const [userName, setUsername] = useState('');
  const [avatar, setAvatar] = useState(0);
  const [userNameError, isuserNameError] = useState(false);
  const [fullName, setfullName] = useState('');
  const [fullNameError, isfullNameError] = useState(false);
  const [loadingStatus, isloadingStatus] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleCollege = () => {
    isSubmitThird(true);
    if (college.trim().length == 0 || college.trim() == '') {
      iscollegeError(true);
    } else {
      iscollegeError(false);
    }
  };

  const handleCollegeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCollege(e.target.value);
    if (submitThird) {
      if (e.target.value.trim().length == 0) {
        iscollegeError(true);
      } else {
        iscollegeError(false);
      }
    }
  };

  const handleSubmit = () => {
    handleFullname();
    handleUsername();
    handleCollege();
    const currentUserapi = new CurrentUserApi(apiConfig);
    isloadingStatus(true);
    currentUserapi
      .completeUserProfile({
        username: userName,
        name: fullName,
        country: country,
        college: college,
        avatarId: avatar,
      })
      .then(() => {
        isloadingStatus(false);
        dispatch(getUserDetailsAction());
        navigate('/login', { replace: true });
      })
      .catch(error => {
        if (error instanceof ApiError) {
          Toast.error(error.message);
        }
      });
  };
  const handleFlagSelect = (code: string) => {
    setCountry(code);
  };

  const handleUsername = () => {
    if (userName.trim().length < 5 || userName.length < 5) {
      isuserNameError(true);
    } else {
      isuserNameError(false);
    }
  };

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    if (submitThird) {
      if (e.target.value.trim().length < 5 || userName.length < 4) {
        isuserNameError(true);
      } else {
        isuserNameError(false);
      }
    }
  };
  const handleFullname = () => {
    if (fullName.trim().length < 5) {
      isfullNameError(true);
    } else {
      isfullNameError(false);
    }
  };

  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setfullName(e.target.value);
    if (submitThird) {
      if (e.target.value.trim().length < 5 || fullName.length < 4) {
        isfullNameError(true);
      } else {
        isfullNameError(false);
      }
    }
  };

  return (
    <div className={styles.mainContainer}>
      <Card className={styles.cardContainer}>
        <div className={styles.titleContainer}>
          <h1 className={styles.name}>Profile Completion</h1>
          <Container className={styles.subTitle}>
            Please complete your profile to start playing
          </Container>
        </div>
        <div style={{ marginTop: '3rem' }}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicFullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Fullname"
                autoComplete="off"
                value={fullName}
                onChange={handleFullNameChange}
                className={
                  submitThird
                    ? fullNameError
                      ? styles.error
                      : styles.correct
                    : styles.normal
                }
              />
              {submitThird && fullNameError ? (
                <AlertMessage
                  err={fullNameError}
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
                value={userName}
                onChange={handleUserNameChange}
                className={
                  submitThird
                    ? userNameError
                      ? styles.error
                      : styles.correct
                    : styles.normal
                }
              />
              {submitThird && userNameError ? (
                <AlertMessage
                  err={userNameError}
                  content={'Username should be atleast 5 characters'}
                />
              ) : (
                <></>
              )}
            </Form.Group>
          </Form>
        </div>
        <div>
          <OtherDetails
            selectedCode={country}
            handleFlagSelect={handleFlagSelect}
            formNumber={3}
            handleCollegeChange={handleCollegeChange}
            college={college}
            collegeError={collegeError}
            submitThird={submitThird}
            register={false}
            handleAvatarChange={setAvatar}
          />
        </div>
        <div className={classnames('d-grid gap-2', styles.submitContainer)}>
          <Button variant="outline-primary" onClick={handleSubmit}>
            Login{' '}
            {loadingStatus ? (
              <FontAwesomeIcon icon={faSpinner as IconProp} />
            ) : (
              <></>
            )}
          </Button>
        </div>
      </Card>
    </div>
  );
}
export default IncompleteProfile;
