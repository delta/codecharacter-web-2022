import { useState } from 'react';
import { Form } from 'react-bootstrap';
import ReactFlagsSelect from 'react-flags-select';
import AlertMessage from '../../Alert/Alert';
import styles from './OtherDetails.module.css';
import { getAllAvatars } from '../../../../Avatar/Avatar';

export default function OtherDetails(props: user): JSX.Element {
  const [selectedAvatar, setSelectedAvatar] = useState(0);
  const avatars = getAllAvatars();

  return (
    <div>
      {props.register ? (
        <div className={styles.levelTitle}>Other Details</div>
      ) : (
        <></>
      )}
      <Form.Group className="mb-3" controlId="formBasicCountryName">
        <Form.Label>Country</Form.Label>
        <div className={styles.flagContainer}>
          <ReactFlagsSelect
            searchable
            selected={props.selectedCode != null ? props.selectedCode : 'IN'}
            onSelect={
              props.handleFlagSelect != null
                ? props.handleFlagSelect
                : () => {
                    return;
                  }
            }
          />
        </div>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCollegename">
        <Form.Label>College</Form.Label>
        <Form.Control
          type="text"
          placeholder="College"
          value={props.college}
          onChange={props.handleCollegeChange}
          className={
            props.formNumber === 3 && props.submitThird
              ? props.collegeError
                ? styles.error
                : styles.correct
              : styles.normal
          }
        />
        {props.formNumber == 3 && props.collegeError ? (
          <AlertMessage
            err={props.collegeError}
            content={'Please Enter your College Name'}
          />
        ) : (
          <></>
        )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicAvatar">
        <Form.Label>Avatar</Form.Label>
        <div>
          <div className={styles.avatarContainer}>
            {avatars.map((avatar, index: number) => (
              <div
                key={index}
                className={`${styles.avatar} ${
                  selectedAvatar === avatar.id ? styles.avatarSelected : ''
                }`}
                onClick={() => {
                  setSelectedAvatar(avatar.id);
                  props.handleAvatarChange(avatar.id);
                }}
              >
                <img
                  className={styles.avatarImg}
                  src={avatar.url}
                  alt="avatar"
                />
              </div>
            ))}
          </div>
        </div>
      </Form.Group>
    </div>
  );
}

interface user {
  selectedCode?: string;
  handleFlagSelect?: (code: string) => void;
  formNumber?: number;
  handleCollegeChange?: React.ChangeEventHandler<HTMLInputElement>;
  handleAvatarChange: (id: number) => void;
  college?: string;
  collegeError?: boolean;
  submitThird?: boolean;
  register?: boolean;
}
