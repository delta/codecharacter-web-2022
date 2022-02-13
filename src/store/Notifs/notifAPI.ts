import { NotificationApi, Notification } from '@codecharacter-2022/client';
import { apiConfig, ApiError } from '../../api/ApiConfig';

export const getNotifs = (): Promise<Notification[]> => {
  return new Promise((resolve, reject) => {
    const notifAPI = new NotificationApi(apiConfig);
    notifAPI
      .getAllNotifications()
      .then(notifs => {
        resolve(notifs);
      })
      .catch(error => {
        if (error instanceof ApiError) {
          reject();
        }
      });
  });
};

export const markNotifAsRead = (id: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const notifAPI = new NotificationApi(apiConfig);
    notifAPI
      .saveNotificationReadStatus(id, true)
      .then(() => resolve())
      .catch(error => {
        if (error instanceof ApiError) {
          reject();
        }
      });
  });
};
