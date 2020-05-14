/* eslint-disable prefer-promise-reject-errors */
import { AxiosMock } from 'utils/testing/axiosMock';

import { POST } from 'utils/constants';
import { axiosClient } from './axiosClient';
import { axiosRequest } from './axiosRequest';

jest.mock('./axiosClient');

const mockAxiosClient = axiosClient as AxiosMock;

describe('AxiosRequest', () => {
  const DUMMY_URL = 'http://www.dummyurl.com.com';

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('axiosClient on Success', async () => {
    mockAxiosClient.mockImplementation(() =>
      Promise.resolve({
        data: {
          message:
            'https://images.dog.ceo/breeds/terrier-silky/n02097658_641.jpg',
          status: 'success'
        }
      })
    );
    expect(
      await axiosRequest({
        url: DUMMY_URL,
        data: { test: 'dummy_data' },
        method: POST
      })
    ).toEqual({
      message: 'https://images.dog.ceo/breeds/terrier-silky/n02097658_641.jpg',
      status: 'success'
    });
    mockAxiosClient.mockClear();
  });

  test('axiosClient on Error with error.message', async () => {
    mockAxiosClient.mockImplementation(() =>
      Promise.reject({
        data: {
          status: 'error',
          message:
            'No route found for "GET /api/breeds/imadge/random" (from "http://localhost:3000/test") with code: 0',
          code: 404
        },
        status: 404,
        statusText: '',
        headers: {
          'cache-control': 'no-cache, private',
          'content-type': 'application/json'
        },
        config: {
          url: 'https://dog.ceo/api/breeds/imadge/random',
          method: 'get',
          headers: { Accept: 'application/json, text/plain, */*' },
          baseURL: 'https://congresos.tv/api',
          transformRequest: [null],
          transformResponse: [null],
          timeout: 0,
          xsrfCookieName: 'XSRF-TOKEN',
          xsrfHeaderName: 'X-XSRF-TOKEN',
          maxContentLength: -1
        },
        request: {},
        message:
          'No route found for "GET /api/breeds/imadge/random" (from "http://localhost:3000/test") with code: 0'
      })
    );

    await expect(
      axiosRequest({
        url: DUMMY_URL,
        data: { test: 'dummy_data' },
        method: POST
      })
    ).rejects.toEqual(
      'No route found for "GET /api/breeds/imadge/random" (from "http://localhost:3000/test") with code: 0'
    );
    mockAxiosClient.mockClear();
  });

  test('axiosClient on Error with error.response', async () => {
    mockAxiosClient.mockImplementation(() =>
      Promise.reject({
        response: {
          status: 'error',
          message:
            'No route found for "GET /api/breeds/imadge/random" (from "http://localhost:3000/test") with code: 0',
          code: 404
        }
      })
    );

    await expect(
      axiosRequest({
        url: DUMMY_URL,
        data: { test: 'dummy_data' },
        method: POST
      })
    ).rejects.toEqual({
      status: 'error',
      message:
        'No route found for "GET /api/breeds/imadge/random" (from "http://localhost:3000/test") with code: 0',
      code: 404
    });
    mockAxiosClient.mockClear();
  });
});
