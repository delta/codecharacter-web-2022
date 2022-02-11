import { useState, useEffect, useRef } from 'react';
import styles from './Notifs.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const Notifs: React.FunctionComponent = () => {
  const [notifs, setNotifs] = useState([]);
  const notifModalRef = useRef<HTMLDivElement>(null);
  const notifIconRef = useRef<HTMLDivElement>(null);

  interface Notif {
    id: string;
    title: string;
    content: string;
    createdAt: string;
    read: boolean;
  }

  useEffect(() => {
    fetch(
      'https://stoplight.io/mocks/rinish-api-testbed/codecharacter/14036190/user/notifications',
    )
      .then(res => res.json())
      .then(data => {
        setNotifs(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const toggleNotifModal = () => {
    notifModalRef.current?.classList.toggle(styles.notifModalShow);
    notifIconRef.current?.classList.toggle(styles.notifIconShow);
  };

  return (
    <>
      <div
        className={styles.notifIconContainer}
        ref={notifIconRef}
        onClick={toggleNotifModal}
      >
        <FontAwesomeIcon icon={faBell} />
      </div>
      <div className={styles.notifModal} ref={notifModalRef}>
        {notifs.map((notif: Notif) => {
          return (
            <div
              className={`${styles.notif} ${
                notif.read ? '' : styles.notifUnRead
              }`}
              key={notif.id}
            >
              <div className={styles.notifLine}>
                <h5 className={styles.notifHeader}>{notif.title}</h5>
                <p className={styles.notifTime}>{notif.createdAt}</p>
              </div>
              <div className={styles.notifLine}>
                <p className={styles.notifContent}>{notif.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Notifs;
