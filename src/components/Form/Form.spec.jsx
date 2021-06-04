import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import React from 'react';
import Form from './Form';

describe('<Form />', () => {
  it('should render Form', () => {
    const fn = jest.fn();

    render(<Form onSubmit={fn} role="form"/>);
    const form = screen.getByRole('form');
    expect(form).toBeInTheDocument();
  })

  it('should render input fields', () => {
    const fn = jest.fn();

    expect.assertions(3);

    render(<Form onSubmit={fn} role="form"/>);
    const input = screen.getAllByRole('textbox');
    input.forEach(input => {
      expect(input).toBeInTheDocument();
    });
  })

  it('should render button', () => {
    const fn = jest.fn();

    expect.assertions(1);

    render(<Form onSubmit={fn} role="form"/>);
    const button = screen.getByRole('button', {name: /calcular/i});
    expect(button).toBeInTheDocument();
  })
  
  it('should call function on submit', () => {
    const fn = jest.fn();

    render(<Form onSubmit={fn} role="form"/>);
    const form = screen.getByRole('form');

    fireEvent.submit(form);
    expect(fn).toHaveBeenCalledTimes(1);
  })
})