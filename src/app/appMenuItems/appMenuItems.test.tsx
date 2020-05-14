import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import { AppMenuItems } from './appMenuItems';

describe('<AppMenuItems />', () => {
  const setCollapsed = jest.fn();

  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: () => ({
      pathname: '/'
    })
  }));

  afterEach(() => {});

  test('Should render the component', () => {
    const { container, getAllByTestId } = render(
      <BrowserRouter>
        <AppMenuItems mobile collapsed setCollapsed={setCollapsed} />
      </BrowserRouter>
    );
    fireEvent.click(getAllByTestId('menuItem')[1]);
    expect(container).toBeInTheDocument();
    expect(setCollapsed).toHaveBeenCalled();
  });
});
