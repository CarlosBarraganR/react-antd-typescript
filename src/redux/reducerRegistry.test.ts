import { ReducerRegistry } from './reducerRegistry';
import { createReducer } from './createReducer';

describe('ReducerRegistry', () => {
  const reducerSliceName = 'testReducer';
  const initialState = {
    test: 'test'
  };

  const reducer = createReducer(reducerSliceName, initialState);

  test('should register new reducer when setChangeListener is called', () => {
    const reducerRegistry = new ReducerRegistry();
    reducerRegistry.setChangeListener(() =>
      reducer(initialState, { type: 'dummy_action' })
    );
    reducerRegistry.register(reducer);
    expect(reducerRegistry.reducers).toEqual({ testReducer: reducer });
  });

  test('should return reducers when getReducers is called', () => {
    const reducerRegistry = new ReducerRegistry();
    expect(reducerRegistry.getReducers()).toEqual({});
    reducerRegistry.register(reducer);
    expect(reducerRegistry.getReducers()).toEqual({
      testReducer: reducer
    });
  });
});
