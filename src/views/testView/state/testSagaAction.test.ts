import { axiosModule } from 'api/axiosModule';
import { runSaga } from 'redux-saga';
import { takeLatest } from 'redux-saga/effects';
import {
  API_CALL_REQUEST,
  API_CALL_SUCCESS,
  API_CALL_ERROR,
  TestSagaAction,
  dogsTestApiCallWatcher,
  dogsTestApiCallWorker
} from './testSagaAction';
import { dogsTestReducer } from '../testReducer';

describe('dogsTestApiCallWatcher', () => {
  test('should dispatch action "API_CALL_REQUEST" ', () => {
    const generator = dogsTestApiCallWatcher();

    expect(generator.next().value).toEqual(
      takeLatest(API_CALL_REQUEST, dogsTestApiCallWorker)
    );

    expect(generator.next().done).toBeTruthy();

    expect(dogsTestReducer(undefined, { type: API_CALL_REQUEST })).toEqual({
      loading: true,
      dogUrl: '',
      error: null
    });
  });

  test('should dispatch action "API_CALL_SUCCESS" ', async () => {
    const dispatched: Array<TestSagaAction> = [];
    const response = {
      message: 'https://images.dog.ceo/breeds/finnish-lapphund/mochilamvan.jpg',
      status: 'success'
    };
    const request = jest
      .spyOn(axiosModule, '$get')
      .mockImplementation(() => Promise.resolve(response));

    await runSaga(
      {
        dispatch: (action: TestSagaAction) => dispatched.push(action)
      },
      dogsTestApiCallWorker
    );

    expect(request).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([{ type: API_CALL_SUCCESS, payload: response }]);

    expect(
      dogsTestReducer(undefined, { type: API_CALL_SUCCESS, payload: response })
    ).toEqual({
      loading: false,
      dogUrl: 'https://images.dog.ceo/breeds/finnish-lapphund/mochilamvan.jpg',
      error: null
    });
    request.mockClear();
  });

  test('should dispatch action "API_CALL_ERROR" ', async () => {
    const dispatched: Array<TestSagaAction> = [];
    const request = jest
      .spyOn(axiosModule, '$get')
      .mockImplementation(() => Promise.reject(new Error('Error')));

    await runSaga(
      {
        dispatch: (action: TestSagaAction) => dispatched.push(action)
      },
      dogsTestApiCallWorker
    );

    expect(request).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([{ type: API_CALL_ERROR }]);

    expect(
      dogsTestReducer(undefined, {
        type: API_CALL_ERROR,
        error: { status: 'error', code: 404 }
      })
    ).toEqual({
      loading: false,
      dogUrl: '',
      error: {
        code: 404,
        status: 'error'
      }
    });
    request.mockClear();
  });
});
