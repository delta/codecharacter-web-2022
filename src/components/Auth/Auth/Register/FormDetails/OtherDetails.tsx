import { Form } from 'react-bootstrap';
import ReactFlagsSelect from 'react-flags-select';
import AlertMessage from '../../Alert/Alert';
import styles from './OtherDetails.module.css';

import duck from '../../../../../assets/avatars/duck.png';
import elephant from '../../../../../assets/avatars/elephant.png';
import giraffe from '../../../../../assets/avatars/giraffe.png';
import frog from '../../../../../assets/avatars/frog.png';
import monkey from '../../../../../assets/avatars/monkey.png';
import moose from '../../../../../assets/avatars/moose.png';
import narwhal from '../../../../../assets/avatars/narwhal.png';
import owl from '../../../../../assets/avatars/owl.png';
import panda from '../../../../../assets/avatars/panda.png';
import parrot from '../../../../../assets/avatars/parrot.png';
import penguin from '../../../../../assets/avatars/penguin.png';
import pig from '../../../../../assets/avatars/pig.png';
import rabbit from '../../../../../assets/avatars/rabbit.png';
import rhino from '../../../../../assets/avatars/rhino.png';
import sloth from '../../../../../assets/avatars/sloth.png';
import snake from '../../../../../assets/avatars/snake.png';
import walrus from '../../../../../assets/avatars/walrus.png';
import whale from '../../../../../assets/avatars/whale.png';
import zebra from '../../../../../assets/avatars/zebra.png';
import horse from '../../../../../assets/avatars/horse.png';

const avatar = [
  {
    id: 0,
    url: duck,
  },
  {
    id: 1,
    url: elephant,
  },
  {
    id: 2,
    url: giraffe,
  },
  {
    id: 3,
    url: frog,
  },
  {
    id: 4,
    url: monkey,
  },
  {
    id: 5,
    url: moose,
  },
  {
    id: 6,
    url: narwhal,
  },
  {
    id: 7,
    url: owl,
  },
  {
    id: 8,
    url: panda,
  },
  {
    id: 9,
    url: parrot,
  },
  {
    id: 10,
    url: penguin,
  },
  {
    id: 11,
    url: pig,
  },
  {
    id: 12,
    url: rabbit,
  },
  {
    id: 13,
    url: rhino,
  },
  {
    id: 14,
    url: sloth,
  },
  {
    id: 15,
    url: snake,
  },
  {
    id: 16,
    url: walrus,
  },
  {
    id: 17,
    url: whale,
  },
  {
    id: 18,
    url: zebra,
  },
  {
    id: 19,
    url: horse,
  },
];

export default function OtherDetails(props: user): JSX.Element {
  return (
    <div>
      <div className={styles.levelTitle}>Other Details</div>
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
        <div className={styles.avatarBox}>
          <div className={styles.avatarContainer}>
            {avatar.map((avatar, index: number) => (
              <div
                key={index}
                className={styles.avatar}
                onClick={() => {
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
}
