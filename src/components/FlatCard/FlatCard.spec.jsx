import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import React from 'react';
import FlatCard from './FlatCard';

const props = {
  title: "INSS",
  value: 700,
  percentage: 30,
}

describe('<FlatCard />', () => {
  it('should render FlatCard correctly', () => {
    const {container} = render(<FlatCard {...props} />)
    const flatCard = container.querySelector('div');
    const titleElement = container.querySelector('h3.sc-dlnjwi');
    const amountElement = container.querySelector('span.sc-gtsrHT');
    const percentageElement = container.querySelector('span.kquQli');

    expect(flatCard).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(amountElement).toBeInTheDocument();
    expect(percentageElement).toBeInTheDocument();
  })
  it('should match snapshot', () => {
    const {container} = render(<FlatCard {...props} />)
    expect(container.firstChild).toMatchSnapshot();
  })
})