import { axiosRequest } from './axiosRequest';
import { SessionManager } from '../session_manager/sessionManager';
import { GET, POST, DELETE, PATCH, PUT } from '../utils/constants/apiConstants';

const $get = (
  url: string,
  options?: Object,
  withAuthorization?: boolean,
  customHeaders?: Object
) =>
  axiosRequest({
    url,
    ...options,
    method: GET,
    headers: {
      ...customHeaders,
      Authorization: withAuthorization ? SessionManager.headers() : null
    }
  });

const $post = (
  url: string,
  options: Object,
  withAuthorization?: boolean,
  customHeaders?: Object
) =>
  axiosRequest({
    url,
    ...options,
    method: POST,
    headers: {
      ...customHeaders,
      Authorization: withAuthorization ? SessionManager.headers() : null
    }
  });

const $delete = (
  url: string,
  options: Object,
  withAuthorization?: boolean,
  customHeaders?: Object
) =>
  axiosRequest({
    url,
    ...options,
    method: DELETE,
    headers: {
      ...customHeaders,
      Authorization: withAuthorization ? SessionManager.headers() : null
    }
  });

const $put = (
  url: string,
  options: Object,
  withAuthorization?: boolean,
  customHeaders?: Object
) =>
  axiosRequest({
    url,
    ...options,
    method: PUT,
    headers: {
      ...customHeaders,
      Authorization: withAuthorization ? SessionManager.headers() : null
    }
  });

const $patch = (
  url: string,
  options: Object,
  withAuthorization?: boolean,
  customHeaders?: Object
) =>
  axiosRequest({
    url,
    ...options,
    method: PATCH,
    headers: {
      ...customHeaders,
      Authorization: withAuthorization ? SessionManager.headers() : null
    }
  });

export const axiosModule = {
  $get,
  $post,
  $delete,
  $put,
  $patch
};
