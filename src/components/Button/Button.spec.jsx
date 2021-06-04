import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import React from 'react'

import Button from "./Button"

describe('<Button />', () => {
  it('should render Button', () => {
    render(<Button value="Calcular" />);

    expect.assertions(1);
    
    const button = screen.getByRole('button', {name: /calcular/i})
    expect(button).toBeInTheDocument();
  })
})