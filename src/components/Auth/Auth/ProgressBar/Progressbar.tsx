import { ProgressBar } from 'react-bootstrap';
import styles from './progressBar.module.css';
import {
  faUser,
  faCode,
  faUserSecret,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
interface user {
  formNumber?: number;
  completed?: boolean;
  handleForm1?: () => void;
  handleForm2?: () => void;
}
export default function UserDetails(props: user): JSX.Element {
  return (
    <div>
      <div className={styles.progressBarContainer}>
        <div>
          <div>
            <ProgressBar
              now={props.formNumber != null ? (props.formNumber - 1) * 50 : 0}
              className={styles.progressBar}
            />
          </div>
        </div>
        <div className={styles.levelContainer}>
          <div>
            {' '}
            <button
              className={
                props.formNumber != null
                  ? props.formNumber > 1
                    ? styles.levelCompleted
                    : styles.levelInitiated
                  : styles.levelInitiated
              }
              onClick={props.handleForm1}
            >
              <FontAwesomeIcon icon={faUser} />
            </button>
          </div>
          <div>
            {' '}
            <button
              className={
                props.formNumber != null
                  ? props.formNumber > 2
                    ? styles.levelCompleted
                    : styles.levelInitiated
                  : styles.levelInitiated
              }
              onClick={props.handleForm2}
            >
              <FontAwesomeIcon icon={faUserSecret} />
            </button>
          </div>
          <div>
            {' '}
            <button
              className={
                !props.completed ? styles.levelInitiated : styles.levelCompleted
              }
            >
              <FontAwesomeIcon icon={faCode} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
