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
  it('should call function on submit', () => {
    const fn = jest.fn();

    render(<Form onSubmit={fn} role="form"/>);
    const form = screen.getByRole('form');

    fireEvent.submit(form);
    expect(fn).toHaveBeenCalledTimes(1);
  })
})