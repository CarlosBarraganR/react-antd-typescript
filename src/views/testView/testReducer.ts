import { createReducer } from 'redux/createReducer';

const reducerSliceName = 'dogsTestSlice';

export type TestViewReducer = {
  readonly loading: boolean;
  readonly error?: Object | null;
  readonly dogUrl?: string;
};

const initialState: TestViewReducer = {
  loading: false,
  dogUrl: '',
  error: null
};

export const dogsTestReducer = createReducer(reducerSliceName, initialState);
