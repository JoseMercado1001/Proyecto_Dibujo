import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PaintButton from './PaintButton';

describe('<PaintButton />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<PaintButton />);
    const paintButton = getByTestId('PaintButton');

    expect(paintButton).toBeInTheDocument();
  });
});