import { SESSION_KEY } from 'utils/constants';
import { SessionManager } from './sessionManager';
import { LocalStorageManager } from './localStorageManager';

jest.mock('./localStorageManager');

describe('SessionManager', () => {
  const TEST_ACCESS_TOKEN = 'TEST_ACCESS_TOKEN';
  const TEST_TOKEN_TYPE = 'TEST_TOKEN_TYPE';

  afterEach(() => {
    jest.clearAllMocks();
    jest.spyOn(LocalStorageManager, 'get').mockReturnValue(null);
  });

  test('saveSession', () => {
    SessionManager.save({
      accessToken: TEST_ACCESS_TOKEN,
      tokenType: TEST_TOKEN_TYPE
    });
    expect(LocalStorageManager.set).toHaveBeenCalledWith(
      SESSION_KEY,
      '{"accessToken":"TEST_ACCESS_TOKEN","tokenType":"TEST_TOKEN_TYPE"}'
    );
  });

  test('loadSession', () => {
    SessionManager.load();
    expect(LocalStorageManager.get).toHaveBeenCalledWith(SESSION_KEY);
    jest
      .spyOn(LocalStorageManager, 'get')
      .mockReturnValue(
        '{"accessToken":"TEST_ACCESS_TOKEN","tokenType":"TEST_TOKEN_TYPE"}'
      );
    expect(SessionManager.load()).toEqual({
      accessToken: TEST_ACCESS_TOKEN,
      tokenType: TEST_TOKEN_TYPE
    });
  });

  test('deleteSession', () => {
    SessionManager.delete();
    expect(LocalStorageManager.delete).toHaveBeenCalledWith(SESSION_KEY);
  });

  test('isAuthenticated', () => {
    expect(SessionManager.authenticated()).toBeFalsy();
    jest
      .spyOn(LocalStorageManager, 'get')
      .mockReturnValue(
        '{"accessToken":"TEST_ACCESS_TOKEN","tokenType":"TEST_TOKEN_TYPE"}'
      );
    expect(SessionManager.authenticated()).toBeTruthy();
  });

  test('getHeaders', () => {
    expect(SessionManager.headers()).toBeFalsy();
    jest
      .spyOn(LocalStorageManager, 'get')
      .mockReturnValue(
        '{"accessToken":"TEST_ACCESS_TOKEN","tokenType":"TEST_TOKEN_TYPE"}'
      );
    expect(SessionManager.headers()).toEqual(
      'TEST_TOKEN_TYPE TEST_ACCESS_TOKEN'
    );
  });
});
