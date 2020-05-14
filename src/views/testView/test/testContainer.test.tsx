import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { TestViewContainer } from '../testContainer';

describe('<TestViewContainer />', () => {
  const testState = {
    loading: false,
    dogUrl: '',
    error: null
  };
  const mockStore = configureMockStore();
  const store = mockStore(testState);

  afterEach(() => {});

  test('Should render the container successfuly', () => {
    const { container } = render(
      <Provider store={store}>
        <TestViewContainer />
      </Provider>
    );
    expect(container).toBeInTheDocument();
  });
});
