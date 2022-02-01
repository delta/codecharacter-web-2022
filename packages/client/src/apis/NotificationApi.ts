/* tslint:disable */
/* eslint-disable */
/**
 * CodeCharacter API
 * Specification of the CodeCharacter API
 *
 * The version of the OpenAPI document: 2022.0.1
 * Contact: delta@nitt.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from '../runtime';
import { GenericError, Notification } from '../models';

export interface SaveNotificationReadStatusRequest {
  notificationId: string;
  body: boolean;
}

/**
 * NotificationApi - interface
 *
 * @export
 * @interface NotificationApiInterface
 */
export interface NotificationApiInterface {
  /**
   * Get all notifications
   * @summary Get all notifications
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NotificationApiInterface
   */
  getAllNotificationsRaw(
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<Array<Notification>>>;

  /**
   * Get all notifications
   * Get all notifications
   */
  getAllNotifications(
    initOverrides?: RequestInit,
  ): Promise<Array<Notification>>;

  /**
   * Save notification read status
   * @summary Save notification read status
   * @param {string} notificationId ID of the notification
   * @param {boolean} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NotificationApiInterface
   */
  saveNotificationReadStatusRaw(
    requestParameters: SaveNotificationReadStatusRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<void>>;

  /**
   * Save notification read status
   * Save notification read status
   */
  saveNotificationReadStatus(
    notificationId: string,
    body: boolean,
    initOverrides?: RequestInit,
  ): Promise<void>;
}

/**
 *
 */
export class NotificationApi
  extends runtime.BaseAPI
  implements NotificationApiInterface
{
  /**
   * Get all notifications
   * Get all notifications
   */
  async getAllNotificationsRaw(
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<Array<Notification>>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = await token('http-bearer', []);

      if (tokenString) {
        headerParameters['Authorization'] = `Bearer ${tokenString}`;
      }
    }
    const response = await this.request(
      {
        path: `/user/notifications`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response);
  }

  /**
   * Get all notifications
   * Get all notifications
   */
  async getAllNotifications(
    initOverrides?: RequestInit,
  ): Promise<Array<Notification>> {
    const response = await this.getAllNotificationsRaw(initOverrides);
    return await response.value();
  }

  /**
   * Save notification read status
   * Save notification read status
   */
  async saveNotificationReadStatusRaw(
    requestParameters: SaveNotificationReadStatusRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<void>> {
    if (
      requestParameters.notificationId === null ||
      requestParameters.notificationId === undefined
    ) {
      throw new runtime.RequiredError(
        'notificationId',
        'Required parameter requestParameters.notificationId was null or undefined when calling saveNotificationReadStatus.',
      );
    }

    if (
      requestParameters.body === null ||
      requestParameters.body === undefined
    ) {
      throw new runtime.RequiredError(
        'body',
        'Required parameter requestParameters.body was null or undefined when calling saveNotificationReadStatus.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = await token('http-bearer', []);

      if (tokenString) {
        headerParameters['Authorization'] = `Bearer ${tokenString}`;
      }
    }
    const response = await this.request(
      {
        path: `/user/notifications/{notificationId}/read`.replace(
          `{${'notificationId'}}`,
          encodeURIComponent(String(requestParameters.notificationId)),
        ),
        method: 'PUT',
        headers: headerParameters,
        query: queryParameters,
        body: requestParameters.body as any,
      },
      initOverrides,
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Save notification read status
   * Save notification read status
   */
  async saveNotificationReadStatus(
    notificationId: string,
    body: boolean,
    initOverrides?: RequestInit,
  ): Promise<void> {
    await this.saveNotificationReadStatusRaw(
      { notificationId: notificationId, body: body },
      initOverrides,
    );
  }
}
