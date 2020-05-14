import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { AppHeader } from './appHeader';

describe('<AppHeader />', () => {
  const setCollapsed = jest.fn();

  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: () => ({
      pathname: '/'
    })
  }));

  test('Should render the component', () => {
    const { container, getByRole } = render(
      <AppHeader collapsed mobile setCollapsed={setCollapsed} />
    );
    expect(container).toBeInTheDocument();
    fireEvent.click(getByRole('img'));
    expect(setCollapsed).toHaveBeenCalled();
  });
});
