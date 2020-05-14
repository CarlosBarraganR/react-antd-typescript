import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Overlay } from './overlay';

describe('<Overlay />', () => {
  const setMobile = jest.fn();

  afterEach(() => {});

  test('Should render the component', () => {
    const { container, getByRole } = render(
      <Overlay active onClick={setMobile} />
    );
    expect(container).toBeInTheDocument();
    fireEvent.click(getByRole('button'));
    fireEvent.keyUp(getByRole('button'));
    expect(setMobile).toHaveBeenCalledTimes(2);
  });
});
