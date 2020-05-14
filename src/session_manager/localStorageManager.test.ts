/* eslint-disable no-proto */
import { LocalStorageManager } from './localStorageManager';

describe('LocalStorageManager', () => {
  const TEST_KEY = 'TEST_KEY';

  test('setItem', () => {
    jest.spyOn(window.localStorage.__proto__, 'setItem');
    window.localStorage.__proto__.setItem = jest.fn();

    LocalStorageManager.set(TEST_KEY, 'test_item');
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  test('getItem', () => {
    jest.spyOn(window.localStorage.__proto__, 'getItem');
    window.localStorage.__proto__.getItem = jest.fn();

    LocalStorageManager.get(TEST_KEY);
    expect(localStorage.getItem).toHaveBeenCalled();
  });

  test('deleteItem', () => {
    jest.spyOn(window.localStorage.__proto__, 'removeItem');
    window.localStorage.__proto__.removeItem = jest.fn();

    LocalStorageManager.delete(TEST_KEY);
    expect(localStorage.removeItem).toHaveBeenCalled();
  });
});
