import { createSelector } from 'reselect';
import { dogsTestReducer } from './testReducer';

const testSlice = (state: any) => state[dogsTestReducer.sliceName];

export const loadingTestSelector = createSelector(
  testSlice,
  slice => slice?.loading
);

export const errorTestSelector = createSelector(
  testSlice,
  slice => slice?.error
);

export const dogTestSelector = createSelector(
  testSlice,
  slice => slice?.dogUrl
);
