import { createReducer } from 'redux/createReducer';

const reducerSliceName = 'dogsTestSlice';

export type TestView = {
  loading: boolean;
  error: Object | null;
  dogUrl: string;
};

const initialState: TestView = {
  loading: false,
  dogUrl: '',
  error: null
};

export const dogsTestReducer = createReducer(reducerSliceName, initialState);
