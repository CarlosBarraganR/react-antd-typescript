import axios from 'axios';
import { SagaIterator } from 'redux-saga';
import { AxiosMock } from 'utils/testing/axiosMock';
import { call, put, takeLatest } from 'redux-saga/effects';
import { SagaRegistry } from './sagaRegistry';

jest.mock('axios');
const mockAxios = axios as AxiosMock;

describe('ReducerRegistry', () => {
  const DUMMY_ACTION = 'DUMMY_ACTION';
  const DUMMY_ACTION_SUCCESS = 'DUMMY_ACTION_SUCCESS';
  const DUMMY_ACTION_ERROR = 'DUMMY_ACTION_ERROR';

  function* testSagaWatcher(): SagaIterator {
    yield takeLatest(DUMMY_ACTION, testSagaWorker);
  }

  function* testSagaWorker() {
    try {
      const response = yield call(
        mockAxios.mockResolvedValue({ data: 'dummy_data' })
      );
      yield put({ type: DUMMY_ACTION_SUCCESS, payload: response.data });
    } catch (error) {
      yield put({ type: DUMMY_ACTION_ERROR, error });
    }
  }

  test('should register new reducer when setChangeListener is called', () => {
    const sagaRegistry = new SagaRegistry();
    sagaRegistry.setChangeListener(() => testSagaWatcher);
    sagaRegistry.register(testSagaWatcher);
    expect(sagaRegistry.sagas).toEqual({ testSagaWatcher });
  });

  test('should return reducers when getSagas is called', () => {
    const sagaRegistry = new SagaRegistry();
    // Initial Empty state
    expect(sagaRegistry.getSagas()).toEqual({});
    // Add new saga
    sagaRegistry.register(testSagaWatcher);
    expect(sagaRegistry.getSagas()).toEqual({ testSagaWatcher });
    // Validate if Saga has been already added
    sagaRegistry.register(testSagaWatcher);
    expect(sagaRegistry.getSagas()).toEqual({ testSagaWatcher });
  });
});
