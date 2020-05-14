import { AnyAction } from 'redux';
import { axiosModule } from 'api/axiosModule';
import { SagaIterator } from 'redux-saga';
import { takeLatest, call, put } from 'redux-saga/effects';
import { sagaRegistry } from 'redux/sagaRegistry';
import { dogsTestReducer, TestViewReducer } from '../testReducer';

const createActionName = (name: string): string =>
  `app/${dogsTestReducer.sliceName}/${name}`;

export const API_CALL_REQUEST = createActionName('API_CALL_REQUEST');
export const API_CALL_SUCCESS = createActionName('API_CALL_SUCCESS');
export const API_CALL_ERROR = createActionName('API_CALL_ERROR');

export interface TestSagaAction {
  type:
    | typeof API_CALL_REQUEST
    | typeof API_CALL_SUCCESS
    | typeof API_CALL_ERROR;
}

export const dogsTestApiCallAction = (): TestSagaAction => ({
  type: API_CALL_REQUEST
});

const dogsTestApiCall = (): Promise<any> =>
  axiosModule.$get('https://dog.ceo/api/breeds/image/random');

export function* dogsTestApiCallWatcher(): SagaIterator {
  yield takeLatest(API_CALL_REQUEST, dogsTestApiCallWorker);
}
sagaRegistry.register(dogsTestApiCallWatcher);

export function* dogsTestApiCallWorker() {
  try {
    const response = yield call(dogsTestApiCall);
    yield put({ type: API_CALL_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: API_CALL_ERROR, error: error.data });
  }
}

const updatedDogTestReducer = {
  [API_CALL_REQUEST]: (state: TestViewReducer) => {
    return {
      ...state,
      loading: true
    };
  },
  [API_CALL_SUCCESS]: (state: TestViewReducer, action: AnyAction) => {
    return {
      ...state,
      loading: false,
      dogUrl: action.payload.message
    };
  },
  [API_CALL_ERROR]: (state: TestViewReducer, action: AnyAction) => {
    return {
      ...state,
      loading: false,
      error: action.error
    };
  }
};

dogsTestReducer.updateReducer(updatedDogTestReducer);
