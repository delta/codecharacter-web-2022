import { AuthApi, Configuration } from '@codecharacter-2022/client';
import { BASE_PATH, PREFER_DEV_OVERRIDE, homeUrl } from '../config/config';
export class ApiError extends Error {
  status: number;
  message: string;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }
}

export const apiConfig = new Configuration({
  basePath: BASE_PATH,
  headers: PREFER_DEV_OVERRIDE ? { Prefer: PREFER_DEV_OVERRIDE } : {},
  middleware: [
    {
      pre: async context => {
        const headers = context.init.headers;
        context.init.headers = {
          ...headers,
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        };
        return context;
      },
      post: async context => {
        const statusCode = context.response.status;
        if (statusCode === 401) {
          window.location.href = `${homeUrl}/#/login`;
          window.history.forward();
        } else if (statusCode === 403) {
          const authApi = new AuthApi(apiConfig);
          authApi.getAuthStatus().then(res => {
            const { status } = res;
            if (status === 'PROFILE_INCOMPLETE') {
              window.location.href = `${homeUrl}/#/incomplete-profile`;
              window.history.forward();
            }
          });
        }
        if (statusCode >= 400) {
          const body = await context.response.json();
          throw new ApiError(statusCode, body?.message ?? 'Unknown error');
        }
        return context.response;
      },
    },
  ],
});

export const authConfig = new Configuration({
  basePath: BASE_PATH,
  headers: PREFER_DEV_OVERRIDE ? { Prefer: PREFER_DEV_OVERRIDE } : {},
  middleware: [
    {
      post: async context => {
        const status = context.response.status;
        if (status >= 400) {
          const body = await context.response.json();
          throw new ApiError(status, body?.message ?? 'Unknown error');
        }
        return context.response;
      },
    },
  ],
});
