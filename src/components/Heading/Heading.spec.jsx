import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import React from 'react';
import Heading from './Heading';

describe('<Heading />', () => {
  it('should render heading with text', () => {
    render(<Heading title="Hello World!" align="center" />)
    const heading = screen.getByText('Hello World!');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Hello World!');
  })
  it('should match snapshot', () => {
    const {container} = render(<Heading title="Hello World!" align="center" />)
    expect(container.firstChild).toMatchSnapshot();
  })
})