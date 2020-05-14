import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { NotFoundView } from './notFound';

describe('<NotFoundView />', () => {
  afterEach(() => {});

  test('Should render the component', () => {
    const { container } = render(
      <BrowserRouter>
        <NotFoundView />
      </BrowserRouter>
    );
    expect(container).toBeInTheDocument();
  });
});
