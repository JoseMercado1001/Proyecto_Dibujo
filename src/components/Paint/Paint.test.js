import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Paint from './Paint';

describe('<Paint />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Paint />);
    const paint = getByTestId('Paint');

    expect(paint).toBeInTheDocument();
  });
});