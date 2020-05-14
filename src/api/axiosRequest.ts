/* eslint-disable no-console */
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { axiosClient } from './axiosClient';

export interface AxiosError extends Error {
  config: AxiosRequestConfig;
  code?: string;
  request?: any;
  response?: AxiosResponse;
  isAxiosError: boolean;
  toJSON: () => object;
}

const onError = (error: AxiosError) => {
  console.error(`Request Failed:`, error.config);

  if (error.response) {
    console.error('Status:', error.response.status);
    console.error('Data:', error.response.data);
    console.error('Headers:', error.response.headers);
  } else {
    console.error('Error Message:', error.message);
  }
  return Promise.reject(error.response || error.message);
};

export const axiosRequest = async (options: AxiosRequestConfig) => {
  try {
    const response = await axiosClient(options);
    return response?.data;
  } catch (error) {
    return onError(error);
  }
};
