import { GET, POST, DELETE, PUT, PATCH } from 'utils/constants';
import { axiosRequest } from './axiosRequest';
import { axiosModule } from './axiosModule';

jest.mock('./axiosRequest');

describe('AxiosModule', () => {
  const DUMMY_URL = 'http://www.dummyurl.com.com';
  const DUMMY_DATA = { data: 'dummy' };

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('$get', () => {
    axiosModule.$get(DUMMY_URL);
    expect(axiosRequest).toHaveBeenCalledWith({
      method: GET,
      url: DUMMY_URL
    });
  });

  test('$post', () => {
    axiosModule.$post(DUMMY_URL, DUMMY_DATA);
    expect(axiosRequest).toHaveBeenCalledWith({
      data: 'dummy',
      method: POST,
      url: DUMMY_URL
    });
  });

  test('$delete', () => {
    axiosModule.$delete(DUMMY_URL, DUMMY_DATA);
    expect(axiosRequest).toHaveBeenCalledWith({
      data: 'dummy',
      method: DELETE,
      url: DUMMY_URL
    });
  });

  test('$put', () => {
    axiosModule.$put(DUMMY_URL, DUMMY_DATA);
    expect(axiosRequest).toHaveBeenCalledWith({
      data: 'dummy',
      method: PUT,
      url: DUMMY_URL
    });
  });

  test('$patch', () => {
    axiosModule.$patch(DUMMY_URL, DUMMY_DATA);
    expect(axiosRequest).toHaveBeenCalledWith({
      data: 'dummy',
      method: PATCH,
      url: DUMMY_URL
    });
  });
});
