import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Notification } from '@codecharacter-2022/client';
import styles from './Notifs.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import {
  getNotifAction,
  markNotifAction,
  notifs as notifications,
} from '../../store/Notifs/NotifSlice';

const Notifs: React.FunctionComponent = () => {
  const notifModalRef = useRef<HTMLDivElement>(null);
  const notifIconRef = useRef<HTMLDivElement>(null);
  const notifs = useAppSelector<Notification[]>(notifications)
    .slice()
    .reverse();
  const hookDispatch = useAppDispatch();

  useEffect(() => {
    hookDispatch(getNotifAction());
  }, []);

  const toggleNotifModal = () => {
    if (!notifModalRef.current?.classList.contains(styles.notifModalShow)) {
      hookDispatch(markNotifAction(notifs[0].id));
    }
    notifModalRef.current?.classList.toggle(styles.notifModalShow);
    notifIconRef.current?.classList.toggle(styles.notifIconShow);
  };

  const parseDate = (date: Date) => {
    const createdDate = new Date(date);
    const diff =
      (new Date().getTime() - createdDate.getTime()) / (1000 * 3600 * 24);
    const dateDiff =
      diff === 0
        ? `Today`
        : diff === 1
        ? `Yesterday`
        : `${Math.round(diff)} days ago`;
    return `${createdDate.getHours()}:${createdDate.getMinutes()}, ${dateDiff}`;
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
        {notifs.map((notif: Notification) => {
          return (
            <div
              className={`${styles.notif} ${
                notif.read ? '' : styles.notifUnRead
              }`}
              key={notif.id}
            >
              <div className={styles.notifLine}>
                <h5 className={styles.notifHeader}>{notif.title}</h5>
                <p className={styles.notifTime}>{parseDate(notif.createdAt)}</p>
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
