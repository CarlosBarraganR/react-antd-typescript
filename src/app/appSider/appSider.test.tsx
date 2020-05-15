import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { AppSider } from './appSider';

describe('<AppSider />', () => {
  const setCollapsed = jest.fn();
  const setMobile = jest.fn();

  afterEach(() => {});

  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: () => ({
      pathname: '/'
    })
  }));

  test('Should render the component', () => {
    const { container } = render(
      <BrowserRouter>
        <AppSider
          mobile
          setMobile={setMobile}
          collapsed
          setCollapsed={setCollapsed}
        />
      </BrowserRouter>
    );
    expect(container).toBeInTheDocument();
  });
});
