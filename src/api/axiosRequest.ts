/* eslint-disable no-console */
import { axiosClient } from './axiosClient';

export const axiosRequest = async (options: Object) => {
  const onError = (error: any) => {
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

  try {
    const response = await axiosClient(options);
    return response.data;
  } catch (error) {
    return onError(error);
  }
};
