import React from 'react';
import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { App } from './App';

const middlewares = [createSagaMiddleware()];
const mockStore = configureStore(middlewares);

describe('App', () => {
  test('Should render App Component Integrated with Redux and Sagas', () => {
    const { getByTestId } = render(
      <Provider store={mockStore({})}>
        <App />
      </Provider>
    );
    expect(getByTestId('app')).toBeInTheDocument();
  });
});
