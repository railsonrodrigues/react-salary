import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import Card from './Card';

import props from './mock';

describe('<Card />', () => {
  it('should render Card correctly', () => {
    const { container } = render(<Card {...props} />);

    const cardWrapper = container.querySelector('div');
    const titleElement = container.querySelector('h3.sc-gtsrHT');
    const amountElement = container.querySelector('span.sc-dlnjwi');
    const percentageElement = container.querySelector('span.sc-hKFxyN');

    expect(cardWrapper).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(amountElement).toBeInTheDocument();
    expect(percentageElement).toBeInTheDocument();
  })
  it('should match snapshot', () => {
    const { container } = render(<Card {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  })
})
