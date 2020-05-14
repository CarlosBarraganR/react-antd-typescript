import { AxiosRequestConfig } from 'axios';
import { GET, POST, DELETE, PATCH, PUT } from 'utils/constants';
import { axiosRequest } from './axiosRequest';

const $get = (url: string, options?: AxiosRequestConfig) =>
  axiosRequest({
    url,
    ...options,
    method: GET
  });

const $post = (url: string, options: AxiosRequestConfig) =>
  axiosRequest({
    url,
    ...options,
    method: POST
  });

const $delete = (url: string, options: AxiosRequestConfig) =>
  axiosRequest({
    url,
    ...options,
    method: DELETE
  });

const $put = (url: string, options: AxiosRequestConfig) =>
  axiosRequest({
    url,
    ...options,
    method: PUT
  });

const $patch = (url: string, options: AxiosRequestConfig) =>
  axiosRequest({
    url,
    ...options,
    method: PATCH
  });

export const axiosModule = {
  $get,
  $post,
  $delete,
  $put,
  $patch
};
