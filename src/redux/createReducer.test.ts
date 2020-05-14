import { AnyAction } from 'redux';
import { createReducer } from './createReducer';

describe('createReducer', () => {
  const DUMMY_ACTION = 'DUMMY_ACTION';
  const UPDATE_TEST_VALUE = 'UPDATE_TEST_VALUE';

  const reducerSliceName = 'testReducer';
  const initialState = {
    test: 'test'
  };

  const reducer = createReducer(reducerSliceName, initialState);

  const updateTestReducer = {
    [UPDATE_TEST_VALUE]: (state: any = initialState, action: AnyAction) => ({
      ...state,
      test: action.payload
    })
  };

  afterEach(() => {});

  test('Should create a new reducer', () => {
    reducer.updateReducer(updateTestReducer);

    expect(reducer(undefined, { type: DUMMY_ACTION })).toEqual({
      test: 'test'
    });
  });

  test('should update when action is already in reducer', () => {
    expect(
      reducer(initialState, { type: UPDATE_TEST_VALUE, payload: 'updated' })
    ).toEqual({
      test: 'updated'
    });
  });
});
