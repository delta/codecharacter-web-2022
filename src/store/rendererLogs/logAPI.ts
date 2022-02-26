import { ApiError, apiConfig } from '../../api/ApiConfig';
import { GameApi } from '@codecharacter-2022/client';

export const getLogs = (id: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const gameAPI = new GameApi(apiConfig);
    gameAPI
      .getGameLogsByGameId(id)
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
