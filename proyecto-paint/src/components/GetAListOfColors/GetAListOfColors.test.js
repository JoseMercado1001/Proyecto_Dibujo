import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GetAListOfColors from './GetAListOfColors';

describe('<GetAListOfColors />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<GetAListOfColors />);
    const getAListOfColors = getByTestId('GetAListOfColors');

    expect(getAListOfColors).toBeInTheDocument();
  });
});