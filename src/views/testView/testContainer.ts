import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { TestView } from './testView';
import {
  loadingTestSelector,
  errorTestSelector,
  dogTestSelector
} from './testSelector';
import { dogsTestApiCallAction, TestSagaAction } from './state/testSagaAction';
import { TestViewReducer } from './testReducer';

export interface TestViewActions {
  dogsTestApiCall: () => TestSagaAction;
}

const mapStateToProps = (state: TestViewReducer): TestViewReducer => ({
  loading: loadingTestSelector(state),
  error: errorTestSelector(state),
  dogUrl: dogTestSelector(state)
});

const mapDispatchToProps = (dispatch: Dispatch): TestViewActions => {
  return {
    dogsTestApiCall: () => dispatch(dogsTestApiCallAction())
  };
};

export const TestViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TestView);
