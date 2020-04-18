import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { TestView } from './testView';
import {
  loadingTestSelector,
  errorTestSelector,
  dogTestSelector
} from './testSelector';
import { dogsTestApiCallAction } from './state/testSagaAction';

const mapStateToProps = (state: Object): Object => {
  return {
    loading: loadingTestSelector(state),
    error: errorTestSelector(state),
    dogUrl: dogTestSelector(state)
  };
};

const mapDispatchToProps = (dispatch: Dispatch): Object => {
  return {
    dogsTestApiCall: () => dispatch(dogsTestApiCallAction())
  };
};

export const TestViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TestView);
