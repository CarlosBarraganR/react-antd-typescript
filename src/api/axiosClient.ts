import axios from 'axios';

/**
 * Axios Client with defaults
 * baseURL
 */
export const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API
});
