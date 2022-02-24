import { ApiError, apiConfig } from '../../api/ApiConfig';
import { GameApi } from '@codecharacter-2022/client';

export const getLogs = (id: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const gameAPI = new GameApi(apiConfig);
    console.log('getLogs', id);
    gameAPI
      .getGameLogsByGameId('497f6eca-6276-4993-bfeb-53cbbbba6f08')
      .then(logs => {
        resolve(logs);
      })
      .catch(error => {
        if (error instanceof ApiError) {
          reject();
        }
      });
  });
};
