import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import React from 'react';
import Input from './Input';

describe('<Input />', () => {
  it('should render Input correctly', () => {
    render(<Input placeholder="Digite aqui" id="1" />)
    const input = screen.getByRole('textbox');

    expect.assertions(3);

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('placeholder', 'Digite aqui');
    expect(input).toHaveAttribute('id', '1');
  })
  it('should do not render input with pre-value', () => {
    render(<Input placeholder="Digite aqui" id="1" />)
    const input = screen.getByPlaceholderText('Digite aqui')
    expect(input.value).toBe('')
  })
  it('should match snapshot', () => {
    const { container } = render(<Input placeholder="Digite aqui" id="1" />)
    expect(container.firstChild).toMatchSnapshot();
  })
})