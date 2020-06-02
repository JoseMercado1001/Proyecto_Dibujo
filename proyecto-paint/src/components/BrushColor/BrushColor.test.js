import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BrushColor from './BrushColor';

describe('<BrushColor />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<BrushColor />);
    const brushColor = getByTestId('BrushColor');

    expect(brushColor).toBeInTheDocument();
  });
});